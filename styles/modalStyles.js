import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { styles } from './styles';

export const modalSyles = StyleSheet.create({
	hide: {
		display: 'none',
	},
	modalContent: {
		width: '60%',
		backgroundColor: colors.cultured,
		borderRadius: 12,
		paddingHorizontal: 16,
		paddingVertical: 16,
		gap: 8,
		alignItems: 'center',
		shadowColor: colors.eerieBlack,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,

		position: 'absolute',
		top: 5,
		right: 5,
	},
	rowContent: {
		...styles.row,
		gap: 12,
		justifyContent: 'flex-start',
	},
	text: {
		...styles.text,
		color: colors.eerieBlack,
	},
	textDelete: {
		...styles.text,
		color: colors.red,
	},
});
