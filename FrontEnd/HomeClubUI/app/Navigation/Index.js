import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import AuthLoading from "../Screens/AuthLoading";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import LocationInputScreen from "../Screens/LocationInputScreen";

const AuthStack = createStackNavigator({
  Login: LoginScreen
});

const UserLocationStack = createStackNavigator({
  UserLocation: LocationInputScreen
});

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const switchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
    Location: UserLocationStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export const Navigator = createAppContainer(switchNavigator);
