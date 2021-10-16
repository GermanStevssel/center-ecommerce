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
import "./NavBar.scss";
import CartWidget from "../CartWidget";

const { SubMenu } = Menu;

const NavBar = () => {
	const [state, setState] = useState({ current: "Home" });

	const handleClick = (e) => {
		console.log(e.key);
		setState({ current: e.key });
		console.log(state);
	};

	const current = state;

	return (
		<nav>
			<Menu
				onClick={handleClick}
				selectedKeys={[current]}
				mode="horizontal"
				overflowedIndicator={<MenuOutlined />}
			>
				<Menu.Item key="Home" icon={<HomeOutlined />}>
					Home
				</Menu.Item>
				<Menu.Item key="Consolas" icon={<AppstoreOutlined />}>
					Consolas
				</Menu.Item>
				<SubMenu
					key="Videojuegos"
					icon={<CloudDownloadOutlined />}
					title="Videojuegos"
				>
					<Menu.ItemGroup title="Consolas">
						<Menu.Item key="Playstation">Playstation</Menu.Item>
						<Menu.Item key="Xbox">Xbox</Menu.Item>
						<Menu.Item key="Switch">Switch</Menu.Item>
					</Menu.ItemGroup>
					<Menu.ItemGroup title="PC">
						<Menu.Item key="PC">PC</Menu.Item>
					</Menu.ItemGroup>
				</SubMenu>
				<SubMenu
					key="Accesorios"
					icon={<ShoppingOutlined />}
					title="Accesorios"
				>
					<Menu.Item key="onEar">Auriculare On ear</Menu.Item>
					<Menu.Item key="inEar">Auriculares In ear</Menu.Item>
					<Menu.Item key="Joysticks">Joysticks</Menu.Item>
					<Menu.Item key="Teclados">Teclados</Menu.Item>
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
