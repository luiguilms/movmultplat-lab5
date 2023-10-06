import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>
                ¡Bienvenido a Mi Biblioteca Online!
            </Text>
            <Image
                source={require('../assets/images/manga.png')} 
                style={styles.bookImage} // Estilos de la imagen del libro
            />
            <Text style={styles.appDescription}>
                Aca vamos a explorar un poco de mis libros y mangas preferidos.
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Stack')}
                style={styles.button}>
                <Text style={styles.buttonText}>
                    Ir a mi perfil
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0', // Cambia el color de fondo a tu elección
    },
    welcomeText: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20,
        fontWeight: 'bold',
        color: 'purple', // Cambia el color del texto a tu elección
    },
    appDescription: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 30,
        marginBottom: 20,
        color: 'gray', // Cambia el color del texto a tu elección
    },
    button: {
        backgroundColor: 'purple',
        padding: 10,
        width: '50%',
        alignSelf: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    bookImage: {
        width: 150, // Ancho de la imagen
        height: 200, // Alto de la imagen
        marginBottom: 20, // Margen inferior
    },
})

export default HomeScreen
