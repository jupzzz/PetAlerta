import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import MainPage from '../pages/MainPage'
import Register from '../pages/Register'
import InitialPage from '../pages/InitialPage'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />

            <Stack.Screen 
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
            />

            <Stack.Screen 
            name="MainPage"
            component={MainPage}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="InitialPage"
            component={InitialPage}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}