import { View, Text, Pressable } from 'react-native'
import { todoCardStyles, modalSyles, colors } from '../styles/styles'
import { DeleteIco, EditIco, EllipsisIco, FlagIco, Separator } from './utils'
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { setFormType, setTodoRef, toggleSheetIsOpen } from '../store/form/formSlice';
import { startDeleteTodo } from '../store/todos/thunks';

export const TodoCard = ({ priority, task, date, time, id }) => {
    const dispatch = useDispatch();

    const [ modalVisible, setModalVisible ] = useState(false);

    const changeVisibility = () => {
        setModalVisible(!modalVisible);
    }

    const onUpdate = () => {
        const todo = { priority, task, date, time, id }
        dispatch(setFormType('EDIT'))
        dispatch(setTodoRef(todo))
        dispatch(toggleSheetIsOpen())
    }

    return (
        <View style={ todoCardStyles.container }>
            <View style={ todoCardStyles.header }>
                <View style={ todoCardStyles.rowContainer }>
                    <FlagIco size={ 16 } />
                    <Text style={ todoCardStyles.priority }> { priority } </Text>
                </View>

                <Pressable
                    onPress={ changeVisibility }
                >
                    <EllipsisIco size={ 16 } />
                </Pressable>

            </View>
            <View style={ todoCardStyles.content }>
                <Text style={ todoCardStyles.task }> { task } </Text>
                <Separator />
                <View style={ [ todoCardStyles.rowContainer, { justifyContent: 'space-between' } ] }>
                    <Text style={ todoCardStyles.time }> { time } </Text>
                    <Text style={ todoCardStyles.date }> { date } </Text>
                </View>
            </View>

            <Pressable
                onPressOut={ changeVisibility }
                style={ modalVisible ? modalSyles.modalContent : modalSyles.hide }
            >
                <Pressable
                    onPress={ onUpdate }
                    onPressOut={ changeVisibility }
                    style={ modalSyles.rowContent }
                >
                    <EditIco />
                    <Text style={ modalSyles.text }>Edit</Text>
                </Pressable>
                <Pressable
                    onPress={ () => dispatch(startDeleteTodo(id)) }
                    onPressOut={ changeVisibility }
                    style={ modalSyles.rowContent }
                >
                    <DeleteIco color={ colors.red } />
                    <Text style={ modalSyles.textDelete }>Delete</Text>
                </Pressable>
            </Pressable>

        </View >
    )
}


