import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { styles } from './styles';

export const todoCardStyles = StyleSheet.create({
	container: {
		width: '100%',
		maxHeight: 120,
		backgroundColor: colors.cultured,
		borderRadius: 12,
		overflow: 'hidden',

		position: 'relative',
	},
	rowContainer: {
		flexDirection: 'row',
		gap: 4,
	},
	header: {
		...styles.row,
		backgroundColor: colors.royalPurple,
		padding: 8,
	},
	priority: {
		...styles.subText,
		fontWeight: 'bold',
	},
	task: {
		...styles.text,
		fontWeight: 'bold',
		color: colors.royalPurple,
	},
	date: {
		...styles.subText,
		color: colors.eerieBlackLight,
	},
	time: {
		...styles.subText,
		fontWeight: 'bold',
		color: colors.royalPurpleLight,
	},
	content: {
		padding: 8,
		gap: 8,
	},
});
