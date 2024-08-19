import logo from '/logo.png';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ hide = false }) => {
	const [fade, setFade] = useState(false);

	useEffect(() => {
		if (hide) {
			setFade(true);
		}
	}, [hide]);

	return (
		<div
			className={`absolute top-0 w-full h-screen bg-white flex flex-col gap-3 items-center justify-center transition-opacity duration-500 ${
				fade ? 'opacity-0' : 'opacity-100'
			}`}
			style={{ pointerEvents: fade ? 'none' : 'all' }}
		>
			<img src={logo} alt="" className="w-1/4" />
			<h1 className="font-semibold tracking-wider text-lg">
				AS-SAKINAH MART
			</h1>
		</div>
	);
};

export default LoadingScreen;
