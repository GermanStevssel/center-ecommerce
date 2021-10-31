import { useState, useEffect } from "react";
import catalogue from "../../products/products.json";
import ItemDetail from "../ItemDetail";
import Loading from "../Loading";

const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);

	const getItem = (item) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (item) {
					console.log(item);
					resolve(item);
				} else {
					reject("No existe el producto seleccionado");
				}
			}, 2000);
		});

	useEffect(() => {
		getItem(catalogue)
			.then((result) => setItem(result[0])) // Aca ira algun parametro dinámico que selecciono el id del producto que deseo
			.catch((err) => console.log(err));
	}, []);

	return <>{item ? <ItemDetail item={item} /> : <Loading />}</>;
};

export default ItemDetailContainer;
