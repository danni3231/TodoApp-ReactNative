import { Pressable, Text } from 'react-native'
import { ScreenLayout } from '../components'
import { styles } from '../styles/styles'
import { useDispatch } from 'react-redux';
import { startLogout } from '../store/auth/thunks';
import { router } from 'expo-router';

export const ProfileScreen = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout())
        router.replace('/auth');
    }
    return (
        <ScreenLayout>
            <Text style={ styles.title }>Profile Screen</Text>
            <Text style={ styles.text }>name person</Text>
            <Pressable
                style={ styles.button }
                onPress={ onLogout }
            >
                <Text style={ styles.buttonText }>logout</Text>
            </Pressable>
        </ScreenLayout>
    )
}
