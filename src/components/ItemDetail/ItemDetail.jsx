import { Row, Col, Image, Card } from "antd";
import { formatter } from "../Item/Item";
import ItemCount from "../ItemCount";
import "./ItemDetail.scss";

const ItemDetail = (props) => {
	console.log(props.item.price);
	return (
		<>
			<Row gutter={8}>
				<Col sm={20} md={12} lg={10}>
					<Image width="auto" src={props.item.img} />
				</Col>
				<Col sm={20} md={8} lg={8}>
					<Card title={props.item.name}>
						<p>Precio: {formatter.format(props.item.price)}</p>
					</Card>
				</Col>
				<Col sm={20} md={8} lg={6}>
					<ItemCount stock={props.item.stock}></ItemCount>
				</Col>
			</Row>
		</>
	);
};

export default ItemDetail;
