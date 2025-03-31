import { Pressable, Text, View } from 'react-native'
import { ScreenLayout } from '../components'
import { TextInput } from 'react-native-gesture-handler'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword, startLoginWithEmailPassword } from '../store/auth/thunks'
import { authStyles, styles } from '../styles'

export const AuthScreen = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.auth)

    const isCheckingAuth = useMemo(() => status === 'checking', [ status ])

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ displayName, setDisplayName ] = useState('')

    const [ type, setType ] = useState('login')
    const [ showPassword, setShowPassword ] = useState(false)

    const toggleType = () => {
        setType(type === 'login' ? 'signup' : 'login')
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const onSubmit = () => {

        switch (type) {
            case 'login':

                dispatch(startLoginWithEmailPassword({
                    email,
                    password,
                }))

                break;

            case 'signup':

                dispatch(startCreatingUserWithEmailPassword({
                    email,
                    password,
                    displayName
                }))

                break;
        }
    }

    return (
        <ScreenLayout>

            <View style={ authStyles.authContainer }>
                <View style={ authStyles.formContainer }>
                    <View>
                        <Text style={ [ stylesr.title, styles.textCenter ] }>
                            { type === 'login' ? 'Welcome Back!' : 'Create account' }
                        </Text>
                        <Text style={ [ styles.text, styles.textCenter ] }>
                            { type === 'login' ? 'Your work faster and structured with TodoApp' : 'Create your account and feel the benefits' }
                        </Text>
                    </View>

                    <View>
                        {
                            type === 'signup' &&
                            <TextInput
                                style={ styles.input }
                                placeholder='displayName'
                                value={ displayName }
                                onChangeText={ setDisplayName }
                            />
                        }

                        <TextInput
                            style={ styles.input }
                            placeholder='Email Address'
                            value={ email }
                            onChangeText={ setEmail }
                        />

                        <TextInput
                            secureTextEntry={ !showPassword }
                            style={ styles.input }
                            placeholder='password'
                            value={ password }
                            onChangeText={ setPassword }
                        />
                    </View>
                </View>

                <View style={ authStyles.buttonContainer }>
                    <Pressable
                        style={ styles.button }
                        onPress={ onSubmit }
                        disabled={ isCheckingAuth }
                    >
                        <Text style={ styles.buttonText }>{ type === 'login' ? 'Log in' : 'Sign Up' }</Text>
                    </Pressable>

                    <Pressable
                        style={ [ styles.row, { justifyContent: 'center', gap: 8 } ] }
                        onPress={ toggleType }
                    >
                        <Text style={ styles.subText }>
                            { type === 'login' ? 'Are you a new user?' : 'Already have an account?' }
                        </Text>
                        <Text style={ [ styles.subText, styles.textUnderline ] }>
                            { type === 'login' ? 'Create an account' : 'Log in' }
                        </Text>
                    </Pressable>
                </View>


            </View>



        </ScreenLayout >
    )
}
