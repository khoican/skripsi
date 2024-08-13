import { configureStore } from '@reduxjs/toolkit';
import productDetailReducer from '../reducer/productDetailReducer';
import productsReducer from '../reducer/productsReducer';
import categoryReducer from '../reducer/categoryReducer';
import orderReducer from '../reducer/orderReducer';
import userReducer from '../reducer/userReducer';
import subCategoryReducer from '../reducer/subCategoryReducer';
import counterReducer from '../reducer/counterReducer';

export default configureStore({
	reducer: {
		fetchBestSeller: productsReducer,
		fetchProductCount: productsReducer,
		fetchProductDetail: productDetailReducer,
		fetchProducts: productsReducer,
		fetchProductsDashboard: productsReducer,
		fetchCategories: categoryReducer,
		fetchSubCategories: subCategoryReducer,
		fetchOrderCount: orderReducer,
		fetchOrderOmzet: orderReducer,
		fetchOrders: orderReducer,
		fetchUsers: userReducer,
		fetchUserById: userReducer,
		createNewUser: userReducer,
		editUserById: userReducer,
		counter: counterReducer,
	},
});
