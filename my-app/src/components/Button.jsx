import { motion } from "framer-motion";
import "./Button.style.css";

// eslint-disable-next-line react/prop-types
export default function Button({ handleClick }) {
	// function thisCallBack() {
	// 	console.log("Button");
	// }
	return (
		<>
			<motion.button
				onClick={handleClick}
				className="btn"
				whileHover={{ scale: 1.2 }}>
				<h3>Click me</h3>
			</motion.button>
			{/* <button onClick={handleClick}>Click</button> */}
		</>
	);
}
