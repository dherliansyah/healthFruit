import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import logoLogin from '../../icons/logoLogin.png';
import { TextInput, Button } from 'react-native-paper';

const Login = ({ navigation }) => {
	const inputPassword = React.useRef();
	const nohandphone = React.useRef();
	const [ handphone, sethandphone ] = React.useState('');
	const [ email, setEmail ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	return (
		<ScrollView style={styles.backlogin} showsVerticalScrollIndicator={false}>
			<Image source={logoLogin} style={styles.logoLogin} />

			<View style={styles.paddingLogin}>
				<Text style={styles.textLoginHeader}>Sign Up</Text>
				<View>
					<TextInput
						style={styles.inputback}
						label="Email"
						returnKeyType="next"
						autoCapitalize="none"
						placeholder="Enter your E-mail"
						onSubmitEditing={() => nohandphone.current.focus()}
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
					<TextInput
						ref={nohandphone}
						style={styles.inputback}
						label="No. Handphone"
						returnKeyType="next"
						autoCapitalize="none"
						placeholder="Enter your no handphone"
						onSubmitEditing={() => inputPassword.current.focus()}
						value={handphone}
						onChangeText={(text) => sethandphone(text)}
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
			<View style={styles.paddingLogin}>
				<Button style={styles.buttonLogin} mode="contained" onPress={() => navigation.navigate('Login')}>
					Sign Up
				</Button>
			</View>
		</ScrollView>
	);
};

export default Login;

const styles = StyleSheet.create({
	logoLogin: {
		justifyContent: 'center'
	},
	backlogin: {
		backgroundColor: '#fcfcfc'
	},
	paddingLogin: {
		paddingHorizontal: 20
	},
	textLoginHeader: {
		fontSize: 26,
		fontWeight: 'bold'
	},
	inputback: {
		backgroundColor: '#fcfcfc',
		marginTop: 20
	},
	buttonLogin: {
		backgroundColor: '#53B175',
		color: '#ffffff',
		fontSize: 18,
		marginTop: 10,
		paddingVertical: 5,
		borderRadius: 10,
		fontWeight: 'bold'
	}
});
