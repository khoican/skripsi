/* eslint-disable import/no-absolute-path */
import logo from '/logo.png';

const Logo = () => {
	return (
		<div className="flex items-center gap-3 w-1/3">
			<img src={logo} alt="Logo As-Sakinah Mart" className="h-12 w-12" />
			<div className="uppercase">
				<h1 className="text-xl font-bold">As-Sakinah Mart</h1>
				<p className="text-xs font-semibold tracking-widest">
					Kopwan &#96;Aisiyah Jember
				</p>
			</div>
		</div>
	);
};

export default Logo;
