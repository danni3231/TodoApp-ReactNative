import { FlatList, Text, View } from 'react-native'
import { BottomSheet, FloatingButton, OptionIco, ScreenLayout, TodoCard, TodoForm } from '../components'
import { styles } from '../styles/styles'
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { startSetTodos } from '../store/todos/thunks';
import { toggleSheetIsOpen } from '../store/form/formSlice';

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

                    <OptionIco size={ 32 } />
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
