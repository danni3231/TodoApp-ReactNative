import { Pressable, Text, TextInput, View } from 'react-native'
import { styles } from '../styles/styles'
import { Picker } from '@react-native-picker/picker';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startAddTodo, startUpdateTodo } from '../store/todos/thunks';
import { toggleSheetIsOpen } from '../store/todoForm/todoFormSlice';

export const TodoForm = () => {
    const dispatch = useDispatch();
    const { formType, todoRef } = useSelector(state => state.todoForm);

    const [ task, setTask ] = useState('');
    const [ priority, setPriority ] = useState('High: 1');
    const [ formValid, setFormValid ] = useState(true)

    const onSubmit = () => {
        if (task.trim().length === 0) {
            setFormValid(false)
            return
        }

        let todo = {}

        switch (formType) {
            case 'ADD':
                const date = new Date();
                todo = {
                    task,
                    priority,
                    date: date.toLocaleDateString([], { timeZone: 'America/Bogota' }),
                    time: date.toLocaleTimeString([], { timeZone: 'America/Bogota', timeStyle: 'short' }),
                    id: Date.now(),
                }
                dispatch(startAddTodo(todo))

                break;

            case 'EDIT':
                todo = {
                    ...todoRef,
                    task,
                    priority,
                }
                dispatch(startUpdateTodo(todo))
                break;
        }

        setFormValid(true)
        dispatch(toggleSheetIsOpen())
    }


    useEffect(() => {
        if (formType === 'EDIT') {
            setTask(todoRef.task)
            setPriority(todoRef.priority)
        } else {
            setTask('')
            setPriority('High: 1')
        }
    }, [ formType, todoRef ])

    return (
        <>
            <Text style={ styles.title }>
                { (formType === 'ADD') ? 'Add new task' : 'Edit task' }
            </Text>
            <TextInput
                style={ styles.input }
                placeholder='Write Task'
                value={ task }
                onChangeText={ setTask }
            />

            <View style={ [ styles.input, { padding: 0 } ] }>
                <Picker
                    style={ styles.picker }
                    selectedValue={ priority }
                    onValueChange={ (itemValue) =>
                        setPriority(itemValue)
                    }
                >
                    <Picker.Item style={ styles.pickerItem } label='High: 1' value='High: 1' />
                    <Picker.Item style={ styles.pickerItem } label='Medium: 2' value='Medium: 2' />
                    <Picker.Item style={ styles.pickerItem } label='Low: 3' value='Low: 3' />
                </Picker>
            </View>

            <Pressable
                style={ styles.button }
                onPress={ onSubmit }
            >
                <Text style={ styles.buttonText }>
                    { (formType === 'ADD') ? 'Add Task' : 'Update Task' }
                </Text>
            </Pressable>

            { !formValid && <Text> Please fill in all fields </Text> }
        </>
    )
}
