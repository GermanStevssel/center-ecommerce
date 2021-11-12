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

	return cart?.length ? (
		<div className="container cart">
			<Row>
				<Col span={24} className="item-cart__title">
					<Title level={2}>Mi Carrito</Title>
				</Col>
			</Row>
			<Divider />
			{cart?.map((p) => {
				return (
					<Row
						className="item-detail-cart__items"
						key={p.id}
						gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
					>
						<Col lg={2}>
							<Image width="auto" src={p.img} alt={p.alt} />
						</Col>
						<Col lg={21}>
							<Typography>
								<Paragraph>
									<Text strong>{p.name}</Text>
								</Paragraph>
								<Paragraph>
									{p.quantity} x {formatter.format(p.price)}
								</Paragraph>
							</Typography>
						</Col>
						<Col lg={1}>
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
				<Col span={24} className="total">
					<Divider />
					<Paragraph>
						<Text strong>Total:</Text>{" "}
						{formatter.format(
							cart?.reduce((amount, p) => {
								return amount + p.quantity * p.price;
							}, 0)
						)}
					</Paragraph>
				</Col>
			</Row>
			<Row className="btns-cart">
				<Col>
					<Button type="primary" onClick={clear}>
						Remover Todo
					</Button>
				</Col>
				<Col>
					<Button type="primary">Finalizar Compra</Button>
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
