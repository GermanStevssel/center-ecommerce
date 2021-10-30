import { Layout } from "antd";
import { Header } from "antd/lib/layout/layout";
import logo from "./img/logo/logo-xs-n.png";
import "./App.less";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
	return (
		<Layout>
			<Header>
				<div className="logo">
					<img src={logo} alt="Logo de Center" />
				</div>
				<NavBar />
			</Header>
			<ItemListContainer contTitle="Consolas" />
			<ItemDetailContainer />
		</Layout>
	);
}

export default App;
