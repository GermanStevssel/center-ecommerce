import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../../components/ItemList";
import Loading from "../../components/Loading";
import { Content } from "antd/lib/layout/layout";
import { getFirestore } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const CategoryListContainer = () => {
	const { categoryId } = useParams();
	const [items, setItems] = useState(null);

	useEffect(() => {
		const db = getFirestore();

		const q = query(
			collection(db, "items"),
			where("category", "==", categoryId)
		);

		getDocs(q).then((snapshot) => {
			setItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});
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
