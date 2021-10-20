import Item from "../Item/Item";

const ItemList = (items) => {
	const item = items.items;
	console.log(item.img);

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
