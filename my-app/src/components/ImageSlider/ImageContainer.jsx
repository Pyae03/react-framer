import { motion } from "framer-motion";
import ImageItem from "./imageItem";
import Button from "../Button";
import { useState } from "react";
import { wrap } from "framer-motion";

const image_data = [
	"https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
	"https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
	"https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];

export default function ImageContainer() {
	const [index, setIndex] = useState(0);

	function handleClick(e) {
		if (index < image_data.length - 1 && index >= 0) {
			console.log("trigger");

			if (e.target.innerText === "next") return setIndex(index + 1);
			else {
				console.log("previous");
				if (index > 0) return setIndex(index - 1);
			}
		} else {
			if (e.target.innerText === "previous") return setIndex(index - 1);
			return setIndex(0);
		}
	}
	console.log("index: ", index);
	return (
		<>
			<ImageItem image={image_data[index]} />
			<Button
				handleClick={handleClick}
				text={"previous"}
			/>
			<Button
				handleClick={handleClick}
				text={"next"}
			/>
		</>
	);
}
