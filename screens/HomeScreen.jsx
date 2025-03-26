import { FlatList, Text, View } from 'react-native'
import { BottomSheet, FloatingButton, OptionIco, ScreenLayout, TodoCard, TodoForm } from '../components'
import { styles } from '../styles/styles'
import { useSharedValue, } from 'react-native-reanimated';
import { useState } from 'react';
import { writeTodo } from '../Firebase/provider';

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

                <FloatingButton onPressed={ toggleSheet } />

            </ScreenLayout >
            <BottomSheet isOpen={ isOpen } toggleSheet={ toggleSheet }>
                <TodoForm onSubmit={ (todo) => addTodo(todo) } />
            </BottomSheet>
        </>
    )
}
