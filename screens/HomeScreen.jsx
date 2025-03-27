import { FlatList, Text, View } from 'react-native'
import { BottomSheet, FloatingButton, OptionIco, ScreenLayout, TodoCard, TodoForm } from '../components'
import { styles } from '../styles/styles'
import { useSharedValue, } from 'react-native-reanimated';
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { startSetTodos, startAddTodo, startUpdateTodo, startDeleteTodo } from '../store/todos/thunks';

export const HomeScreen = () => {

    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.todos);

    const [ sheetType, setSheetType ] = useState('') // set sheet type: 'ADD' or 'EDIT' 
    const [ todoToUpdate, setTodoToUpdate ] = useState({})

    const sheetIsOpen = useSharedValue(false);

    const toogleSheet = () => {
        sheetIsOpen.value = !sheetIsOpen.value;
    };

    const toogleUpdate = (id) => {
        setSheetType('EDIT');
        setTodoToUpdate(todos.find(todo => todo.id === id))
        toogleSheet();
    }

    const toogleAdd = () => {
        setSheetType('ADD');
        toogleSheet();
    }

    const onDelete = (todoId) => {
        dispatch(startDeleteTodo(todoId));
    }

    const onSubmit = (todo) => {
        toogleSheet()

        switch (sheetType) {
            case 'ADD':
                dispatch(startAddTodo(todo))

                break;

            case 'EDIT':
                dispatch(startUpdateTodo(todo))
                break;
        }
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
                    renderItem={ ({ item }) => <TodoCard deleteTodo={ onDelete } editTodo={ toogleUpdate } { ...item } /> }
                />

                <FloatingButton onPressed={ toogleAdd } />

            </ScreenLayout >

            <BottomSheet
                isOpen={ sheetIsOpen }
                toggleSheet={ toogleSheet }
            >
                <TodoForm
                    type={ sheetType }
                    todoToUpdate={ todoToUpdate }
                    onSubmit={ onSubmit }
                />
            </BottomSheet>
        </>
    )
}
