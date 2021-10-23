import { Card } from "antd";
import ItemCount from "../ItemCount";

const { Meta } = Card;

// Formatear números a pesos argentinos
const formatter = new Intl.NumberFormat("es-AR", {
	style: "currency",
	currency: "ARS",
	minimumFractionDigits: 0,
});

const Item = ({ item }) => {
	return (
		<div>
			<Card hoverable cover={<img alt={item.alt} src={item.img} />}>
				<Meta title={item.name} description={formatter.format(item.price)} />
				<ItemCount stock={item.stock} />
			</Card>
		</div>
	);
};

export default Item;
