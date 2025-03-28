import {
    TouchableOpacity,
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useDerivedValue,
    withDelay,
    withTiming,
} from 'react-native-reanimated';
import { bottomSheetStyles } from '../../styles/styles';

import { useDispatch, useSelector } from 'react-redux';
import { toggleSheetIsOpen } from '../../store/todoForm/todoFormSlice';

export function BottomSheet ({ /*isOpen, toggleSheet,*/ duration = 500, children }) {

    const dispatch = useDispatch();
    const { sheetIsOpen } = useSelector(state => state.todoForm);

    const height = useSharedValue(0);

    const progress = useDerivedValue(() =>
        withTiming(sheetIsOpen ? 0 : 1, { duration })
    );

    const sheetStyle = useAnimatedStyle(() => ({
        transform: [ { translateY: progress.get() * 2 * height.get() } ],
    }));

    const backdropStyle = useAnimatedStyle(() => ({
        opacity: 1 - progress.get(),
        zIndex: sheetIsOpen
            ? 1
            : withDelay(duration, withTiming(-1, { duration: 0 })),
    }));

    return (
        <>
            <Animated.View style={ [ bottomSheetStyles.backdrop, backdropStyle ] }>
                <TouchableOpacity style={ { flex: 1 } } onPress={ () => dispatch(toggleSheetIsOpen()) } />
            </Animated.View>
            <Animated.View
                onLayout={ (e) => {
                    height.set(e.nativeEvent.layout.height)
                } }
                style={ [ bottomSheetStyles.sheet, sheetStyle ] }>
                { children }
            </Animated.View>
        </>
    );
}