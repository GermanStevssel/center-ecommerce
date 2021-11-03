import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import catalogue from "../../products/products.json";
import ItemDetail from "../ItemDetail";
import Loading from "../Loading";

const ItemDetailContainer = () => {
	const { itemId } = useParams();
	const [item, setItem] = useState(null);

	console.log(item);
	console.log("2");

	const getItem = (item) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (item) {
					resolve(item);
				} else {
					reject("No existe el producto seleccionado");
				}
			}, 2000);
		});

	useEffect(() => {
		getItem(catalogue)
			.then((result) => setItem(result.find((item) => item.nameId === itemId)))
			.catch((err) => console.log(err));
	}, [itemId]);

	return <>{item ? <ItemDetail item={item} /> : <Loading />}</>;
};

export default ItemDetailContainer;
