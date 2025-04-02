import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const profileStyles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 24,
	},
	imageContainer: {
		width: 160,
		height: 160,
		alignItems: 'center',
		justifyContent: 'center',
	},
	profileImage: {
		width: 130,
		height: 130,
		borderRadius: 80,
		borderWidth: 4,
		borderColor: colors.lilac,
	},
	editButton: {
		width: 36,
		height: 36,
		backgroundColor: colors.royalPurple,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '100%',
		marginTop: 16,
		elevation: 5,
		position: 'absolute',
		bottom: 20,
		right: 20,
	},
});
