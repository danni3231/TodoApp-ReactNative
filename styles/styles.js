import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 24,
		paddingHorizontal: 24,
		backgroundColor: colors.eerieBlack,
		alignItems: 'center',
		gap: 20,
	},
	containerCenter: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 24,
	},
	row: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: colors.royalPurple,
	},
	text: {
		color: colors.timberWolf,
		fontSize: 16,
	},
	subText: {
		color: colors.timberWolf,
		fontSize: 14,
	},
	textUnderline: {
		textDecorationLine: 'underline',
		color: colors.lilac,
	},
	textCenter: {
		textAlign: 'center',
	},
	separator: {
		height: 1,
		width: '90%',
		backgroundColor: colors.timberWolf,
	},
	button: {
		width: '70%',
		backgroundColor: colors.royalPurple,
		padding: 12,
		borderRadius: 8,
	},
	buttonDelete: {
		backgroundColor: colors.red,
	},
	buttonText: {
		color: colors.cultured,
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	input: {
		width: '100%',
		backgroundColor: colors.cultured,
		padding: 12,
		borderRadius: 8,
		borderColor: colors.lilac,
		borderWidth: 1,
		marginBottom: 16,
		color: colors.eerieBlack,
		fontSize: 16,
	},
	picker: {
		color: colors.eerieBlack,
	},
	pickerItem: {
		fontSize: 16,
	},
	flatlistContainer: {
		gap: 12,
		paddingBottom: 16,
	},
});
