import { Card } from "antd";
import ItemCount from "../Counter/ItemCount";

const { Meta } = Card;

const Item = ({ id, alt, img, name, price, stock }) => {
	console.log({ img });
	return (
		<div>
			<Card key={id} hoverable cover={<img alt={alt} src={img} />}>
				<Meta title={name} description={price} />
				<ItemCount stock={stock} />
			</Card>
		</div>
	);
};

export default Item;
