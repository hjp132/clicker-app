import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import CompontentsScreen from './src/screens/ComponentsScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: CompontentsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
