import {
	Col,
	Divider,
	Image,
	Row,
	Typography,
	Form,
	Input,
	Button,
} from "antd";
import { Link } from "react-router-dom";
import logo from "../../img/logo/center-logo-2.png";
import qr from "../../img/qr/qr.png";
import {
	EnvironmentOutlined,
	MailOutlined,
	PhoneOutlined,
	WhatsAppOutlined,
	ClockCircleOutlined,
	FacebookOutlined,
	InstagramOutlined,
} from "@ant-design/icons";
import "./Footer.less";

const { Paragraph, Title, Text } = Typography;

const Footer = () => {
	return (
		<>
			<Row className="container footer" gutter={32}>
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
					<Row className="footer-container">
						<EnvironmentOutlined />
						<Typography>
							<Paragraph className="footer-data">Av. San Martin 456</Paragraph>
						</Typography>
					</Row>
					<Row className="footer-container">
						<MailOutlined />
						<Typography>
							<Paragraph className="footer-data">soporte@center.com</Paragraph>
						</Typography>
					</Row>
					<Row className="footer-container">
						<PhoneOutlined />
						<Typography>
							<Paragraph className="footer-data">+54 (11) 345 2342</Paragraph>
						</Typography>
					</Row>
					<Row className="footer-container">
						<WhatsAppOutlined />
						<Typography>
							<Paragraph className="footer-data">+54 (11) 345 2342</Paragraph>
						</Typography>
					</Row>
					<Row className="footer-container">
						<ClockCircleOutlined />
						<Typography>
							<Paragraph className="footer-data">
								Lunes a Viernes de 9 Hs a 17 Hs
							</Paragraph>
						</Typography>
					</Row>
				</Col>
				<Col sm={20} md={12} lg={5}>
					<Row>
						<Title level={2}>Información</Title>
					</Row>
					<Row>
						<Link to="/">
							<Text>Home</Text>
						</Link>
					</Row>
					<Row>
						<Link to="/">
							<Text>Acerca de</Text>
						</Link>
					</Row>
					<Row>
						<Link to="/cart">
							<Text>Mis Pedidos</Text>
						</Link>
					</Row>
				</Col>
				<Col sm={20} md={12} lg={5}>
					<Row>
						<Title level={2}>Categorías</Title>
					</Row>
					<Row>
						<Link to="/category/consolas">
							<Text>Consolas</Text>
						</Link>
					</Row>
					<Row>
						<Link to="/category/videojuegos">
							<Text>Videojuegos</Text>
						</Link>
					</Row>
					<Row>
						<Link to="/category/auriculares">
							<Text>Auriculares</Text>
						</Link>
					</Row>
					<Row>
						<Link to="/category/joysticks">
							<Text>Joysticks</Text>
						</Link>
					</Row>
					<Row>
						<Link to="/category/sillas-gamer">
							<Text>Sillas Gamer</Text>
						</Link>
					</Row>
				</Col>
				<Col sm={20} md={12} lg={8}>
					<Row>
						<Title level={2}>Newsletter</Title>
					</Row>
					<Row>
						<Form name="customized_form_controls" layout="inline">
							<Form.Item name="email">
								<span>
									<Input
										type="text"
										style={{ width: "100%" }}
										placeholder="Email..."
									/>
								</span>
							</Form.Item>
							<Form.Item>
								<Button type="primary" htmlType="submit">
									Suscribirme
								</Button>
							</Form.Item>
						</Form>
						<Row className="footer-sn-container">
							<Title level={3} className="sn-title">
								Seguinos!
							</Title>
							<Row>
								<Col sm={20} md={12} lg={12}>
									<Row>
										<WhatsAppOutlined style={{ color: "#25D366" }} />
										<FacebookOutlined style={{ color: "#047cec" }} />
										<InstagramOutlined style={{ color: "#dd2a7b" }} />
									</Row>
								</Col>
								<Col sm={20} md={12} lg={12} className="footer-qr">
									<Image src={qr} width="40%" preview={false}></Image>
								</Col>
							</Row>
						</Row>
					</Row>
				</Col>
				<Divider />
			</Row>
		</>
	);
};

export default Footer;
