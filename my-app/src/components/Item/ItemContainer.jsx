import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Item from "./Item";
import Board from "./Board";

export default function ItemContainer() {
	const [items, setItems] = useState([
		{
			id: 1,
			disable: true,
			text_data: "Professional Dumbass",
		},
		{
			id: 2,
			disable: false,
			text_data: "Good Attitude",
		},
		{
			id: 3,
			disable: false,
			text_data: "Yo! WTF",
		},
	]);

	const [selectedItem, setSelectedItem] = useState(items[0]);

	function handleSelect(item_id) {
		console.log("current: ", item_id);
		//const clicked = () => setselectedItem(item_id);
		if (item_id !== selectedItem.id)
			setItems((oldItems) =>
				oldItems.map((item) =>
					item.id === item_id
						? { ...item, disable: !item.disable }
						: { ...item, disable: false }
				)
			);
		//clicked();
		setSelectedItem(items[item_id - 1]);
	}

	return (
		<>
			<motion.div className="container">
				<div className="item-container">
					{items.map((item) => (
						<Item
							key={item.id}
							item_id={item.id}
							handleSelect={handleSelect}
							selected={item.disable}
						/>
					))}
				</div>
				<AnimatePresence>
					{selectedItem && <Board data={selectedItem} />}
				</AnimatePresence>
			</motion.div>
		</>
	);
}
