import "./ItemListContainer.scss";
import catalogue from "../../products/products";
import ItemList from "../ItemList";
import { useState, useEffect } from "react";
import Loading from "../Loading";

const ItemListContainer = ({ contTitle }) => {
	const [products, setProducts] = useState([]);
	const [loader, setLoader] = useState(true);

	const getProducts = (db) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (db) {
					resolve(db);
				} else {
					reject("No existen productos en esta categoría");
				}
				setLoader(false);
			}, 2000);
		});

	useEffect(() => {
		getProducts(catalogue)
			.then((result) => setProducts(result))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			{loader ? (
				<Loading />
			) : (
				<div className="item-list-container">
					<div className="title">
						<h2>{contTitle}</h2>
					</div>
					<div className="products">
						{products.length
							? products.map((product) => {
									return <ItemList items={product} />;
							  })
							: null}
					</div>
				</div>
			)}
		</>
	);
};

export default ItemListContainer;
