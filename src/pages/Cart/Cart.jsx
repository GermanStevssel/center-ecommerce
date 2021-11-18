import { Button, Col, Image, Row, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";
import "./Cart.less";
import { formatter } from "../Item/Item";

const { Title, Text, Paragraph } = Typography;

const Cart = () => {
	const { cart, removeItem, clear } = useCart();

	return cart?.length ? (
		<div className="container cart">
			<Row className="cart-title-container">
				<Col span={24} className="item-cart__title">
					<Title>Mi Carrito</Title>
				</Col>
			</Row>
			<Row className="item-detail-cart" gutter={32} justify="center">
				<Col sm={24} md={18} lg={16}>
					<Row
						className="item-detail-cart__header"
						gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
					>
						<Col lg={10}>
							<Typography>
								<Paragraph className="header-titles">
									<Text strong>Producto</Text>
								</Paragraph>
							</Typography>
						</Col>
						<Col lg={3}>
							<Typography>
								<Paragraph className="header-titles">
									<Text strong>Precio</Text>
								</Paragraph>
							</Typography>
						</Col>
						<Col lg={6}>
							<Typography>
								<Paragraph className="header-titles">
									<Text strong>Cantidad</Text>
								</Paragraph>
							</Typography>
						</Col>
						<Col lg={3}>
							<Typography>
								<Paragraph className="header-titles">
									<Text strong>Subtotal</Text>
								</Paragraph>
							</Typography>
						</Col>
						<Col lg={2}></Col>
					</Row>
					{cart?.map((p) => {
						return (
							<Row
								className="item-detail-cart__items"
								key={p.id}
								gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
							>
								<Col lg={4}>
									<Image width="auto" src={p.img} alt={p.alt} />
								</Col>
								<Col lg={6}>
									<Typography>
										<Paragraph className="item-detail-spec">
											<Text strong>{p.name}</Text>
										</Paragraph>
									</Typography>
								</Col>
								<Col lg={3}>
									<Typography>
										<Paragraph className="item-detail-spec price">
											{formatter.format(p.price)}
										</Paragraph>
									</Typography>
								</Col>
								<Col lg={6}>
									<ItemCount item={p} initial={p.quantity} onCart={true} />
								</Col>
								<Col lg={3}>
									<Typography>
										<Paragraph className="item-detail-spec price">
											{formatter.format(p.price * p.quantity)}
										</Paragraph>
									</Typography>
								</Col>
								<Col lg={2} className="item-detail-spec">
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
					<Row className="btns-cart">
						<Col>
							<Button type="primary" onClick={clear}>
								Remover Todo
							</Button>
						</Col>
					</Row>
				</Col>
				<Col sm={24} md={6} lg={8}>
					<Row className="total-cart">
						<Col span={24} className="total">
							<Paragraph>
								<Text strong>Total</Text>
							</Paragraph>
							<Paragraph>
								<Text strong>
									{formatter.format(
										cart?.reduce((amount, p) => {
											return amount + p.quantity * p.price;
										}, 0)
									)}
								</Text>
							</Paragraph>
						</Col>
						<Col>
							<Button
								type="primary"
								className="btn-buy"
								// onClick={() => {
								// 	const order = {
								// 		buyer: {
								// 			name: "German",
								// 			phone: 123456789,
								// 			email: "gcas@gmail.com",
								// 		},
								// 		items: [...cart],
								// 		total: cart.reduce((amount, p) => p.price + amount, 0),
								// 	}

								// 		sendOrder(order);
								// }}
							>
								Finalizar Compra
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	) : (
		<Content className="container empty-cart">
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
