import React from 'react'
import { useCheckAuth } from '../../hooks/useCheckAuth'
import { Redirect, Stack } from 'expo-router'
import { colors, styles } from '../../styles'

const AppLayout = () => {
    const status = useCheckAuth()

    if (status === 'not-authenticated') {
        return <Redirect href='/auth' />
    }

    return (
        <Stack
            screenOptions={ {
                headerStyle: { backgroundColor: colors.eerieBlack },
                headerTintColor: colors.royalPurple,
                headerTitleStyle: styles.title,
                headerShown: false,
            } }
        />
    )
}

export default AppLayout