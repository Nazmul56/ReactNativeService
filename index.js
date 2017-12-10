import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('AwesomeProject', () => App);
AppRegistry.registerHeadlessTask('SomeTaskName', () => require('./SomeTaskName'));