import Input from '../Elements/Input';
import Label from '../Elements/Input/Label';
import Select from '../Elements/Select';
import Option from '../Elements/Select/option';
import Textarea from '../Elements/Textarea';
import ImageProduct from '../../../../public/images/Rectangle 11.png';
import Button from '../Elements/Button';
import Counter from '../../user/fragments/counter/Index';
import {
	postProduct,
	getProductById,
	editProduct,
} from '../../../../services/product';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCategories } from '../../../redux/actions/categoryAction';
import { fetchSubCategories } from '../../../redux/actions/subCategoryAction';
import { Link, useParams } from 'react-router-dom';
import CarouselImage from './Carousel';

const FormProduct = () => {
	const productId = useParams();
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.fetchCategories.category);
	let subCategories = useSelector(
		(state) => state.fetchSubCategories.category,
	);

	const [addProduct, setAddProduct] = useState({
		name: '',
		description: '',
		price: 0,
		stock: 0,
		subCategory: '',
		subCategoryId: 0,
		images: '',
	});

	const getProductId = async () => {
		const data = await getProductById(productId.id);
		return data;
	};

	useEffect(() => {
		dispatch(fetchCategories(productId.id));
		dispatch(fetchCategories());
		dispatch(fetchSubCategories());

		if (productId.id) {
			getProductId().then((data) => {
				console.log(data);
				setAddProduct({
					name: data.name,
					description: data.description,
					price: data.price,
					stock: data.stock,
					subCategory: data.subCategory,
					subCategoryId: data.subCategoryId,
					images: data.images,
				});
			});
		}
	}, [dispatch, productId]);

	const count = useSelector((state) => state.counter[1]?.count);

	const [addImage, setAddImage] = useState([]);
	const [addPreviewImage, setPreviewImage] = useState([]);

	const handleImage = (e) => {
		const files = Array.from(e.target.files);
		setAddImage((...prevImage) => [...prevImage, ...files]);
		setPreviewImage(files);
		console.log(files);
	};

	const [categoriesValue, setCategoriesValue] = useState(0);
	const handleChangeCategories = (e) => {
		setCategoriesValue(e.target.value);
	};

	subCategories = subCategories.filter((subCategory) =>
		productId.id && !categoriesValue
			? subCategory.categoryId === addProduct.subCategory.categoryId
			: productId.id && categoriesValue
				? subCategory.categoryId === categoriesValue
				: subCategory.categoryId === categoriesValue,
	);

	const handleAddProduct = (e) => {
		setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
	};

	const handleSubmitAddProduct = () => {
		const productData = {
			name: addProduct.name,
			description: addProduct.description,
			price: addProduct.price,
			stock: count,
			images: addImage.slice(1).map((file) => file),
			subCategoryId: addProduct.subCategoryId,
		};
		console.log(productData);
		productId.id
			? editProduct(productId.id, productData).then(() => {
					// window.location.reload();
				})
			: postProduct(productData).then(() => {
					window.location.reload();
				});
	};

	if (!addProduct) {
		return <p>Loading...</p>;
	}

	const imageProducts = addProduct.images;

	return (
		<div className="flex justify-between">
			<div className="w-2/4">
				<Label variants="font-semibold" htmlFor="productname">
					Product Name
				</Label>
				<div className="pt-2">
					<Input
						variants="rounded-lg ring-1 border-0 w-full ring-primary focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s py-2 px-3"
						type="text"
						name="name"
						placeholder="Insert Product Name"
						onChange={handleAddProduct}
						value={addProduct.name}
					/>
				</div>
				<div className="flex justify-start gap-2 ">
					<div className="w-full pt-4">
						<Label variants="font-semibold" htmlFor="category">
							Category
						</Label>
						<div className="pt-2">
							<Select
								variants="rounded-lg ring-1 border-0 w-full ring-primary focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s py-2 px-3"
								name="categoryId"
								title="Category"
								onChange={handleChangeCategories}
							>
								<Option
									value="Choose Category"
									title="Choose Category"
								/>
								{categories.map((category, index) => (
									<Option
										isEdit={
											category.id ===
											addProduct.subCategory.categoryId
												? true
												: false
										}
										key={index}
										value={category.id}
										title={category.name}
									/>
								))}
							</Select>
						</div>
					</div>
					<div className="w-full pt-4">
						<Label
							variants="font-semibold"
							htmlFor="subcategory"
							title="Sub Category"
						>
							Sub Category
						</Label>
						<div className="pt-2 pb-2">
							<Select
								variants="rounded-lg ring-1 border-0 w-full ring-primary focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s py-2 px-3"
								name="subCategoryId"
								title="Category"
								onChange={handleAddProduct}
							>
								<Option
									value="Choose Sub Category"
									title="Choose Sub Category"
								/>
								{subCategories.map((subCategory, index) => (
									<Option
										isEdit={
											subCategory.id ===
											addProduct.subCategoryId
												? true
												: false
										}
										key={index}
										value={subCategory.id}
										title={subCategory.name}
									/>
								))}
							</Select>
						</div>
					</div>
				</div>
				<div className="pt-4">
					<div className="pb-3">
						<Label
							variants="font-semibold pb-2"
							htmlFor="productdescription"
						>
							Description
						</Label>
					</div>
					<div className="pb-3">
						<Textarea
							variants="resize-none border-0 ring-primary ring-1 focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s rounded-lg w-full"
							name="description"
							cols="66"
							rows="10"
							onChange={handleAddProduct}
							value={addProduct.description}
						/>
					</div>
				</div>
				<div className="flex">
					<div className="pt-3">
						<Label htmlFor="productstock" variants="font-semibold">
							Stock
						</Label>
						<div className="pt-3">
							<Counter id={1} value={addProduct.stock} />
						</div>
					</div>
					<div className="pt-3 ml-2 w-full">
						<Label htmlFor="productprice" variants="font-semibold">
							Price
						</Label>
						<div className="pt-3">
							<Input
								type="number"
								name="price"
								variants="w-full rounded-lg border-0 ring-primary ring-1 focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s px-3 py-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
								onChange={handleAddProduct}
								value={addProduct.price}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-2/5">
				<CarouselImage>
					{addPreviewImage && addPreviewImage.length > 0 ? (
						addPreviewImage.map((image, index) => (
							<div className="flex justify-center ">
								<img
									key={index}
									src={URL.createObjectURL(image)}
									alt={`Image ${index}`}
								/>
							</div>
						))
					) : imageProducts ? (
						imageProducts.map((image, index) => (
							<div className="flex justify-center ">
								<img
									key={index}
									src={`https://api.kunam.my.id/${image.image}`}
									alt={`Image ${index}`}
								/>
							</div>
						))
					) : (
						<div className="flex justify-center ">
							<img
								key={0}
								src={ImageProduct}
								alt="Product Image"
							/>
						</div>
					)}
				</CarouselImage>
				<div className="py-7">
					<div className="pb-1 pt-4">
						<Label htmlFor="imageproduct" variants="font-semibold">
							Photo Product
						</Label>
					</div>
					<div className="pt-1 pb-1">
						<Input
							type="file"
							variants="rounded-lg ring-1 ring-primary focus:outline-none border-0 w-full py-2 px-3"
							name="images"
							id="images"
							placeholder="Choose Image"
							multiple
							onChange={handleImage}
						/>
						<p className="flex text-slate-500">
							<span className="text-danger pr-2">*</span>
							Please input file with jpg, jpeg, png, gif extension
						</p>
						{/* {addImage.map((file, index) => (
						<div className="pt-4" key={index} value={file.id}>
							<div className="rounded-lg py-2 px-3 flex justify-center">
								<Button
									type="button"
									variants="flex items-center focus:outline-none"
								>
									<DocumentTextIcon className="w-9 pr-2" />
									<p>{file.name}</p>
								</Button>
								<Button type="button">
									<img
										src={TrashIcon}
										alt=""
										className="h-5 my-auto pl-2"
									/>
								</Button>
							</div>
						</div>
						))}  */}
						<div className="pt-2">
							<p className="py-4 text-justify">
								Double check the data you entered before saving
								for this product
							</p>
							<div className="flex justify-end">
								<div className="px-2">
									<Link to="/dashboard/product">
										<Button
											type="button"
											variants="py-2 px-5 rounded-lg ring-1 ring-red text-red transition-all ease-in 3s hover:bg-red hover:text-white"
										>
											Cancel
										</Button>
									</Link>
								</div>
								<div className="px-2">
									<Button
										type="submit"
										variants="py-2 px-6 rounded-lg bg-success text-white transition-all ease-in 3s hover:bg-primary"
										onClick={handleSubmitAddProduct}
									>
										Save
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormProduct;
