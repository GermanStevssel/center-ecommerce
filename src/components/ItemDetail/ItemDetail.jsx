import { Row, Col, Image, Card, Typography, Divider, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { formatter } from "../Item/Item";
import ItemCount from "../ItemCount";
import "./ItemDetail.less";

const { Title, Text, Paragraph } = Typography;

const ItemDetail = ({ item }) => {
	const [show, setShow] = useState(true);
	const [qty, setQty] = useState(null);

	const onAdd = (quantityToAdd) => {
		if (quantityToAdd >= 1 && item.stock > 0) {
			setQty(quantityToAdd);
			setShow(!show);
			item.stock -= quantityToAdd;
		}
	};

	const closeCart = () => {
		setShow(!show);
	};

	return (
		<>
			<Row className="container item-detail" gutter={8}>
				<Col sm={20} md={12} lg={10}>
					<Image width="auto" src={item.img} />
				</Col>
				<Col sm={20} md={8} lg={9}>
					<Card title={item.name}>
						<Typography>
							<Title className="item-price">
								Precio: {formatter.format(item.price)}
							</Title>
							<Paragraph>
								(
								{item.stock === 1
									? `${item.stock} unidad disponible`
									: `${item.stock} unidades disponibles`}
								)
							</Paragraph>
							<Paragraph>
								<Text strong>Descripción:</Text> {item.desc}
							</Paragraph>
						</Typography>
					</Card>
				</Col>
				<Col sm={20} md={8} lg={5}>
					{show && <ItemCount stock={item.stock} onAdd={onAdd}></ItemCount>}
				</Col>
				{!show && (
					<div className="overlay">
						<Col className="item-detail-cart">
							<Row>
								<Col className="item-cart__title">
									<Title level={3}>Mi Carrito</Title>
									<Button
										icon={<CloseOutlined />}
										className="btn-cerrar-cart"
										onClick={closeCart}
									></Button>
								</Col>
							</Row>
							<Divider />
							<Row>
								<Col className="item-detail-cart__items">
									<Image width="30%" src={item.img} alt={item.alt} />
									<Typography>
										<Paragraph>
											<Text strong>{item.name}</Text>
										</Paragraph>
										<Paragraph>
											{qty} x {formatter.format(item.price)}
										</Paragraph>
									</Typography>
								</Col>
							</Row>
							<Row className="total-cart">
								<Col className="total">
									<Divider />
									<Paragraph>
										<Text strong>Total:</Text>{" "}
										{formatter.format(qty * item.price)}
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
				)}
			</Row>
		</>
	);
};

export default ItemDetail;
