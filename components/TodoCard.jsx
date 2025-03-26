import { View, Text } from 'react-native'
import { styles, todoCardStyles } from '../styles/styles'
import { EllipsisIco, FlagIco, Separator } from './utils'

export const TodoCard = ({ priority, task, date, time }) => {

    return (
        <View style={ todoCardStyles.container }>
            <View style={ todoCardStyles.header }>
                <View style={ todoCardStyles.rowContainer }>
                    <FlagIco size={ 16 } />
                    <Text style={ todoCardStyles.priority }> { priority } </Text>
                </View>

                <EllipsisIco size={ 16 } />
            </View>
            <View style={ todoCardStyles.content }>
                <Text style={ todoCardStyles.task }> { task } </Text>
                <Separator />
                <View style={ [ todoCardStyles.rowContainer, { justifyContent: 'space-between' } ] }>
                    <Text style={ todoCardStyles.time }> { time } </Text>
                    <Text style={ todoCardStyles.date }> { date } </Text>
                </View>
            </View>

        </View>
    )
}


