import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "../../context/CartContext";
import "./CartWidget.less";

const CartWidget = ({ count }) => {
	const { switchSideCart } = useCart();

	return (
		<div className="cartWidget">
			<ShoppingCartOutlined
				style={{ fontSize: "1.7rem", zIndex: 2 }}
				onClick={() => {
					switchSideCart();
				}}
			/>
			<div className="quantity">
				<span>{count}</span>
			</div>
		</div>
	);
};

export default CartWidget;
