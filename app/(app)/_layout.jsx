import React from 'react'
import { useCheckAuth } from '../../hooks/useCheckAuth'
import { Redirect, Stack } from 'expo-router'

const AppLayout = () => {
    const status = useCheckAuth()

    if (status === 'not-authenticated') {
        return <Redirect href='/auth' />
    }

    return (
        <Stack
            screenOptions={ {
                headerShown: false
            } }
        />
    )
}

export default AppLayout