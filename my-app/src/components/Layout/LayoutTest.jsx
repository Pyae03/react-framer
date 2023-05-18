import { motion } from "framer-motion";
import "./Layout.style.css";
import { useState } from "react";
import logo from "./react.svg";
const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function LayoutTest() {
	const [state, setState] = useState(false);

	function handleClick() {
		return setState(!state);
	}
	return (
		<>
			<motion.button
				className="btn-click"
				onClick={handleClick}>
				Click Me
			</motion.button>
			<motion.div
				className="side-bar"
				transition={{ duration: 0.3 }}
				//initial={{ opacity: 0, top: 0, left: 0 }}
				animate={state ? { opacity: 1, width: "300px" } : {}}>
				<motion.ul
					className="item-list"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delayChildren: 1,
					}}
					variants={state ? "open" : "closed"}>
					<motion.li
						className="item"
						variants={itemVariants}>
						<motion.img src={logo}></motion.img>
						{state ? <h3>Item</h3> : ""}
					</motion.li>
				</motion.ul>
			</motion.div>
		</>
	);
}
