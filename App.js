import React from 'react';
import 'react-native-gesture-handler';
import MainNavigator from './src/navigator';
import { Provider } from 'react-native-paper';

const App = () => {
	return (
		<Provider>
			{/* <PaperProvider> */}
				<MainNavigator />
			{/* </PaperProvider> */}
		</Provider>
	);
};

export default App;
