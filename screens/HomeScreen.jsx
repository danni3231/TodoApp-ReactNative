import { FlatList, Text, View } from 'react-native'
import { BottomSheet, FloatingButton, OptionIco, ScreenLayout, TodoCard, TodoForm } from '../components'
import { styles } from '../styles/styles'
import { useSharedValue, } from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import { readTodos, removeTodo, writeTodo } from '../Firebase/provider';

export const HomeScreen = () => {
    const isOpen = useSharedValue(false);

    const toggleSheet = () => {
        isOpen.value = !isOpen.value;
    };

    const [ todos, setTodos ] = useState([])

    const addTodo = (todo) => {
        isOpen.set(false);

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
                    renderItem={ ({ item }) => <TodoCard deleteTodo={ deleteTodo } { ...item } /> }
                />

                <FloatingButton onPressed={ toggleSheet } />

            </ScreenLayout >
            <BottomSheet isOpen={ isOpen } toggleSheet={ toggleSheet }>
                <TodoForm onSubmit={ (todo) => addTodo(todo) } />
            </BottomSheet>
        </>
    )
}
