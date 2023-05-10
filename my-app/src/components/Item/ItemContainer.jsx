import { motion } from "framer-motion";
import { useState } from "react";
import Item from "./Item";
import Board from "./Board";

export default function ItemContainer() {
	const [items, setItems] = useState([
		{
			id: 1,
			condition: true,
			text_data: "Professional Dumbass",
		},
		{
			id: 2,
			condition: false,
			text_data: "Good Attitude",
		},
		{
			id: 3,
			condition: false,
			text_data: "Yo! WTF",
		},
	]);

	const [itemId, setItemId] = useState(null || 1);

	function handleSelect(item_id) {
		console.log("current: ", item_id);
		//const clicked = () => setItemId(item_id);
		if (item_id !== itemId)
			setItems((oldItems) =>
				oldItems.map((item) =>
					item.id === item_id
						? { ...item, condition: !item.condition }
						: { ...item, condition: false }
				)
			);
		//clicked();
		setItemId(item_id);
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
				<Board
					value={itemId}
					data={items[itemId - 1].text_data}
				/>
			</motion.div>
		</>
	);
}
