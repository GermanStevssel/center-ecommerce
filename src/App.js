import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import { Header } from "antd/lib/layout/layout";
import logo from "./img/logo/logo-xs-n.png";
import "./App.less";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Header>
					<div className="logo">
						<img src={logo} alt="Logo de Center" />
					</div>
					<NavBar />
				</Header>
				<Switch>
					<Route exact path="/">
						<ItemListContainer contTitle="Consolas" />
					</Route>
					<Route path="/category/:productId">
						<ItemDetailContainer />
					</Route>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
