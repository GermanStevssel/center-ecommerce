import { Button, Col, Row, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import "./Page404.less";

const { Title } = Typography;

const Page404 = () => {
	return (
		<Content className="container page404">
			<Row>
				<Col>
					<Typography>
						<Title>Oops! Parece que esta página no existe!</Title>
					</Typography>
				</Col>
			</Row>
			<Row>
				<Col>
					<Link to="/">
						<Button type="primary" className="btn-volver-center">
							Volver a Center
						</Button>
					</Link>
				</Col>
			</Row>
		</Content>
	);
};

export default Page404;
