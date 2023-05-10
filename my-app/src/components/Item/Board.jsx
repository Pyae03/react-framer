import { motion } from "framer-motion";

const data_emoji = ["🫠", "😊", "😂"];

export default function Board({ value, data }) {
	console.log("value: ", value);
	return (
		<>
			<motion.div className="board">
				<h1>{value != null ? data_emoji[value - 1] : "nothing!"}</h1>
				<p>{data}</p>
			</motion.div>
		</>
	);
}
