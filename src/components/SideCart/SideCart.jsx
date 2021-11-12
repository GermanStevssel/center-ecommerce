import { CloseOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Image, Row, Typography } from "antd";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { formatter } from "../Item/Item";
import "./SideCart.less";

const { Title, Text, Paragraph } = Typography;

const SideCart = () => {
	const { cart, show, closeCart } = useCart();

	console.log(show);
	console.log(cart);

	return show ? (
		<div className="overlay">
			<Col className="item-detail-sidecart">
				<Row>
					<Col className="item-sidecart__title">
						<Title level={3}>Mi Carrito</Title>
						<Button
							icon={<CloseOutlined />}
							className="btn-cerrar-sidecart"
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
							<Col className="item-detail-sidecart__items" key={p.id}>
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
				<Row className="total-sidecart">
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
									<Button
										type="primary"
										onClick={() => {
											closeCart();
										}}
									>
										Ir al Carrito
									</Button>
								</Link>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</div>
	) : null;
};

export default SideCart;
