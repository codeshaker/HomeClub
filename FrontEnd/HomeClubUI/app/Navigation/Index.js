import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import AuthLoading from "../Screens/AuthLoading";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";

const AuthStack = createStackNavigator({
  Login: LoginScreen
});

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const switchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export const Navigator = createAppContainer(switchNavigator);
