import { useState } from "react";
import { Button } from "antd";
import {
	ShoppingCartOutlined,
	MinusOutlined,
	PlusOutlined,
} from "@ant-design/icons";
import "./ItemCount.scss";

const ItemCount = ({ stock }) => {
	const [count, setCount] = useState(0);

	const add = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const remove = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<div className="itemCount">
			<div className="itemCount__selector">
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
