import{createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import LandingScreen from './screens/LandingScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';

const AppNavigator = createStackNavigator({
    Landing:{
        screen: LandingScreen
    },
    Signup :{
        screen : SignupScreen
    },
    Signin :{
        screen : SigninScreen
    },
    Profile : {
        screen : ProfileScreen
    },
    {
        initialRouteName ='Landing'
    }
})
export default createAppContainer(AppNavigator);