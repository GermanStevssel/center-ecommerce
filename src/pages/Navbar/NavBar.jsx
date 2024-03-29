import { useState } from "react";
import { Menu } from "antd";
import {
	MenuOutlined,
	HomeOutlined,
	AppstoreOutlined,
	CloudDownloadOutlined,
	ShoppingOutlined,
	TeamOutlined,
} from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import logo from "../../img/logo/center-logo-2.png";
import "./NavBar.less";
import CartWidget from "../../components/CartWidget";

const { SubMenu } = Menu;

const NavBar = () => {
	const [state, setState] = useState("Home");
	const { cart } = useCart();

	const handleClick = (e) => {
		setState(e.key);
	};

	const current = state;

	const itemsInCart = cart.reduce((total, p) => total + p.quantity, 0);

	return (
		<nav>
			<Link to="/" className="logo">
				<img src={logo} alt="Logo de Center" />
			</Link>
			<Menu
				onClick={handleClick}
				selectedKeys={[current]}
				mode="horizontal"
				overflowedIndicator={<MenuOutlined />}
			>
				<Menu.Item key="Home" icon={<HomeOutlined />}>
					<NavLink to="/">Home</NavLink>
				</Menu.Item>

				<Menu.Item key="Consolas" icon={<AppstoreOutlined />}>
					<NavLink to="/category/consolas">Consolas</NavLink>
				</Menu.Item>

				<SubMenu
					key="Videojuegos"
					icon={<CloudDownloadOutlined />}
					title="Videojuegos"
				>
					<Menu.ItemGroup title="Consolas">
						<Menu.Item key="Playstation">
							<NavLink to="/category/juegos-playstation">Playstation</NavLink>
						</Menu.Item>
						<Menu.Item key="Xbox">
							<NavLink to="/category/juegos-xbox">Xbox</NavLink>
						</Menu.Item>
						<Menu.Item key="Switch">
							<NavLink to="/category/juegos-switch">Switch</NavLink>
						</Menu.Item>
					</Menu.ItemGroup>
				</SubMenu>
				<SubMenu
					key="Accesorios"
					icon={<ShoppingOutlined />}
					title="Accesorios"
				>
					<Menu.Item key="Auriculares">
						<NavLink to="/category/auriculares">Auriculares</NavLink>
					</Menu.Item>
					<Menu.Item key="Joysticks">
						<NavLink to="/category/joysticks">Joysticks</NavLink>
					</Menu.Item>
					<Menu.Item key="Teclados">
						<NavLink to="/category/sillas-gamer">Sillas Gamer</NavLink>
					</Menu.Item>
				</SubMenu>
				<Menu.Item key="Acerca de" icon={<TeamOutlined />}>
					<a href="/#" target="_blank" rel="noopener noreferrer">
						Acerca de
					</a>
				</Menu.Item>
			</Menu>
			<CartWidget count={itemsInCart} />
		</nav>
	);
};

export default NavBar;
