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
import logo from "../../img/logo/logo-xs-n.png";
import "./NavBar.less";
import CartWidget from "../CartWidget";

const { SubMenu } = Menu;

const NavBar = () => {
	const [state, setState] = useState("Home");

	const handleClick = (e) => {
		setState(e.key);
	};

	const current = state;

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
							<NavLink to="/category/playstation">Playstation</NavLink>
						</Menu.Item>
						<Menu.Item key="Xbox">
							<NavLink to="/category/xbox">Xbox</NavLink>
						</Menu.Item>
						<Menu.Item key="Switch">
							<NavLink to="/category/switch">Switch</NavLink>
						</Menu.Item>
					</Menu.ItemGroup>
					<Menu.ItemGroup title="PC">
						<Menu.Item key="PC">
							<NavLink to="/category/pc">PC</NavLink>
						</Menu.Item>
					</Menu.ItemGroup>
				</SubMenu>
				<SubMenu
					key="Accesorios"
					icon={<ShoppingOutlined />}
					title="Accesorios"
				>
					<Menu.Item key="onEar">
						<NavLink to="/category/auriculares-on-ear">
							Auriculare On ear
						</NavLink>
					</Menu.Item>
					<Menu.Item key="inEar">
						<NavLink to="/category/auriculares-in-ear">
							Auriculares In ear
						</NavLink>
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
			<CartWidget count="2" />
		</nav>
	);
};

export default NavBar;
