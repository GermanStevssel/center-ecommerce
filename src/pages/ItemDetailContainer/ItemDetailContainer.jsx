import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import Loading from "../../components/Loading";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
	const { itemId } = useParams();
	const [item, setItem] = useState(null);
	const { addToCart } = useCart();

	useEffect(() => {
		const itemRef = doc(db, "items", itemId);

		getDoc(itemRef).then((snapshot) => {
			if (snapshot.exists()) {
				setItem(snapshot.data());
			} else {
				console.log("Este producto no existe");
			}
		});
	}, [itemId]);

	return (
		<>{item ? <ItemDetail item={item} addToCart={addToCart} /> : <Loading />}</>
	);
};

export default ItemDetailContainer;
