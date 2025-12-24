import HomeScreen from '../pages/home';
import NetworkScreen from '../pages/network';
import NetworkListScreen from '../pages/network/list';
import LoginScreen from '../pages/login';
import ResourceScreen from '../pages/resource';
import { RouteName } from './define';

type RouteItem = {
  name: RouteName;
  component: React.ComponentType<any>;
  title: string;
};

const routes: RouteItem[] = [
  {
    name: 'Home',
    component: HomeScreen,
    title: '首页',
  },
  {
    name: 'Network',
    component: NetworkScreen,
    title: '加入企业网络',
  },
  {
    name: 'NetworkList',
    component: NetworkListScreen,
    title: '已加入的企业网络',
  },
  {
    name: 'Login',
    component: LoginScreen,
    title: '登录',
  },
  {
    name: 'Resource',
    component: ResourceScreen,
    title: '应用资源',
  },
];
export default routes;
