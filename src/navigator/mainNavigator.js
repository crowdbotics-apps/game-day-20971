import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile121467Navigator from '../features/UserProfile121467/navigator';
import Settings121466Navigator from '../features/Settings121466/navigator';
import Settings121464Navigator from '../features/Settings121464/navigator';
import SignIn2121462Navigator from '../features/SignIn2121462/navigator';
import BlankScreen0121460Navigator from '../features/BlankScreen0121460/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile121467: { screen: UserProfile121467Navigator },
Settings121466: { screen: Settings121466Navigator },
Settings121464: { screen: Settings121464Navigator },
SignIn2121462: { screen: SignIn2121462Navigator },
BlankScreen0121460: { screen: BlankScreen0121460Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
