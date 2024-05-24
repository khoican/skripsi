import Button from '../Elements/Button';

const FormOrder = () => {
	return (
		<>
			<div className="flex justify-between px-4">
				<p className="font-bold text-2xl">#10435634</p>
				<div className="bg-light-orange px-2 py-1 rounded-md items-center">
					<p className="font-semibold text-white">Pending</p>
				</div>
			</div>
			<div className="px-4 py-8">
				<div className="flex">
					<p className="text-md font-semibold">Full Name</p>
					<p className="pl-44 pr-8 font-semibold">:</p>
					<p className="font-semibold">John Doe</p>
				</div>
				<div className="flex mt-3 items-center">
					<p className="text-md font-semibold">Phone Number</p>
					<p className="pl-[8.7rem] pr-5 font-semibold">:</p>
					<button>
						<img
							className="block"
							src="/public/images/WALogo.png"
							alt="Wa Logo"
						/>
					</button>
					<p className="font-semibold">+62 813-8492-999</p>
				</div>
				<div className="flex mt-3">
					<p className="text-md font-semibold">Address</p>
					<p className="pl-48 pr-8 font-semibold">:</p>
					<p className="font-semibold">Jl. Cempedak No. 1</p>
				</div>
				<div className="flex mt-5">
					<p className="text-md font-semibold">Note</p>
					<p className="pl-[13.4rem] pr-8 font-semibold">:</p>
					<p className="font-semibold">
						Rumah cat hijau, gerbang biru
					</p>
				</div>
				<div className="flex mt-5">
					<p className="text-md font-semibold">Order Time</p>
					<p className="pl-[10.6rem] pr-8 font-semibold">:</p>
					<p className="font-semibold">15 Desember 2023 - 12:32:48</p>
				</div>
			</div>
			<div className="px-4 py-2">
				<p className="font-bold text-lg">Details Order</p>
				<table className="w-full border-b-[1px] border-black">
					<tr className="font-bold border-b-2 border-black">
						<td className="py-2">No</td>
						<td>Product</td>
						<td>Qty</td>
						<td>Total</td>
					</tr>
					<tr className="border-b-[1px] border-black">
						<td className="py-2">1</td>
						<td>Pakaian Dinas Harian</td>
						<td>2</td>
						<td>Rp. 400.000</td>
					</tr>
					<tr className="border-b-[1px] border-black">
						<td className="text-sm py-2">
							Note: Tolong ukuran yang xl
						</td>
					</tr>
					<tr className="border-b-[1px] border-black">
						<td className="py-2">2</td>
						<td>Beras Cap Dua Kelinci - 5Kg</td>
						<td>1</td>
						<td>Rp. 55.000</td>
					</tr>
					<tr className="border-b-[1px] border-black">
						<td className="text-sm py-2">Note: </td>
					</tr>
				</table>
				<div className="mt-4 flex items-center justify-end pr-[5.1rem]">
					<p className="text-lg text-light-red pr-10">Total</p>
					<p className="text-lg font-bold text-light-red">
						Rp. 455.000
					</p>
				</div>
				<div className="mt-6 flex items-center justify-end gap-3">
					<Button variants="ring-1 ring-danger py-2 px-4 rounded-md text-red transition-all ease-in 3s hover:bg-red hover:text-white">
						Cancel
					</Button>
					<Button variants="bg-blue-500 py-2 px-4 rounded-md text-white transition-all ease-in 3s hover:bg-blue-900">
						Process
					</Button>
					<Button variants="bg-success py-2 px-4 rounded-md text-white transition-all ease-in 3s hover:bg-primary">
						Success
					</Button>
				</div>
			</div>
		</>
	);
};

export default FormOrder;
