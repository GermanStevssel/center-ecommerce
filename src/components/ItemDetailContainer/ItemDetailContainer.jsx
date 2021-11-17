import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import catalogue from "../../products/products.json";
import ItemDetail from "../ItemDetail";
import Loading from "../Loading";
import { getFirestore } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
	const { itemId } = useParams();
	const [item, setItem] = useState(null);

	useEffect(() => {
		const db = getFirestore();
		const itemRef = doc(db, "items", { itemId });
		getDoc(itemRef).then((snapshot) => {
			if (snapshot.exists()) {
				setItem(snapshot.data());
			} else {
				console.log("Este producto no existe");
			}
		});
	}, []);

	return <>{item ? <ItemDetail item={item} /> : <Loading />}</>;
};

export default ItemDetailContainer;
