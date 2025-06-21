// hooks/useProductSearch.js
import { useState, useEffect, useRef, useCallback } from 'react';

export const useProductSearch = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [searchProgress, setSearchProgress] = useState(0);
  
  const workerRef = useRef(null);
  const searchTimeoutRef = useRef(null);
  const pendingSearchRef = useRef(null); // Add this to handle pending searches
  const initializationPromiseRef = useRef(null); // Add this to track initialization

  useEffect(() => {
    const initializeWorker = async () => {
      try {
        // Use absolute path from public folder or relative to current component
        const workerPath = new URL('search/worker.js', window.location.origin);
        workerRef.current = new Worker(workerPath);
        
        workerRef.current.onmessage = (e) => {
          const { type, results, error, message, progress } = e.data;
          
          switch (type) {
            case 'INIT_SUCCESS':
              setIsInitialized(true);
              setSearchError(null);
              console.log('Search engine initialized:', message);
              
              // Execute pending search if any
              if (pendingSearchRef.current) {
                const { query, options } = pendingSearchRef.current;
                pendingSearchRef.current = null;
                performSearch(query, options);
              }
              break;
              
            case 'INIT_ERROR':
              setSearchError(`Initialization failed: ${error}`);
              setIsInitialized(false);
              console.error('Search engine initialization failed:', error);
              break;
              
            case 'SEARCH_SUCCESS':
              setSearchResults(results);
              setIsSearching(false);
              setSearchError(null);
              setSearchProgress(100);
              break;
              
            case 'SEARCH_ERROR':
              setSearchError(`Search failed: ${error}`);
              setIsSearching(false);
              setSearchResults(null);
              console.error('Search failed:', error);
              break;
              
            case 'SEARCH_PROGRESS':
              setSearchProgress(progress);
              break;
              
            default:
              console.warn('Unknown worker message type:', type);
          }
        };

        workerRef.current.onerror = (error) => {
          console.error('Worker error:', error);
          setSearchError('Worker initialization failed');
          setIsInitialized(false);
        };

      } catch (error) {
        console.error('Failed to create worker:', error);
        setSearchError('Web Worker not supported or worker file not found');
      }
    };

    initializeWorker();

    return () => {
      if (workerRef.current) {
        workerRef.current.postMessage({ type: 'TERMINATE' });
        workerRef.current.terminate();
      }
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  const updateProducts = useCallback((products) => {
    if (workerRef.current && products && products.length > 0) {
      setIsInitialized(false);
      setSearchError(null);
      
      // Create initialization promise
      initializationPromiseRef.current = new Promise((resolve, reject) => {
        const handleMessage = (e) => {
          const { type, error } = e.data;
          if (type === 'INIT_SUCCESS') {
            workerRef.current.removeEventListener('message', handleMessage);
            resolve();
          } else if (type === 'INIT_ERROR') {
            workerRef.current.removeEventListener('message', handleMessage);
            reject(new Error(error));
          }
        };
        
        workerRef.current.addEventListener('message', handleMessage);
      });
      
      workerRef.current.postMessage({
        type: 'INIT_SEARCH_ENGINE',
        data: { products }
      });
    }
  }, []);

  const performSearch = useCallback((query, options) => {
    if (!workerRef.current) {
      setSearchError('Worker not available');
      return;
    }

    setIsSearching(true);
    setSearchError(null);
    setSearchProgress(0);

    workerRef.current.postMessage({
      type: 'SEARCH',
      data: {
        query: query.trim(),
        options: {
          minScore: 0.1,
          maxResults: 100,
          exactMatchBonus: 2,
          similarityThreshold: 0.6,
          ...options
        }
      }
    });
  }, []);

  const search = useCallback(async (query, options = {}) => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (!query || !query.trim()) {
      setSearchResults(null);
      setSearchError(null);
      return;
    }

    searchTimeoutRef.current = setTimeout(async () => {
      if (!isInitialized) {
        // If not initialized, store the search for later
        pendingSearchRef.current = { query, options };
        
        // Wait for initialization if promise exists
        if (initializationPromiseRef.current) {
          try {
            await initializationPromiseRef.current;
            // Search will be executed automatically after initialization
          } catch (error) {
            setSearchError('Initialization failed, cannot perform search');
            console.error('Initialization failed:', error);
          }
        } else {
          setSearchError('Search engine not ready and no initialization in progress');
        }
        return;
      }

      performSearch(query, options);
    }, 300);
  }, [isInitialized, performSearch]);

  const clearSearch = useCallback(() => {
    setSearchResults(null);
    setSearchError(null);
    setIsSearching(false);
    setSearchProgress(0);
    pendingSearchRef.current = null; // Clear pending search
    
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
  }, []);

  const getSearchStats = useCallback(() => {
    if (!searchResults) return null;
    
    return {
      totalResults: searchResults.totalResults,
      displayedResults: searchResults.results.length,
      executionTime: searchResults.executionTime,
      query: searchResults.query
    };
  }, [searchResults]);

  return {
    searchResults: searchResults?.results || [],
    isSearching,
    searchError,
    isInitialized,
    searchProgress,
    
    updateProducts,
    search,
    clearSearch,
    getSearchStats,
    
    searchStats: getSearchStats(),
    executionTime: searchResults?.executionTime || null
  };
};