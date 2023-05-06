import { motion } from "framer-motion";
import "./Box.style.css";

export default function Box({ handleClick }) {
	return (
		<>
			<motion.div
				onClick={handleClick}
				whileHover={{ scale: 1.2 }}
				whileTap={{ backgroundColor: "#48C9B0" }}
				className="box"
				layout
				initial={{ y: 0, opacity: 0, width: 0, height: 0 }}
				animate={{ y: 100, x: top, opacity: 1, width: 350, height: 200 }}
				transition={{
					opacity: { ease: "linear" },
					layout: { duration: 0.7 },
				}}
			/>
		</>
	);
}
