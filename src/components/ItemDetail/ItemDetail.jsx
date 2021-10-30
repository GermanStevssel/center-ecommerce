import { Row, Col, Image, Card } from "antd";
import { formatter } from "../Item/Item";
import ItemCount from "../ItemCount";
import "./ItemDetail.scss";

const ItemDetail = ({ item }) => {
	console.log(item.price);
	return (
		<>
			<Row className="item-detail" gutter={8}>
				<Col sm={20} md={12} lg={10}>
					<Image width="auto" src={item.img} />
				</Col>
				<Col sm={20} md={8} lg={10}>
					<Card title={item.name}>
						<p>Precio: {formatter.format(item.price)}</p>
					</Card>
				</Col>
				<Col sm={20} md={8} lg={4}>
					<ItemCount stock={item.stock}></ItemCount>
				</Col>
			</Row>
		</>
	);
};

export default ItemDetail;
