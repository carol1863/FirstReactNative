import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Network: undefined;
  NetworkList: undefined;
  Login: undefined;
  Resource: undefined;
};

export type RouteName = keyof RootStackParamList;
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
