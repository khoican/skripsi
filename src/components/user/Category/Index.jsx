import { Fragment, useEffect, useState } from "react"
import { ChevronDownIcon, ListBulletIcon, HashtagIcon } from "@heroicons/react/24/solid"

const Category = () => {
    const [open, setOpen] = useState(false)
    function handleClick() {
        setOpen(!open)
    }

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/category').
            then(res => res.json()).
            then(data => setData(data)).
            catch(err => console.log(err))
    },[])
    

    return (
        <Fragment>
            <div className="w-72">
                <h1 className="font-semibold font-montserrat bg-slate-200 py-3 px-5">KATEGORI</h1>

                {data?.map((item, index) => (
                    <div key={index}>
                        <div className="px-5 hover:bg-green-900 hover:text-white" onClick={() => handleClick(index)}>
                            <div className="font-poppins cursor-pointer border-b-2 border-slate-200 hover:border-green-900">
                                <div className=" flex justify-between items-center py-3">
                                    <div className="flex items-center gap-3">
                                        <ListBulletIcon className="w-5 h-5" />
                                        <p>{item.categoryName}</p>
                                    </div>
                                    <ChevronDownIcon className="w-3 h-3" />
                                </div>
                            </div>
                        </div>

                        {item.subCategories.map((item) => (
                            <div key={item.subCategoryId}>
                                {open && (
                                    <div className="px-5 hover:bg-green-600 hover:text-white">
                                        <div className="font-poppins cursor-pointer ps-5">
                                            <div className="border-b-2 border-slate-200 py-3 flex gap-3 items-center hover:border-green-600">
                                                <HashtagIcon className="w-3 h-3" />
                                                <p>{item.subCategoryName}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default Category