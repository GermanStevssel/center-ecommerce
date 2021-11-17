import { Col, Divider, Image, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import logo from "../../img/logo/logo-xl.png";
import { EnvironmentOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

const Footer = () => {
	return (
		<>
			<Row className="container" gutter={32}>
				<Divider
					style={{
						border: "2px solid rgba(0, 0, 0, 0.2)",
						borderRadius: "30px",
					}}
				/>
				<Col sm={20} md={12} lg={6}>
					<Link to="/">
						<Image width="70%" src={logo} preview={false} />
					</Link>
					<Row className="footer-data">
						<EnvironmentOutlined />
						<Typography>
							<Paragraph>Av. San Martin 456</Paragraph>
						</Typography>
					</Row>
				</Col>
				<Col></Col>
				<Col></Col>
				<Col></Col>
			</Row>
		</>
	);
};

export default Footer;
