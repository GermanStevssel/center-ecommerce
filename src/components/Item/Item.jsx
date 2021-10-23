import { Card } from "antd";
import ItemCount from "../ItemCount";

const { Meta } = Card;

// Formatear números a pesos argentinos
const formatter = new Intl.NumberFormat("es-AR", {
	style: "currency",
	currency: "ARS",
	minimumFractionDigits: 0,
});

const Item = (props) => {
	return (
		<div>
			<Card hoverable cover={<img alt={props.item.alt} src={props.item.img} />}>
				<Meta
					title={props.item.name}
					description={formatter.format(props.item.price)}
				/>
				<ItemCount stock={props.item.stock} />
			</Card>
		</div>
	);
};

export default Item;
