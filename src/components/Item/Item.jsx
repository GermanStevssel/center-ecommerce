import { Card } from "antd";

const { Meta } = Card;

// Formatear números a pesos argentinos
export const formatter = new Intl.NumberFormat("es-AR", {
	style: "currency",
	currency: "ARS",
	minimumFractionDigits: 0,
});

const Item = ({ item }) => {
	return (
		<Card hoverable cover={<img alt={item.alt} src={item.img} />}>
			<Meta title={item.name} description={formatter.format(item.price)} />
		</Card>
	);
};

export default Item;
