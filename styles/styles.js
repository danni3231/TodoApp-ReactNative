import { StyleSheet } from 'react-native';

export const colors = {
	eerieBlack: '#161223',
	cultured: '#f6f4f0',
	timberWolf: '#dfd6cf',
	lilac: '#bfb0d2',
	royalPurple: '#8067a9',
};

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: colors.eerieBlack,
		alignItems: 'center',
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
		fontSize: 12,
	},
});
