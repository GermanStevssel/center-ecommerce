import { LoadingCurve, LoadingCurve2 } from "./Curves";
import "./Loading.scss";

const Loading = () => {
	return (
		<div className="loaderContainer">
			<LoadingCurve outer />
			<LoadingCurve2 />
			<div className="point"></div>
		</div>
	);
};

export default Loading;
