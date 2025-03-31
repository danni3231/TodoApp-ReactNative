import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { colors } from '../../styles'
import { loaderStyles } from '../../styles'

export const LoadingScreen = () => {
    return (
        <View style={ loaderStyles.container } >
            <ActivityIndicator size='large' color={ colors.lilac } />
        </View>
    )
}
