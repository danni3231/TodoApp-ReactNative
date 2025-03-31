import { Pressable } from 'react-native'
import { colors, floatingBtnStyles } from '../../styles';
import { AddIco } from './Icons'

export const FloatingButton = ({ onPressed }) => {
    return (
        <Pressable
            style={ floatingBtnStyles.container }
            onPress={ () => onPressed() }
        >
            <AddIco size={ 32 } color={ colors.cultured } />
        </Pressable>
    )
}
