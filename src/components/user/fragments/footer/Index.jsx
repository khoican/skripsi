import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<footer className="bg-primary text-white p-5">
			<div className="flex md:flex-row flex-col justify-between">
				<div>
					<h1 className="text-md font-semibold">Kontak Kami</h1>

					<div className="mt-4 flex flex-col gap-3 text-xs">
						<div>
							<h4>Alamat</h4>
							<p className="font-extralight">
								Jl. Rotawu 2 No. 38 Jember - Jawa Timur 68121
							</p>
						</div>
						<div>
							<h4 className="text-sm">Sosial Media</h4>

							<div className="flex gap-2 mt-1">
								<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
									<FontAwesomeIcon
										icon={faWhatsapp}
										className="text-green-700"
									/>
								</div>
								<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
									<FontAwesomeIcon
										icon={faInstagram}
										className="text-green-700"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-5 md:mt-0">
					<h1 className="text-md font-semibold">As-Sakinah Mart</h1>

					<div className="mt-4 font-extralight text-xs flex flex-col md:text-end">
						<a href="">Beranda</a>
						<a href="">Produk</a>
						<a href="">Keranjang</a>
					</div>
				</div>
			</div>
			<div className="mt-5 border-t border-white pt-3">
				<p className="text-xs font-extralight">
					As-Sakinah Mart @ 2024
				</p>
			</div>
		</footer>
	);
};

export default Footer;
