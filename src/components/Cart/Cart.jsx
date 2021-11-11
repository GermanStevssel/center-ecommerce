import { Button, Col, Divider, Image, Row, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.less";
import { formatter } from "../Item/Item";

const { Title, Text, Paragraph } = Typography;

const Cart = () => {
	const { cart, closeCart } = useCart();

	console.log(cart?.lenght);

	return cart?.length ? (
		<div className="overlay">
			<Col className="item-detail-cart">
				<Row>
					<Col className="item-cart__title">
						<Title level={3}>Mi Carrito</Title>
						<Button
							icon={<CloseOutlined />}
							className="btn-cerrar-cart"
							onClick={() => {
								closeCart();
							}}
						></Button>
					</Col>
				</Row>
				<Divider />
				<Row>
					{cart?.map((p) => {
						return (
							<Col className="item-detail-cart__items">
								<Image width="30%" src={p.img} alt={p.alt} />
								<Typography>
									<Paragraph>
										<Text strong>{p.name}</Text>
									</Paragraph>
									<Paragraph>
										{p.quantity} x {formatter.format(p.price)}
									</Paragraph>
								</Typography>
							</Col>
						);
					})}
				</Row>
				<Row className="total-cart">
					<Col className="total">
						<Divider />
						<Paragraph>
							<Text strong>Total:</Text>{" "}
							{formatter.format(
								cart?.reduce((p) => {
									return p.quantity * p.price;
								})
							)}
						</Paragraph>
						<Row className="total-btns">
							<Col>
								<Link to="/">
									<Button type="primary">Seguir comprando</Button>
								</Link>
							</Col>
							<Col>
								<Link to="/cart">
									<Button type="primary">Ir al Carrito</Button>
								</Link>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</div>
	) : (
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
