import { useEffect } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native'
import { Link, router } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux'

import { BottomSheet, FloatingButton, ScreenLayout, TodoCard, TodoForm, UserIco } from '../components'
import { styles } from '../styles/styles'

import { startSetTodos } from '../store/todos/thunks';
import { setFormType, toggleSheetIsOpen } from '../store/todoForm/todoFormSlice';
import { useCheckAuth } from '../hooks/useCheckAuth';


export const HomeScreen = () => {
    const status = useCheckAuth()

    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.todos);

    const onAdd = () => {
        dispatch(setFormType('ADD'))
        dispatch(toggleSheetIsOpen())
    }

    useEffect(() => {
        if (status === 'not-authenticated') {
            router.replace('/auth');
        }
        dispatch(startSetTodos())
    }, [])

    return (
        <>
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

                    <Link href={ '/profile' } asChild>
                        <Pressable>
                            <UserIco size={ 32 } />
                        </Pressable>
                    </Link>


                </View>

                <FlatList
                    contentContainerStyle={ styles.flatlistContainer }
                    showsVerticalScrollIndicator={ false }
                    data={ todos }
                    keyExtractor={ item => item.id }
                    renderItem={ ({ item }) => <TodoCard { ...item } /> }
                />

                <FloatingButton onPressed={ onAdd } />

            </ScreenLayout >

            <BottomSheet >
                <TodoForm />
            </BottomSheet>
        </>
    )
}
