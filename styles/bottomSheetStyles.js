import { StyleSheet } from 'react-native';
import { colors } from './colors';

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
