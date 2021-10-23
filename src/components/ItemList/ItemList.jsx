import Item from "../Item";

const ItemList = ({ items }) => {
	return items.length
		? items.map((item) => {
				return <Item item={item} key={item.id} />;
		  })
		: null;
};

export default ItemList;
