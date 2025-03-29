import { useEffect } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native'
import { Link } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux'

import { BottomSheet, FloatingButton, ScreenLayout, TodoCard, TodoForm, UserIco } from '../components'
import { styles } from '../styles/styles'

import { startSetTodos } from '../store/todos/thunks';
import { setFormType, toggleSheetIsOpen } from '../store/todoForm/todoFormSlice';
import { LoadingScreen } from '../components/utils/LoadingScreen';

export const HomeScreen = () => {
    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.todos);

    const onAdd = () => {
        dispatch(setFormType('ADD'))
        dispatch(toggleSheetIsOpen())
    }

    useEffect(() => {
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

                {
                    todos.length === 0 ?
                        <LoadingScreen />
                        :
                        <FlatList
                            contentContainerStyle={ styles.flatlistContainer }
                            showsVerticalScrollIndicator={ false }
                            data={ todos }
                            keyExtractor={ item => item.id }
                            renderItem={ ({ item }) => <TodoCard { ...item } /> }
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
