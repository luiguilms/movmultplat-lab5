import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const StackScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Image
                    source={require('../assets/images/gojo.jpg')} 
                    style={styles.image}
                />
                <Text style={styles.name}>Luigui Lupacca</Text>
                <Text style={styles.description}>
                    Soy un joven estudiante de 21 años amante de la tecnología y la programación. psdt: Profesor no me repruebe por favor 😢
                </Text>
                {/* Separador superior */}
                <View style={styles.separator}></View>
                {/* Texto adicional */}
                <Text style={styles.additionalText}>
                    ¡Explora mi colección de libros favoritos!
                </Text>
                {/* Separador inferior */}
                <View style={styles.separator}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        backgroundColor: 'rgba(128, 0, 128, 0.2)', 
        padding: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100, 
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    separator: {
        height: 10,
    },
    additionalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10, 
    },
});

export default StackScreen;
