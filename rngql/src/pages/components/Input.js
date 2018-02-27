import React, { Component } from 'react';

import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Input extends Component {
    state = {
        message: ''
    };

    handleAddMessage = async () => {
        const { message } = this.state;
        const { author } = this.props;

        if (message.length > 0) {
            const newMessage = await this.props.addMessage({
                author,
                message,
            });
        }

        this.setState({ message: '' });
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="rgba(0, 0, 0, 0)"
                />
                <TouchableOpacity activeOpacity={0.6} onPress={()=>{}}>
                    <Text style={styles.button}>Enviar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        height: 42,
        paddingHorizontal: 10,
        paddingVertical: 6,
        backgroundColor: '#fafafa',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center'
    },

    input: {
        flex: 1,
        height: 30,
        paddingHorizontal: 10,
        paddingVertical: 0,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12
    },

    button: {
        marginLeft: 10,
        color: '#358CFF',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
