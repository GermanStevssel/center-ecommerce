import { Form, Input, Button, Modal } from "antd";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import "./BuyerForm.less";

const BuyerForm = ({ cart, total, clear }) => {
	const [purchaseId, setPurchaseId] = useState(null);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [buyerData, setBuyerData] = useState({
		buyerName: "",
		buyerEmail: "",
		buyerPhone: "",
	});

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const buyerDataUpdate = (evt) => {
		setBuyerData({ ...buyerData, [evt.target.name]: evt.target.value });
	};

	const date = new Date();
	const purchaseDate = date.toLocaleDateString();

	const onHandleClick = (evt) => {
		evt.preventDefault();

		const order = {
			buyerData,
			items: [...cart],
			purchaseDate,
			total: total,
		};

		const ordersCollection = collection(db, "orders");

		addDoc(ordersCollection, order).then(({ id }) => {
			setPurchaseId(id);
			setIsModalVisible(true);
		});
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
			tel: "${label} no es un número válido!",
		},
	};

	return (
		<>
			<Form {...layout} validateMessages={validateMessages}>
				<Form.Item label="Nombre" rules={[{ required: true }]}>
					<Input name="buyerName" onChange={buyerDataUpdate} />
				</Form.Item>
				<Form.Item label="Email" rules={[{ type: "email", required: true }]}>
					<Input name="buyerEmail" onChange={buyerDataUpdate} />
				</Form.Item>
				<Form.Item label="Teléfono" rules={[{ type: "tel", required: true }]}>
					<Input name="buyerPhone" onChange={buyerDataUpdate} />
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
			<Modal
				title="Compra Exitosa!"
				visible={isModalVisible}
				onOk={handleOk}
				afterClose={clear}
				cancelButtonProps={{ className: "btn-cancel" }}
			>
				<p>{`Se ha registrado tu compra con el número de id: ${purchaseId}`}</p>
			</Modal>
		</>
	);
};

export default BuyerForm;
