import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { colors } from '../../styles/styles'
import { loaderStyle } from '../../styles'

export const LoadingScreen = () => {
    return (
        <View style={ loaderStyle.container } >
            <ActivityIndicator size='large' color={ colors.lilac } />
        </View>
    )
}
