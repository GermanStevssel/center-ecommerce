import { Typography } from "antd";
import { Content } from "antd/lib/layout/layout";

const { Title } = Typography;

const Cart = () => {
	return (
		<Content className="container">
			<Typography>
				<Title>Tu carrito esta vacío!</Title>
			</Typography>
		</Content>
	);
};

export default Cart;
