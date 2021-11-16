import { CloseOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Image, Row, Typography } from "antd";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { formatter } from "../Item/Item";
import "./SideCart.less";
// import { useEffect } from "react";

const { Title, Text, Paragraph } = Typography;

const SideCart = () => {
	const { cart, show, switchSideCart } = useCart();

	// useEffect(() => {
	// 	const closeSideCart = () => {
	// 		switchSideCart();
	// 	};

	// 	let overlay;

	// 	if (show) {
	// 		overlay = document.querySelector(".overlay");

	// 		overlay.addEventListener("click", closeSideCart);
	// 	}
	// }, [show, switchSideCart]);

	return show ? (
		<Row className="overlay">
			<Col className="item-detail-sidecart">
				<Row>
					<Col className="item-sidecart__title">
						<Title level={3}>Mi Carrito</Title>
						<Button
							icon={<CloseOutlined />}
							className="btn-cerrar-sidecart"
							onClick={() => {
								switchSideCart();
							}}
						></Button>
					</Col>
				</Row>
				<Divider />
				<Row className="item-detail-sidecart__container">
					{cart?.length > 0 ? (
						cart?.map((p) => {
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
						})
					) : (
						<Col className="item-detail-sidecart__items">
							<Title>Tu carrito esta vacío</Title>
							<Image width="30%" src="" alt="Carrito vacío" />
						</Col>
					)}
				</Row>
				<Row className="total-sidecart">
					<Col className="total">
						<Divider />
						<Paragraph>
							<Text strong>Total:</Text>{" "}
							{cart?.length &&
								formatter.format(
									cart?.reduce((amount, p) => {
										return amount + p.quantity * p.price;
									}, 0)
								)}
						</Paragraph>
						<Row className="total-btns">
							<Col>
								<Link to="/">
									<Button
										type="primary"
										onClick={() => {
											switchSideCart();
										}}
									>
										Seguir comprando
									</Button>
								</Link>
							</Col>
							<Col>
								<Link to="/cart">
									<Button
										type="primary"
										onClick={() => {
											switchSideCart();
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
		</Row>
	) : null;
};

export default SideCart;
