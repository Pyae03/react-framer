import { motion } from "framer-motion";
import "./Item.style.css";
import { data_emoji } from "./Board";
const test_variant = {
	active: {
		backgroundColor: "#EAECEE",
	},
	inactive: {
		backgroundColor: "#FFF",
	},
};

export default function Item({ handleSelect, selected, item_id }) {
	//console.log("key: ", item_id);
	return (
		<>
			<motion.div
				onClick={() => handleSelect(item_id)}
				className="item"
				// initial={{ width: 100, height: 50 }}
				variants={test_variant}
				animate={selected ? "active" : "inactive"}>
				<p>{data_emoji[item_id - 1]}</p>

				{selected && (
					<motion.div
						className="underline"
						layoutId="underline"
					/>
				)}
			</motion.div>
		</>
	);
}
