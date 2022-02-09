import React from "react";
import AttendanceButton from "./index";
// import CenterViewWeb from "../../../storybook/stories/CenterViewWeb";
import CenterView from "../../../storybook/stories/CenterView";

export default {
	title: "AttendanceButton",
	component: AttendanceButton
}
const WebViewButtonTemplate = (args) => {
	return (
		<CenterView>
			<AttendanceButton {...args}/>
		</CenterView>
	)
}
export const Primary = WebViewButtonTemplate.bind({})
export const Secondary = WebViewButtonTemplate.bind({})


Primary.args = {
	name:"Elliot Quinn",
	color:"#f6b28f",
	active: true
}

Secondary.args = {
	name:"Lisa Vegas",
	color:"#ef7692",
	active: true,
}

