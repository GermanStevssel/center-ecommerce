import "./ItemListContainer.less";
import ItemList from "../../components/ItemList";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import fifa22 from "../../img/banner/banner-fifa22.jpg";
import xbox from "../../img/banner/banner-xbox-series-s.jpg";
import ps5 from "../../img/banner/banner-ps5.jpg";
import { Content } from "antd/lib/layout/layout";
import { Carousel } from "antd";
import { getFirestore } from "../../firebase/index";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = ({ contTitle }) => {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		const db = getFirestore();

		getDocs(collection(db, "items")).then((snapshot) => {
			setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});
	}, []);

	return (
		<>
			{products?.length ? (
				<>
					<Carousel autoplay>
						<div>
							<img className="img-banner" src={fifa22} alt="Banner FIFA22" />
						</div>
						<div>
							<img className="img-banner" src={ps5} alt="Banner PS5" />
						</div>
						<div>
							<img
								className="img-banner"
								src={xbox}
								alt="Banner Xbox Serie S"
							/>
						</div>
					</Carousel>
					<Content>
						<div className="item-list-container">
							<div className="title">
								<h2>{contTitle}</h2>
								<span>{contTitle}</span>
							</div>
							<div className="products">
								<ItemList items={products} />
							</div>
						</div>
					</Content>
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default ItemListContainer;
