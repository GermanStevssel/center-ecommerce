import { ShoppingCartOutlined } from "@ant-design/icons";
import "./CartWidget.scss";

const CartWidget = (props) => {
	return (
		<div className="cartWidget">
			<ShoppingCartOutlined style={{ fontSize: "1.7rem", zIndex: 2 }} />
			<div className="quantity">
				<span>{props.count}</span>
			</div>
		</div>
	);
};

export default CartWidget;
