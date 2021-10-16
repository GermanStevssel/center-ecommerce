import { Card } from "antd";
import "./ItemListContainer.scss";
import img from "../../products/products";
import ItemCount from "../Counter/ItemCount";

const { Meta } = Card;

const ItemListContainer = (props) => {
	return (
		<div className="itemListContainer">
			<div className="title">
				<h2>{props.greeting}</h2>
			</div>
			<div className="products">
				{img.map((product) => (
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
