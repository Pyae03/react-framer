import { motion } from "framer-motion";
import "./Box.style.css";

// eslint-disable-next-line react/prop-types
export default function Box({ handleClick, isOpen }) {
	console.log("isOpen: ", isOpen);
	return (
		<>
			<motion.div
				onClick={handleClick}
				// data-isopen={isOpen}
				// whileHover={{ scale: 1.2 }}
				// whileTap={{ backgroundColor: "#48C9B0" }}
				className="box"
				initial={{ width: 0, height: 0, opacity: 0 }}
				animate={{ opacity: 1, width: 350, height: 200 }}
				// transition={{
				// 	opacity: { ease: "linear" },
				// 	layout: { duration: 2 },
				// }}
				exit={{
					backgroundColor: "#48C9B0",
					opacity: 0,
					width: 0,
					height: 0,
				}}
			/>
		</>
	);
}
