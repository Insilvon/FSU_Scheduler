import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import CourseList from './screens/CourseList';
import Requirements from './screens/Requirements';
import Plan from './screens/Plan';
import Schedule from './screens/Schedule';
import CourseInformation from './screens/CourseInformation';
// export default class App extends React.Component {
  
  const MainNavigator = createStackNavigator({
    HomeScreen: {screen: HomeScreen},
    CourseList: {screen: CourseList},
    Requirements: {screen: Requirements},
    Plan: {screen: Plan},
    Schedule: {screen: Schedule},
    CourseInformation: {screen: CourseInformation},
  });

  const App = createAppContainer(MainNavigator);

  export default App;