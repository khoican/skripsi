import BestSellerImage from "../../../../../public/images/Rectangle 9.png";

const ListBestSellerProduct = () => {
    return (
        <>
            <div className="flex justify-between gap-5 pb-5">
                <div className="gap-5 flex justify-center">
                    <div className="m-auto">
                        <img
                            src={BestSellerImage}
                            className="w-20"
                            alt="BestSellerProduct"
                        />
                    </div>
                    <div className="m-auto">
                        <h2 className="font-semibold text-lg">
                            Pakaian Dinas Harian
                        </h2>
                        <p className="font-semibold text-light-red text-xl">
                            Rp. 200.000,-
                        </p>
                    </div>
                </div>
                <div className="my-auto">
                    <p className="font-semibold text-xl">10</p>
                </div>
            </div>
        </>
    );
};

export default ListBestSellerProduct;
