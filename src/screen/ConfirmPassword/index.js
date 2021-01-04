import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import logoLogin from '../../icons/logoLogin.png';
import { TextInput, Button } from 'react-native-paper';

const { width } = Dimensions.get('screen');

const Login = ({ navigation }) => {
	const currentpassword = React.useRef();
	const [ currpassword, setcurrpassword ] = React.useState('');
	const [ nextpassword, setnextpassword ] = React.useState('');
	return (
		<ScrollView style={styles.backlogin} showsVerticalScrollIndicator={false}>
			<Image source={logoLogin} style={styles.logoLogin} />

			<View style={styles.paddingLogin}>
				<Text style={styles.textLoginHeader}>Confirm Password</Text>
				<View>
					<TextInput
						style={styles.inputback}
						label="Current Password"
						returnKeyType="next"
						autoCapitalize="none"
						placeholder="Enter your current password"
						value={currpassword}
						onSubmitEditing={() => currentpassword.current.focus()}
						onChangeText={(text) => setcurrpassword(text)}
					/>
					<TextInput
						style={styles.inputback}
						label="Next Password"
						returnKeyType="send"
						autoCapitalize="none"
						placeholder="Enter your next password"
						value={nextpassword}
						onChangeText={(text) => setnextpassword(text)}
						// onSubmitEditing={() => onSubmit()}
					/>
				</View>
			</View>
			<View style={styles.paddingLogin}>
				<Button style={styles.buttonLogin} mode="contained" onPress={() => navigation.navigate('Login')}>
					Reset Password
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
		marginTop: width / 5,
		paddingVertical: 5,
		borderRadius: 10,
		fontWeight: 'bold'
	}
});
