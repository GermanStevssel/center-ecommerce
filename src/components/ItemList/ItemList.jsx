import Item from "../Item";

const ItemList = (items) => {
	const item = items.items;

	return (
		<Item
			id={item.id}
			alt={item.alt}
			img={item.img}
			name={item.name}
			price={item.price}
			stock={item.stock}
		/>
	);
};

export default ItemList;
