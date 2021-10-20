import "./ItemListContainer.scss";
import catalogue from "../../products/products";
import ItemList from "../ItemList/ItemList";
import { useState } from "react";

const ItemListContainer = ({ contTitle }) => {
	const [products, setProducts] = useState([]);

	const task = new Promise((resolve) => {
		setTimeout(() => {
			resolve(catalogue);
		}, 2000);
	});

	task.then((result) => setProducts(result));

	return (
		<div className="itemListContainer">
			<div className="title">
				<h2>{contTitle}</h2>
			</div>
			<div className="products">
				{products.map((product) => {
					return <ItemList items={product} />;
				})}
			</div>
		</div>
	);
};

export default ItemListContainer;
