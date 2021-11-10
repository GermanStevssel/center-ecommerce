import { Button, Col, Row, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import "./Cart.less";

const { Title } = Typography;

const Cart = () => {
	return (
		<Content className="container cart">
			<Row>
				<Col>
					<Typography>
						<Title>Oops! Tu carrito esta vacío!</Title>
					</Typography>
				</Col>
			</Row>
			<Row>
				<Col>
					<Link to="/">
						<Button type="primary" className="btn-buscar-productos">
							Buscar productos
						</Button>
					</Link>
				</Col>
			</Row>
		</Content>
	);
};

export default Cart;
