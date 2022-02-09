import {storiesOf} from "@storybook/react-native";
import CenterView from "../../../storybook/stories/CenterView";
import AttendanceButton from "./index";
import {color, text} from "@storybook/addon-knobs";
import {generateColor} from "../../constants/colors";
import React from "react";

// eslint-disable-next-line no-undef
storiesOf("AttendanceButton", module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add("Attendance Button Native", () => (
        <AttendanceButton
            name={text("name", "Elliot Quinn", "AttendanceButtonKnobs")}
            color={color("circle color", generateColor(), "AttendanceButtonKnobs")}
            active={false}
        />
    ));
// eslint-disable-next-line no-undef
storiesOf("AttendanceButton", module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add("Attendance Button Native", () => (
        <AttendanceButton
            name={text("name", "Elliot Quinn", "AttendanceButtonKnobs")}
            color={color("circle color", generateColor(), "AttendanceButtonKnobs")}
            active={true}
        />
    ));
