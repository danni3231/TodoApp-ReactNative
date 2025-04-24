import { Image, Pressable, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

import { EditIco, ScreenLayout, UserIco } from '../components'
import { styles, profileStyles, colors } from '../styles'

import { startLogout, startUploadProfilePhoto, startDeletingUser } from '../store/auth/thunks';
import { cleanTodos } from '../store/todos/todoSlice';

export const ProfileScreen = () => {
    const dispatch = useDispatch();

    const { displayName, uid, email, photoURL } = useSelector(state => state.auth)

    const onLogout = () => {
        dispatch(startLogout());
        dispatch(cleanTodos());
        router.replace('/auth');
    }

    const onDeleteAccount = () => {
        dispatch(startDeletingUser());
        dispatch(cleanTodos());
        router.replace('/auth');
    }

    const onEditPhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: [ 'images' ],
            allowsEditing: true,
            aspect: [ 1, 1 ],
            quality: 1,
        });

        if (!result.canceled) {
            dispatch(startUploadProfilePhoto(result.assets[ 0 ].uri, uid))
        }
    }

    return (
        <ScreenLayout>

            <View style={ profileStyles.container }>
                <View style={ { alignItems: 'center', gap: 16 } }>
                    <Text style={ styles.title }>Profile</Text>
                    <View style={ profileStyles.imageContainer }>
                        {
                            (photoURL !== null) ?
                                <Image
                                    style={ profileStyles.profileImage }
                                    source={ { uri: photoURL } }
                                />
                                :
                                <UserIco size={ 160 } />
                        }

                        <Pressable
                            style={ profileStyles.editButton }
                            onPress={ onEditPhoto }
                        >
                            <EditIco size={ 20 } color={ colors.cultured } />
                        </Pressable>

                    </View>

                    <View style={ { alignItems: 'center', gap: 4 } }>
                        <Text style={ styles.title }>{ displayName }</Text>
                        <Text style={ styles.text }>{ email }</Text>
                    </View>

                </View>

                <View style={ {width:'100%', alignItems: 'center', gap: 16 } }>
                    <Pressable
                        style={ styles.button }
                        onPress={ onLogout }
                    >
                        <Text style={ styles.buttonText }>Logout</Text>
                    </Pressable>

                    <Pressable
                        style={ [ styles.button, styles.buttonDelete ] }
                        onPress={ onDeleteAccount }
                    >
                        <Text style={ styles.buttonText }>Delete account</Text>
                    </Pressable>
                </View>

            </View>

        </ScreenLayout>
    )
}
