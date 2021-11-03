import { useParams } from "react-router";

const CategoryListContainer = () => {
	const categoryId = useParams;

	return <h1>`CategoryListContainer ${categoryId}`</h1>;
};

export default CategoryListContainer;
