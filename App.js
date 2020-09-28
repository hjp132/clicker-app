import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import CompontentsScreen from './src/screens/ComponentsScreen';
import UpgradeItem from './src/components/UpgradeItem'
import UpgradeScreen from './src/components/UpgradeScreen'


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: CompontentsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
      header: null
    },


  }
);

export default createAppContainer(navigator);
