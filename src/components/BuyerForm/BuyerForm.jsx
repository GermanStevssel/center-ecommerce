import { Form, Input, Button, Modal } from "antd";
import { addDoc, doc, collection, updateDoc } from "@firebase/firestore";
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

	const warning = (value) => {
		Modal.warning({
			title: "Datos de formulario incorrectos",
			content: `Por favor ingrese un ${value} correcto`,
		});
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

		if (buyerData.buyerName && buyerData.buyerEmail && buyerData.buyerPhone) {
			// Actualizar stock en db una vez que se finalice la compra
			cart.forEach((item) => {
				const itemRef = doc(db, "items", item.id);
				updateDoc(itemRef, { stock: item.stock - item.quantity });
			});

			const ordersCollection = collection(db, "orders");

			addDoc(ordersCollection, order).then(({ id }) => {
				setPurchaseId(id);
				setIsModalVisible(true);
			});
		} else if (!buyerData.buyerName) {
			warning("nombre");
		} else if (!buyerData.buyerEmail) {
			warning("email");
		} else {
			warning("teléfono");
		}
	};

	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 24 },
	};
	/* eslint-disable no-template-curly-in-string */
	const validateMessages = {
		required: "${label} es requerido!",
		types: {
			string: "Ingrese un nombre válido!",
			email: "Ingrese es un email válido!",
			number: "No es un número válido de ${label}!",
		},
	};

	return (
		<>
			<Form {...layout} validateMessages={validateMessages}>
				<Form.Item
					name={["user", "name"]}
					label="Nombre"
					rules={[
						{
							type: "string",
							required: true,
							pattern: "[a-zA-Z][a-zA-Z ]{2,}",
						},
					]}
				>
					<Input name="buyerName" onChange={buyerDataUpdate} />
				</Form.Item>
				<Form.Item
					name={["user", "email"]}
					label="Email"
					rules={[
						{
							type: "email",
							required: true,
							pattern: "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/",
						},
					]}
				>
					<Input name="buyerEmail" onChange={buyerDataUpdate} />
				</Form.Item>
				<Form.Item
					label="Teléfono"
					rules={[
						{
							type: "number",
							required: true,
						},
					]}
				>
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
