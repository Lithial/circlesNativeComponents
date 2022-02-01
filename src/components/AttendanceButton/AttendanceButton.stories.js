import { storiesOf } from '@storybook/react-native';
import React from 'react';
import AttendanceButton from './index';
import CenterView from '../../../storybook/stories/CenterView';
import { text, color } from '@storybook/addon-knobs';
import {generateColor} from "../../constants/colors";
import CenterViewWeb from "../../../storybook/stories/CenterViewWeb";

storiesOf('AttendanceButton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Attendance Button Native', () => (
    <AttendanceButton name={text("name", "Elliot Quinn", "AttendanceButtonKnobs")} color={color("circle color", generateColor(), "AttendanceButtonKnobs")}/>
  ))

storiesOf("AttendanceButton", module)
.addDecorator((getStory) =><CenterViewWeb>{getStory()}</CenterViewWeb>)
.add("Web Attendance Button", () => (
    <AttendanceButton name={text("name", "Elliot Quinn", "AttendanceButtonKnobs")} color={color("circle color", generateColor(), "AttendanceButtonKnobs")}/>
))
