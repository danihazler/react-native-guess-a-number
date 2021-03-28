import React, { useState } from 'react';
import { 
    View, 
    Text, 
    Button,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import Colors from '../constants/colors';
import { Card } from '../components/card';
import { Input } from '../components/input';

export const StartGameScreen = () => {
    const [enteredValue, setEnteredValeu] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);

    const handleOnChangeValue = (value) => {
        const number = value.replace(/[^0-9]/g, '');
        setEnteredValeu(number);
    }

    const handleResetInput = () => {
        setEnteredValeu('');
        setConfirmed(false);
    }

    const handleConfirmation = () => {
        const number = parseInt(enteredValue);

        if(number === NaN || number < 0 || number > 99) return;

        setConfirmed(true);
        setSelectedNumber(number);
        setEnteredValeu('');
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.card}>
                    <Text>Select a number</Text>
                    <Input 
                        style={styles.input} 
                        keyboardType="number-pad"  
                        maxLength={2} 
                        blurOnSubmit
                        onChangeText={handleOnChangeValue}
                        value={enteredValue}
                    />
                    <View style={styles.buttons}>
                        <View style={styles.button}>
                            <Button 
                                title="Reset" 
                                color={Colors.secondary} 
                                onPress={handleResetInput} 
                            />
                        </View>
                        <View style={styles.button}>
                            <Button 
                                title="Confirm" 
                                color={Colors.primary} 
                                onPress={handleConfirmation} 
                            />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: '45%'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    input: {
        width: '20%',
        textAlign: 'center'
    }
});