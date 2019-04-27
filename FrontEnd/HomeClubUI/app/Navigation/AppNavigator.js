import { createStackNavigator, createAppContainer } from "react-navigation";
import Launch from '../Root/Launch';
import MobileNumberLogin from '../Screens/MobileNumberLogin';

const MainNavigator = createStackNavigator({
    splash: {
      screen: Launch
    },
    login: {
      screen: MobileNumberLogin
    },
   },
    {
        defaultNavigationOptions: {
          header: null
        },
      }
    );

const AppStackNavigator = createAppContainer(MainNavigator);

export default AppStackNavigator;
