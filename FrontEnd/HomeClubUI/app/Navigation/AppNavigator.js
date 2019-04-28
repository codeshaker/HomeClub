import { createStackNavigator, createAppContainer } from "react-navigation";
import Launch from '../Root/Launch';
import MobileNumberLogin from '../Screens/MobileNumberLogin';
import OTPScreen from '../Screens/OTPScreen';

const MainNavigator = createStackNavigator({
    splash: {
      screen: Launch
    },
    login: {
      screen: MobileNumberLogin
    },
    otp: {
      screen: OTPScreen
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
