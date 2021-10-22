import { Card } from "antd";
import ItemCount from "../ItemCount";

const { Meta } = Card;

const Item = (props) => {
	return (
		<div>
			<Card hoverable cover={<img alt={props.item.alt} src={props.item.img} />}>
				<Meta title={props.item.name} description={props.item.price} />
				<ItemCount stock={props.item.stock} />
			</Card>
		</div>
	);
};

export default Item;
