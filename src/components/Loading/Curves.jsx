import styled, { keyframes } from "styled-components";

const rotater = keyframes`
  0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const rotatel = keyframes`
  0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}

  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  } 
`;

export const LoadingCurve = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 5rem;
	height: 5rem;
	border: solid 4px transparent;
	border-top-color: ${(props) => (props.outer ? "#fdc145" : "#66fbfb")};
	border-left-color: ${(props) => (props.outer ? "#fdc145" : "#66fbfb")};
	border-radius: 50%;
	-webkit-animation: ${rotater} 1.8s linear infinite;
	-moz-animation: ${rotater} 1.8s linear infinite;
	-o-animation: ${rotater} 1.8s linear infinite;
	animation: ${rotater} 1.8s linear infinite;
`;

export const LoadingCurve2 = styled(LoadingCurve)`
	width: 2.5rem;
	height: 2.5rem;
	-webkit-animation: ${rotatel} 1.5s linear infinite;
	-moz-animation: ${rotatel} 1.5s linear infinite;
	-o-animation: ${rotatel} 1.5s linear infinite;
	animation: ${rotatel} 1.5s linear infinite;
`;
