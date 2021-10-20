import { Layout } from "antd";
import "antd/dist/antd.css";
import { Content, Header } from "antd/lib/layout/layout";
import logo from "./img/logo/logo-xs-n.png";
import "./App.scss";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
	return (
		<Layout>
			<Header>
				<div className="logo">
					<img src={logo} alt="Logo de Center" />
				</div>
				<NavBar />
			</Header>
			<Content>
				<ItemListContainer contTitle="Consolas" />
			</Content>
		</Layout>
	);
}

export default App;
