import { Pressable, Text, TextInput, View } from 'react-native'
import { styles } from '../styles/styles'
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

export const TodoForm = ({ onSubmit }) => {
    const [ task, setTask ] = useState('');
    const [ priority, setPriority ] = useState('High: 1');
    const [ formValid, setFormValid ] = useState(true)

    const validatetask = () => {
        if (task.trim().length === 0) {
            setFormValid(false)
            return
        }

        const date = new Date();

        onSubmit({
            task,
            priority,
            date: date.toLocaleDateString([], { timeZone: 'America/Bogota' }),
            time: date.toLocaleTimeString([], { timeZone: 'America/Bogota', timeStyle: 'short' }),
            id: Date.now(),
        })

        setFormValid(true)
        setTask('')
    }

    return (
        <>
            <Text style={ styles.title }>
                Add new task
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
                    onValueChange={ (itemValue, itemIndex) =>
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
                onPress={ validatetask }
            >
                <Text style={ styles.buttonText }>Add Task</Text>
            </Pressable>

            { !formValid && <Text> Please fill in all fields </Text> }
        </>
    )
}
