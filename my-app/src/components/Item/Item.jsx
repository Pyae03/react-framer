import { motion } from "framer-motion";
import "./Item.style.css";

const test_variant = {
	active: {
		backgroundColor: "#48C9B0",
	},
	inactive: {
		backgroundColor: "#5D6D7E",
	},
};

export default function Item({ handleSelect, selected, item_id }) {
	//console.log("key: ", item_id);
	return (
		<>
			<motion.div
				onClick={() => handleSelect(item_id)}
				className="item"
				whileHover={{ scale: 1.1 }}
				// initial={{ width: 100, height: 50 }}
				variants={test_variant}
				animate={selected ? "active" : "inactive"}>
				<h2>Variant{item_id}</h2>
			</motion.div>
		</>
	);
}
