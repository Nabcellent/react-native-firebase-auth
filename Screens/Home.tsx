import { signOut } from 'firebase/auth';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core';

const Home = () => {
    const navigation = useNavigation();

    const handleSignOut = () => {
        signOut(auth).then(() => navigation.replace('Login')).catch(err => alert(err.message));
    };

    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>

            <TouchableOpacity style={styles.button} onPress={() => handleSignOut()}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#0783f9',
        width: '70%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
});

export default Home;
