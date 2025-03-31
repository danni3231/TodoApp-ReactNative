import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const floatingBtnStyles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 20,
		right: 20,
		backgroundColor: colors.royalPurple,
		borderRadius: '100%',
		padding: 12,
		elevation: 5,
	},
});
