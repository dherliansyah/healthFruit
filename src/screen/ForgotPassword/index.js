import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import logoLogin from '../../icons/logoLogin.png';
import { TextInput, Button } from 'react-native-paper';

const {width} = Dimensions.get('screen');

const Login = ({navigation}) => {
	const [ email, setEmail ] = React.useState('');
	return (
		<ScrollView style={styles.backlogin} showsVerticalScrollIndicator={false}>
			<Image source={logoLogin} style={styles.logoLogin} />

			<View style={styles.paddingLogin}>
				<Text style={styles.textLoginHeader}>Forgot Password</Text>
				<View>
					<TextInput
						style={styles.inputback}
						label="Email"
						returnKeyType="next"
						autoCapitalize="none"
						placeholder="Enter your E-mail"
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
				</View>
			</View>
			<View style={styles.paddingLogin}>
				<Button style={styles.buttonLogin} mode="contained" onPress={() => navigation.navigate('ConfirmPassword')}>
					Continue
				</Button>
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
	buttonLogin: {
		backgroundColor: '#53B175',
		color: '#ffffff',
		fontSize: 18,
		marginTop: width / 3,
		paddingVertical: 5,
		borderRadius: 10,
		fontWeight: 'bold',
	},
});
