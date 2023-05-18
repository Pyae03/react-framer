import { motion } from "framer-motion";

export const data_emoji = ["🫠", "😊", "😂"];

export default function Board({ data }) {
	console.log("value: ", data);
	const { id, text_data } = data;
	return (
		<>
			<motion.div
				key={id}
				className="board"
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -10, opacity: 0 }}
				transition={{ duration: 0.2 }}>
				<h1>{data ? data_emoji[id - 1] : "nothing!"}</h1>
				<p>{text_data}</p>
			</motion.div>
		</>
	);
}
