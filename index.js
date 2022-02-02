/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
//Prevent warnings from appearing on the device
LogBox.ignoreAllLogs(true);
