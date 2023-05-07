import "./App.css";
import Box from "./components/Modal/Box";
import { useState } from "react";
import Button from "./components/Button";
import { AnimatePresence } from "framer-motion";

function App() {
	const [isOpen, setOpen] = useState(false);

	function handleClick() {
		return setOpen(!isOpen);
	}
	console.log("state: ", isOpen);
	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<Box
						handleClick={handleClick}
						isOpen={isOpen}
					/>
				)}
			</AnimatePresence>

			{!isOpen && <Button handleClick={handleClick} />}
		</>
	);
}

export default App;
