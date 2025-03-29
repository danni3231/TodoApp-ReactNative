import { StyleSheet } from 'react-native';

export const colors = {
	eerieBlack: '#161223',
	eerieBlackLight: '#64616C',
	cultured: '#f6f4f0',
	timberWolf: '#dfd6cf',
	lilac: '#bfb0d2',
	royalPurple: '#8067a9',
	royalPurpleLight: '#aa9ac6',
	red: '#EA4335',
};

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
		width: '60%',
		backgroundColor: colors.royalPurple,
		padding: 12,
		borderRadius: 8,
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

export const bottomSheetStyles = StyleSheet.create({
	sheet: {
		backgroundColor: colors.cultured,
		paddingHorizontal: 16,
		paddingVertical: 20,
		width: '100%',
		position: 'absolute',
		bottom: 0,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		zIndex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8,
	},
	backdrop: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	bottomSheetButton: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		paddingBottom: 2,
	},
	bottomSheetButtonText: {
		fontWeight: 600,
		textDecorationLine: 'underline',
	},
});

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

export const authStyles = StyleSheet.create({
	authContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 24,
	},
	formContainer: {
		width: '100%',
		gap: 40,
	},
	buttonContainer: {
		width: '100%',
		alignItems: 'center',
		gap: 12,
	},
});
