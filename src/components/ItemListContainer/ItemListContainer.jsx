import "./ItemListContainer.less";
import catalogue from "../../products/products";
import ItemList from "../ItemList";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import { Content } from "antd/lib/layout/layout";

const ItemListContainer = ({ contTitle }) => {
	const [products, setProducts] = useState(null);

	const getProducts = (db) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (db) {
					resolve(db);
				} else {
					reject("No existen productos en esta categoría");
				}
			}, 2000);
		});

	useEffect(() => {
		getProducts(catalogue)
			.then((result) => setProducts(result))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			{products?.length ? (
				<Content>
					<div className="item-list-container">
						<div className="title">
							<h2>{contTitle}</h2>
						</div>
						<div className="products">
							<ItemList items={products} />
						</div>
					</div>
				</Content>
			) : (
				<Loading />
			)}
		</>
	);
};

export default ItemListContainer;
