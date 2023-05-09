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

export default function Tab({ handleSelect, selected, item_id }) {
	//console.log("key: ", item_id);
	return (
		<>
			<Item handleSelect={handleSelect} />
		</>
	);
}
