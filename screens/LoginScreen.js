import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { auth } from "../firebase";
import { useNavigation } from '@react-navigation/core';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                // TODO: Issue: when the user logs in and goes to the home screen he can go back to the login screen
                navigation.replace("Home")
            }
        })
    }, [])

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password).then(userCredentials => {
            const user = userCredentials.user;
            console.log('logged in with:', user.email)
        }).catch(error => alert(error.message))
    }

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password).then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
        }).catch(error => alert(error.message))
    }

    return(
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={text => setEmail(text)}/>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry value={password} onChangeText={text => setPassword(text)}/>
                <Text style={styles.passwordResetText} onPress={() => navigation.navigate("Password reset")}>Forgot Password?</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal:  15,
        paddingVertical: 10,
        borderRadius: 15,
        marginTop: 5
    },
    passwordResetText: {
        alignSelf: "center",
        marginTop: 10
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    }
})