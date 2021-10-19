import { ShoppingCartOutlined } from "@ant-design/icons";
import "./CartWidget.scss";

const CartWidget = ({ count }) => {
	return (
		<div className="cartWidget">
			<ShoppingCartOutlined style={{ fontSize: "1.7rem", zIndex: 2 }} />
			<div className="quantity">
				<span>{count}</span>
			</div>
		</div>
	);
};

export default CartWidget;
