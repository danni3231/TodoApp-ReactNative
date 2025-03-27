import { FlatList, Text, View } from 'react-native'
import { BottomSheet, FloatingButton, OptionIco, ScreenLayout, TodoCard, TodoForm } from '../components'
import { styles } from '../styles/styles'
import { useSharedValue, } from 'react-native-reanimated';
import { use, useEffect, useState } from 'react';
import { readTodos, removeTodo, writeTodo } from '../Firebase/provider';

export const HomeScreen = () => {
    const [ sheetType, setSheetType ] = useState('') // set sheet type: 'ADD' or 'EDIT' 
    const [ todos, setTodos ] = useState([])
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

    //todo: make redux

    const addTodo = (todo) => {
        toogleSheet()

        writeTodo(todo);

        setTodos(
            [ ...todos, todo ]
        );
    }

    const deleteTodo = (todoId) => {
        const newTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(newTodos);
        removeTodo(todoId);
    }

    const updateTodo = (todo) => {
        toogleSheet()

        writeTodo(todo);

        setTodos(
            todos.map(item => item.id === todo.id ? todo : item)
        );

    }

    const onSubmit = (todo) => {
        switch (sheetType) {
            case 'ADD':
                addTodo(todo);
                break;

            case 'EDIT':
                updateTodo(todo);
                break;
        }
    }

    useEffect(() => {

        readTodos().then(snapshot => {
            const dbTodos = Object.values(snapshot.val());
            setTodos(dbTodos);
        })

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
                    renderItem={ ({ item }) => <TodoCard deleteTodo={ deleteTodo } editTodo={ toogleUpdate } { ...item } /> }
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
