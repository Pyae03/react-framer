import "./App.css";
import Box from "./components/Box";
import { useState } from "react";
import Button from "./components/Button";

function App() {
	const [isOpen, setOpen] = useState(false);

	function handleClick() {
		return setOpen(!isOpen);
	}
	console.log("state: ", isOpen);
	return (
		<>
			{isOpen && <Box handleClick={handleClick} />}
			<Button handleClick={handleClick} />
		</>
	);
}

export default App;
