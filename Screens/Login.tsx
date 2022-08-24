import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        return onAuthStateChanged(auth, user => {
            if (user) navigation.replace('Home');
        });
    }, []);


    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password).then(userCredentials => {
            const user = userCredentials.user;
            console.log('Signed up with: ', user.email);
        }).catch(err => alert(err.message));
    };

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password).then(userCredentials => {
            const user = userCredentials.user;
            console.log('Signed in with: ', user.email);
        }).catch(err => alert(err.message));
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
            <View style={styles.inputContainer}>
                <TextInput placeholder={'Email'} value={email} onChangeText={value => setEmail(value)}
                           style={styles.input}/>
                <TextInput secureTextEntry placeholder={'Password'} value={password}
                           onChangeText={value => setPassword(value)} style={styles.input}/>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => handleSignIn()} style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSignUp()} style={[styles.button, styles.buttonOutline]}>
                    <Text style={[styles.buttonOutlineText]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#0783f9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderWidth: 2,
        borderColor: '#0783f9'
    },
    buttonOutlineText: {
        color: '#0783f9',
        fontWeight: '700',
        fontSize: 16
    },
});

export default Login;
