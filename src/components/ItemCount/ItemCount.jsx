import { useState } from "react";
import { Button } from "antd";
import {
	ShoppingCartOutlined,
	MinusOutlined,
	PlusOutlined,
} from "@ant-design/icons";
import "./ItemCount.scss";

const ItemCount = ({ stock }) => {
	const [count, setCount] = useState(1);

	const add = () => (count < stock ? setCount(count + 1) : null);

	const remove = () => (count > 1 ? setCount(count - 1) : null);

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
			<Button type="primary">
				Agregar al carrito <ShoppingCartOutlined />
			</Button>
		</div>
	);
};

export default ItemCount;