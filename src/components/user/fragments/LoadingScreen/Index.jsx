import logo from '/logo.png';

const LoadingScreen = (props) => {
	return (
		<div className="absolute top-0 w-full h-screen bg-white flex flex-col gap-3 items-center justify-center">
			<img src={logo} alt="" className="w-1/4" />
			<h1 className="font-semibold tracking-wider text-lg">
				AS-SAKINAH MART
			</h1>
		</div>
	);
};

export default LoadingScreen;
