import { Card } from "antd";
import ItemCount from "../ItemCount";

const { Meta } = Card;

const Item = (item) => {
	const itemFeature = item.item;
	return (
		<div>
			<Card
				key={itemFeature.id}
				hoverable
				cover={<img alt={itemFeature.alt} src={itemFeature.img} />}
			>
				<Meta title={itemFeature.name} description={itemFeature.price} />
				<ItemCount stock={itemFeature.stock} />
			</Card>
		</div>
	);
};

export default Item;
