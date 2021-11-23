import { Form, Input, InputNumber, Button } from "antd";
import { addDoc, getFirestore, collection } from "@firebase/firestore";
import { useState } from "react";
import "./BuyerForm.less";

const BuyerForm = ({ cart, total, purchaseId }) => {
	const [purchaseId, setPurchaseId] = useState(null);
	const [buyerData, setBuyerData] = useState({
		buyerName: "",
		buyerEmail: "",
		buyerPhone: "",
	});

	const buyerDataUpdate = (evt) => {
		setBuyerData({ ...buyerData, [evt.target.name]: evt.target.value });
	};

	const onHandleClick = () => {
		const order = {
			buyer: {
				name: "German",
				phone: 123456789,
				email: "gcas@gmail.com",
			},
			items: [...cart],
			total: cart.reduce((amount, p) => p.price + amount, 0),
		};

		const sendOrder = (order) => {
			const db = getFirestore();
			const ordersCollection = collection(db, "orders");

			addDoc(ordersCollection, order).then(({ id }) => purchaseId(id));
			clear();
		};
	};

	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 24 },
	};

	/* eslint-disable no-template-curly-in-string */
	const validateMessages = {
		required: "${label} es requerido!",
		types: {
			email: "${label} no es un email válido!",
			number: "${label} no es un número válido!",
		},
		number: {
			range: "${label} must be between ${min} and ${max}",
		},
	};

	return (
		<Form {...layout} name="nest-messages" validateMessages={validateMessages}>
			<Form.Item name="buyerName" label="Nombre" rules={[{ required: true }]}>
				<Input onChange={buyerDataUpdate} />
			</Form.Item>
			<Form.Item
				name="userEmail"
				label="Email"
				rules={[{ type: "email", required: true }]}
			>
				<Input onChange={buyerDataUpdate} />
			</Form.Item>
			<Form.Item
				name="buyerPhone"
				label="Teléfono"
				rules={[{ type: "number", min: 0, max: 9999999999, required: true }]}
			>
				<InputNumber onChange={buyerDataUpdate} />
			</Form.Item>
			<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
				<Button
					type="primary"
					htmlType="submit"
					className="btn-buy"
					onClick={onHandleClick}
				>
					finalizar compra
				</Button>
			</Form.Item>
		</Form>
	);
};

export default BuyerForm;
