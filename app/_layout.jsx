import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Slot, Stack } from 'expo-router';


import { Provider } from 'react-redux'
import store from '../store/store';

const RootLayout = () => {
    return (
        <Provider store={ store }>
            <GestureHandlerRootView>
                <StatusBar style="light" />
                <Slot />
            </GestureHandlerRootView>
        </Provider>
    )
}

export default RootLayout