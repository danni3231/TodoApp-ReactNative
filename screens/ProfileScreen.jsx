import { Pressable, Text } from 'react-native'
import { ScreenLayout } from '../components'
import { styles } from '../styles'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../store/auth/thunks';
import { router } from 'expo-router';
import { cleanTodos } from '../store/todos/todoSlice';

export const ProfileScreen = () => {
    const dispatch = useDispatch();
    const { displayName, uid, email } = useSelector(state => state.auth)

    const onLogout = () => {
        dispatch(startLogout());
        dispatch(cleanTodos());
        router.replace('/auth');
    }

    return (
        <ScreenLayout>
            <Text style={ styles.title }>Profile Screen</Text>
            <Text style={ styles.text }>{ displayName }</Text>
            <Text style={ styles.subText }>{ email }</Text>
            <Pressable
                style={ styles.button }
                onPress={ onLogout }
            >
                <Text style={ styles.buttonText }>logout</Text>
            </Pressable>
        </ScreenLayout>
    )
}
