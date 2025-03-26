import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

const StackLayout = () => {
    return (
        <GestureHandlerRootView>
            <StatusBar style="light" />
            <Stack
                screenOptions={ {
                    headerShown: false
                } }
            />
        </GestureHandlerRootView>
    )
}

export default StackLayout