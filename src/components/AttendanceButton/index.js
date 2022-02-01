/* eslint-disable */
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { generateColor } from "../../constants/colors";

const AttendanceButton = ({ name, color }) => {
	const [splitName, setSplitName] = useState(name.split(" "));
	const [isActive, setIsActive] = useState(true);

	const onClick = () => {
		setIsActive(!isActive);
		console.log(name, " is here");
	};
	const styles = StyleSheet.create({
		container: {
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			paddingLeft: 11,
			width: 310,
			height: 80,
			backgroundColor: isActive ? "transparent" : "rgba(255,255,255,0.15)",
			borderRadius: 50,
			marginVertical: 5,
		},
		text: {
			color: "#FFFFFF",
			backgroundColor: "transparent",
			fontFamily: "Quicksand",
			fontStyle: "normal",
			fontWeight: "600",
			fontSize: 24,
			lineHeight: 30,
		},
		circle: {
			justifyContent: "center",
			alignItems: "center",
			width: 60,
			height: 60,
			marginRight: 10,
			borderRadius: 100 / 2,
			color: "#FFFFFF",
			backgroundColor: color,
		},
	});
	return (
		<Pressable style={styles.container} onPress={onClick}>
			<View style={styles.circle}>
				<Text style={styles.text}>{splitName[0][0] + splitName[1][0]}</Text>
			</View>
			<Text style={styles.text}>{name}</Text>
		</Pressable>
	);
};

AttendanceButton.propTypes = {
	name: PropTypes.string,
	color: PropTypes.string,
};
AttendanceButton.defaultProps = {
	name: "Elliot Quinn",
	color: generateColor(),
};

export default AttendanceButton;
