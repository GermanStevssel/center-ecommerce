import { useState, useEffect } from "react";
import { Button } from "antd";
import { useCart } from "../../context/CartContext";
import {
	ShoppingCartOutlined,
	MinusOutlined,
	PlusOutlined,
} from "@ant-design/icons";
import "./ItemCount.less";

const ItemCount = ({ item, initial, onCart = false }) => {
	const [count, setCount] = useState(initial);
	const { addToCart } = useCart();

	const add = () => (count < item.stock ? setCount(count + 1) : null);

	const remove = () => (count > 1 ? setCount(count - 1) : null);

	useEffect(() => {
		if (onCart) {
			addToCart(item, count);
		}
	}, [count]);

	return (
		<div className="item-count">
			<div className="item-count__selector">
				<Button onClick={remove}>
					<MinusOutlined />
				</Button>
				<div className="counter">{count}</div>
				<Button onClick={add}>
					<PlusOutlined />
				</Button>
			</div>
			<Button
				type="primary"
				onClick={() => {
					addToCart(item, count);
				}}
				style={{ display: onCart ? "none" : "inline-block" }}
			>
				Agregar <ShoppingCartOutlined />
			</Button>
		</div>
	);
};

export default ItemCount;
