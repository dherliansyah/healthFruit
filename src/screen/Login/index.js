import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import logoLogin from '../../icons/logoLogin.png';
import { TextInput, Button } from 'react-native-paper';

const Login = ({navigation}) => {
	const inputPassword = React.useRef();
	const [ email, setEmail ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	return (
		<ScrollView style={styles.backlogin}>
			<Image source={logoLogin} style={styles.logoLogin} />

			<View style={styles.paddingLogin}>
				<Text style={styles.textLoginHeader}>Login</Text>
				<View>
					<TextInput
						style={styles.inputback}
						label="Email"
						returnKeyType="next"
						autoCapitalize="none"
						placeholder="Enter your E-mail"
						onSubmitEditing={() => inputPassword.current.focus()}
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
					<TextInput
						ref={inputPassword}
						secureTextEntry={true}
						placeholder="Enter your password"
						autoCapitalize="none"
						returnKeyType="send"
						style={styles.inputback}
						label="Password"
						value={password}
						onChangeText={(text) => setPassword(text)}
						// onSubmitEditing={() => onSubmit()}
					/>
				</View>
			</View>
			<View style={styles.Forgot}>
				<Text style={styles.textForgot} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password?</Text>
			</View>
			<View style={styles.paddingLogin}>
				<Button style={styles.buttonLogin} mode="contained" onPress={() => console.log()}>
					Login
				</Button>
				<Text style={styles.loginText}>
					Don't have an account? <Text style={styles.loginSignup}>Signup</Text>
				</Text>
			</View>
		</ScrollView>
	);
};

export default Login;

const styles = StyleSheet.create({
	logoLogin: {
		justifyContent: 'center',
	},
	backlogin: {
		backgroundColor: '#fcfcfc',
	},
	paddingLogin: {
		paddingHorizontal: 20,
	},
	textLoginHeader: {
		fontSize: 26,
		fontWeight: 'bold',
	},
	inputback: {
		backgroundColor: '#fcfcfc',
		marginTop: 20,
	},
	textForgot: {
		fontSize: 14,
		marginVertical: 15,
	},
	Forgot: {
		paddingHorizontal: 20,
		alignItems: 'flex-end',
	},
	buttonLogin: {
		backgroundColor: '#53B175',
		color: '#ffffff',
		fontSize: 18,
		marginTop: 10,
		paddingVertical: 5,
		borderRadius: 10,
		fontWeight: 'bold',
	},
	loginSignup: {
		fontSize: 14,
		color: '#53B175',
	},
	loginText: {
		fontSize: 14,
		marginTop: 10,
		textAlign:"center",
	}
});
