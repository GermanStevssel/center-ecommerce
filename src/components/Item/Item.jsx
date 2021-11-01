import { Badge, Card, Typography } from "antd";

const { Meta } = Card;
const { Text } = Typography;

// Formatear números a pesos argentinos
export const formatter = new Intl.NumberFormat("es-AR", {
	style: "currency",
	currency: "ARS",
	minimumFractionDigits: 0,
});

const Item = ({ item }) => {
	return (
		<Badge.Ribbon text="Envío gratis">
			<Card hoverable cover={<img alt={item.alt} src={item.img} />}>
				<Typography>
					<Text>
						Stock:{" "}
						{item.stock > 1 ? (
							<Text type="success">Disponible</Text>
						) : (
							<Text type="warning">Ultima unidad</Text>
						)}
					</Text>
				</Typography>
				<Meta title={item.name} description={formatter.format(item.price)} />
			</Card>
		</Badge.Ribbon>
	);
};

export default Item;
