import { Button, Col, Divider, Image, Row, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.less";
import { formatter } from "../Item/Item";

const { Title, Text, Paragraph } = Typography;

const Cart = () => {
	const { cart, removeItem, clear } = useCart();

	console.log(cart?.lenght);

	return cart?.length ? (
		<div className="container">
			<Col>
				<Row>
					<Col className="item-cart__title">
						<Title level={2}>Mi Carrito</Title>
					</Col>
				</Row>
				<Divider />
				{cart?.map((p) => {
					return (
						<Row className="item-detail-cart__items" key={p.id}>
							<Col lg={4}>
								<Image width="auto" src={p.img} alt={p.alt} />
							</Col>
							<Col lg={18}>
								<Typography>
									<Paragraph>
										<Text strong>{p.name}</Text>
									</Paragraph>
									<Paragraph>
										{p.quantity} x {formatter.format(p.price)}
									</Paragraph>
								</Typography>
							</Col>
							<Col lg={2}>
								<Button
									icon={<CloseOutlined />}
									className="btn-cerrar-cart"
									onClick={() => {
										removeItem(p.id);
									}}
								></Button>
							</Col>
						</Row>
					);
				})}
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
					</Col>
				</Row>
			</Col>
			<Row>
				<Col>
					<Link to="/">
						<Button type="primary">Seguir comprando</Button>
					</Link>
				</Col>
				<Col className="btn-remove">
					<Button type="primary" onClick={clear}>
						Remover Todo
					</Button>
				</Col>
			</Row>
		</div>
	) : (
		<Content className="container cart">
			<Row>
				<Col>
					<Typography>
						<Title>Oops! Tu carrito está vacío!</Title>
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
