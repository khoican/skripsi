import logo from '/logo.png';

const Loading = (props) => {
	const { text } = props;

	return (
		<div className="fixed z-99 top-0 w-full h-screen bg-white flex flex-col gap-3 items-center justify-center">
			<img src={logo} alt="" className="w-1/4 md:w-full" />
			<h1 className="font-semibold tracking-wider text-lg">
				AS-SAKINAH MART
			</h1>
		</div>

		// <div className="fixed top-0 left-0 bg-white bg-opacity-50 z-50 h-screen w-screen flex items-center justify-center">
		// 	<div className="flex items-center flex-col">
		// 		<svg
		// 			className="animate-spin h-5 w-5 text-green-800"
		// 			xmlns="http://www.w3.org/2000/svg"
		// 			fill="none"
		// 			viewBox="0 0 24 24"
		// 		>
		// 			<circle
		// 				className="opacity-25"
		// 				cx="12"
		// 				cy="12"
		// 				r="10"
		// 				stroke="currentColor"
		// 				strokeWidth="4"
		// 			></circle>
		// 			<path
		// 				className="opacity-75"
		// 				fill="currentColor"
		// 				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		// 			></path>
		// 		</svg>
		// 		{text && <span className="text-xl mt-2">{text}</span>}
		// 	</div>
		// </div>
	);
};

export default Loading;
