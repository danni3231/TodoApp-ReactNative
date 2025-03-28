import { styles } from '../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'

export const ScreenLayout = ({ children, props }) => {
    return (
        <SafeAreaView style={ styles.container } { ...props }>
            { children }
        </SafeAreaView>
    )
}
