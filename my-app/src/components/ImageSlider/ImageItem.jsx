import { motion } from "framer-motion";

export default function ImageItem({ image }) {
	return (
		<>
			<motion.img src={image}></motion.img>
		</>
	);
}
