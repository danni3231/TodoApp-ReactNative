import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';


import { Provider } from 'react-redux'
import store from '../store/store';

const StackLayout = () => {
    return (
        <Provider store={ store }>
            <GestureHandlerRootView>
                <StatusBar style="light" />
                <Stack
                    screenOptions={ {
                        headerShown: false
                    } }
                />
            </GestureHandlerRootView>
        </Provider>
    )
}

export default StackLayout