import { createContext, useContext } from "react";
import { useState } from "react/cjs/react.development";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartContextProvider = ({ defaultValue = [], children }) => {
	const [cart, setCart] = useState(defaultValue);
	const [show, setShow] = useState(false);

	const addToCart = (item, quantity) => {
		if (quantity >= 1 && item.stock > 0) {
			const product = { ...item, quantity: quantity };
			const itemFinded = cart.findIndex((p) => p.id === item.id);

			if (itemFinded > -1) {
				const cartAux = [...cart];
				cartAux[itemFinded].quantity += quantity;

				setCart(cartAux);
			} else {
				setCart([...cart, product]);
			}
		}
		setShow(!show);
	};

	const removeItem = (item) => {
		const newCart = cart.filter((product) => product.id !== item.id);

		setCart(newCart);
	};

	const clear = () => {
		setCart([]);
	};

	const closeCart = () => {
		setShow(!show);
	};

	console.log(cart);
	return (
		<CartContext.Provider
			value={{ cart, show, addToCart, removeItem, clear, closeCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
