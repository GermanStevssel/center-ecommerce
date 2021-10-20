import Item from "../Item";

const ItemList = (items) => {
	const item = items.items;
	console.log(item.id);

	return <Item item={item} />;
};

export default ItemList;
