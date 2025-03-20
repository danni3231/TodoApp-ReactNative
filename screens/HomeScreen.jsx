import { Text, View } from 'react-native'
import { OptionIco, ScreenLayout } from '../components'
import { styles } from '../styles/styles'

export const HomeScreen = () => {
    return (
        <ScreenLayout>
            <View style={ styles.row }>
                <View >
                    <Text style={ styles.title }>
                        Today
                    </Text>
                    <Text style={ styles.text }>
                        Best platform for creating to-do lists
                    </Text>
                </View>

                <OptionIco />
            </View>

        </ScreenLayout >
    )
}
