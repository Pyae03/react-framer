import { motion } from "framer-motion";
import { useState } from "react";
import Item from "./Item";
import Board from "./Board";

export default function ItemContainer() {
	const [items, setItems] = useState([
		{
			id: 1,
			condition: false,
		},
		{
			id: 2,
			condition: false,
		},
		{
			id: 3,
			condition: false,
		},
	]);

	const [selectedItem, setSelectedItem] = useState(0);

	function handleSelect(item_id) {
		console.log("current: ", item_id, "selected: ", selectedItem);
		setSelectedItem(item_id);
		return setItems(
			items.map((item) =>
				item.id === item_id ? { ...item, condition: !item.condition } : item
			)
		);
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
							selected={item.condition}
						/>
					))}
				</div>
				<Board value={items[selectedItem].id} />
			</motion.div>
		</>
	);
}
