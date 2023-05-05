import { motion } from "framer-motion";
import "./Box.style.css";

export default function Box() {
	return (
		<>
			{/* <motion.div
				whileHover={{ scale: 1.2 }}
				whileTap={{ backgroundColor: "#48C9B0" }}
				className="box"
				dragConstraints={{ left: -100, right: 100 }}
				animate={{ x: 10 }}
			/> */}
			<motion.button
				className="btn"
				whileHover={{ scale: 1.2 }}
				
                about="hi"
			/>
		</>
	);
}
