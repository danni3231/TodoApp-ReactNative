import { styles } from '../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'

export const ScreenLayout = ({ children }) => {
    return (
        <SafeAreaView style={ styles.container }>
            { children }
        </SafeAreaView>
    )
}
