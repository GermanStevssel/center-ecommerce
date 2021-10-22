import Item from "../Item";

const ItemList = (props) => {
	const item = props.items;

	return <Item item={item} />;
};

export default ItemList;
