import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import { Header } from "antd/lib/layout/layout";
import "./App.less";
import NavBar from "./pages/Navbar";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import CategoryListContainer from "./pages/CategoryListContainer";
import Cart from "./pages/Cart";
import CartContextProvider from "./context";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<CartContextProvider>
				<Layout>
					<Header>
						<NavBar />
					</Header>
					<Switch>
						<Route exact path="/">
							<ItemListContainer contTitle="Productos" />
						</Route>
						<Route exact path="/category/:categoryId">
							<CategoryListContainer />
						</Route>
						<Route exact path="/products/:itemId">
							<ItemDetailContainer />
						</Route>
						<Route exact path="/cart">
							<Cart />
						</Route>
					</Switch>
					<SideCart />
					<Footer />
				</Layout>
			</CartContextProvider>
		</BrowserRouter>
	);
}

export default App;
