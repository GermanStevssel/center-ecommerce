import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../ItemList";
import Loading from "../Loading";
import catalogue from "../../products/products.json";
import { Content } from "antd/lib/layout/layout";

const CategoryListContainer = () => {
	const { categoryId } = useParams();
	const [items, setItems] = useState(null);

	const getCategoryItems = (items) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (items) {
					resolve(items);
				} else {
					reject("No existe el producto seleccionado");
				}
			}, 2000);
		});

	useEffect(() => {
		getCategoryItems(catalogue)
			.then((result) =>
				setItems(result.filter((items) => items.category === categoryId))
			)
			.catch((err) => console.log(err));
	}, [categoryId]);

	return (
		<>
			{items?.length ? (
				<Content>
					<div className="item-list-container">
						<div className="title">
							<h2>{categoryId}</h2>
						</div>
						<div className="products">
							<ItemList items={items} />
						</div>
					</div>
				</Content>
			) : (
				<Loading />
			)}
		</>
	);
};

export default CategoryListContainer;
