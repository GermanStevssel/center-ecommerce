import { createContext, useCallback, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartContextProvider = ({ defaultValue = [], children }) => {
	const [cart, setCart] = useState(defaultValue);
	const [show, setShow] = useState(false);

	const switchSideCart = useCallback(() => {
		setShow(!show);
	}, [show]);

	const addToCart = useCallback(
		(item, quantity) => {
			if (quantity >= 1 && item.stock > 0) {
				const product = { ...item, quantity: quantity };
				const itemFinded = cart.findIndex((p) => p.id === item.id);

				if (itemFinded > -1) {
					const cartAux = [...cart];
					cartAux[itemFinded].quantity = quantity;

					setCart(cartAux);
				} else {
					setCart([...cart, product]);
					switchSideCart();
				}
			}
		},
		[cart, switchSideCart]
	);

	const removeItem = useCallback(
		(id) => {
			const newCart = cart.filter((product) => product.id !== id);

			setCart(newCart);
		},
		[cart]
	);

	const clear = () => {
		setCart([]);
	};

	const isInCart = (item) => {
		return cart.some((p) => p.id === item.id);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				show,
				addToCart,
				removeItem,
				clear,
				isInCart,
				switchSideCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
