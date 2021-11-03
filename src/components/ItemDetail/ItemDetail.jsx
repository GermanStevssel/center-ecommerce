import { Row, Col, Image, Card, Typography } from "antd";
import { formatter } from "../Item/Item";
import ItemCount from "../ItemCount";
import "./ItemDetail.less";

const { Title, Text, Paragraph } = Typography;

const ItemDetail = ({ item }) => {
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
								<Text strong>Descripción:</Text> {item.desc}
							</Paragraph>
						</Typography>
					</Card>
				</Col>
				<Col sm={20} md={8} lg={5}>
					<ItemCount stock={item.stock}></ItemCount>
				</Col>
			</Row>
		</>
	);
};

export default ItemDetail;
