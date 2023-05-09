import { motion } from "framer-motion";

export default function Board({ value }) {
	return (
		<>
			<motion.div className="board">
				<h2>Board {value}</h2>
			</motion.div>
		</>
	);
}
