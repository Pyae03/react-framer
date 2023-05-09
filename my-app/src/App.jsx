import "./App.css";

import { useState } from "react";

import { AnimatePresence } from "framer-motion";
import ImageContainer from "./components/ImageSlider/imageContainer";

import ItemContainer from "./components/Item/ItemContainer";

function App() {
	const [isOpen, setOpen] = useState(false);

	function handleClick() {
		return setOpen(!isOpen);
	}
	console.log("state: ", isOpen);
	return (
		<>
			<ItemContainer />
			{/* <ImageContainer /> */}
			{/* <AnimatePresence>
				{isOpen && (
					<Box
						handleClick={handleClick}
						isOpen={isOpen}
					/>
				)}
			</AnimatePresence>

			{!isOpen && <Button handleClick={handleClick} />} */}
		</>
	);
}

export default App;
