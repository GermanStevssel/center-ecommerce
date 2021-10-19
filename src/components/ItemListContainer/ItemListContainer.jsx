import { Card } from "antd";
import "./ItemListContainer.scss";
import products from "../../products/products";
import ItemCount from "../Counter/ItemCount";

const { Meta } = Card;

const ItemListContainer = ({ greeting }) => {
	return (
		<div className="itemListContainer">
			<div className="title">
				<h2>{greeting}</h2>
			</div>
			<div className="products">
				{products.map((product) => (
					<Card
						key={product.id}
						hoverable
						cover={<img alt={product.alt} src={product.img} />}
					>
						<Meta title={product.name} description={product.price} />
						<ItemCount stock={product.stock} />
					</Card>
				))}
			</div>
		</div>
	);
};

export default ItemListContainer;
