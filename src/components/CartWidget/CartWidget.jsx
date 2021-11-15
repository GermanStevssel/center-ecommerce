import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "../../context/CartContext";
import "./CartWidget.less";

const CartWidget = ({ count }) => {
	const { cart, switchSideCart } = useCart();

	return (
		<div className="cartWidget">
			<ShoppingCartOutlined
				style={{ fontSize: "1.7rem", zIndex: 2 }}
				onClick={() => {
					switchSideCart();
				}}
			/>
			<div className={cart.length > 0 ? "quantity" : "quantity hidden"}>
				<span>{count}</span>
			</div>
		</div>
	);
};

export default CartWidget;
