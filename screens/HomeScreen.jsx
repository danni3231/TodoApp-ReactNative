import { useEffect, useMemo } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native'
import { Link } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux'

import { BottomSheet, FloatingButton, ScreenLayout, TodoCard, TodoForm, UserIco } from '../components'
import { styles } from '../styles'

import { startSetTodos } from '../store/todos/thunks';
import { setFormType, toggleSheetIsOpen } from '../store/todoForm/todoFormSlice';
import { LoadingScreen } from '../components/utils/LoadingScreen';

export const HomeScreen = () => {
    const dispatch = useDispatch();
    const { todos, status } = useSelector(state => state.todos);
    const { uid } = useSelector(state => state.auth);

    const isCheckingTodos = useMemo(() => status === 'checking', [ status ])

    const onAdd = () => {
        dispatch(setFormType('ADD'))
        dispatch(toggleSheetIsOpen())
    }

    useEffect(() => {
        dispatch(startSetTodos(uid))
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

                {
                    isCheckingTodos ?
                        <LoadingScreen />
                        :
                        <FlatList
                            contentContainerStyle={
                                todos.length === 0 ?
                                    styles.containerCenter
                                    :
                                    styles.flatlistContainer
                            }
                            showsVerticalScrollIndicator={ false }
                            data={ todos }
                            keyExtractor={ item => item.id }
                            renderItem={ ({ item }) => <TodoCard { ...item } /> }
                            ListEmptyComponent={ <Text style={ styles.text }>Your to-do list is empty, Add a new todo now</Text> }
                        />
                }

                <FloatingButton onPressed={ onAdd } />

            </ScreenLayout >

            <BottomSheet >
                <TodoForm />
            </BottomSheet>
        </>
    )
}
