import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login, ForgotPassword, ConfirmPassword, Signup } from '../screen';

const Stack = createStackNavigator();

const MainNavigator = () => {
	//   React.useEffect(() => {
	//     SplashScreen.hide();
	//   }, []);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'Login'}>
				<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
				<Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
				<Stack.Screen name="ConfirmPassword" component={ConfirmPassword} options={{ headerShown: false }} />
				<Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default MainNavigator;
