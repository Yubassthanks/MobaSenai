import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function DetalhesScreen({ navigation, route }) {
    const curso = route.params.dados
    return (
        <View style={styles.container}>
            <View style={styles.textos}>
                
                <Text style={styles.text}>nome: {curso.dados.nome} {curso.sobrenome}</Text>
                <Text style={styles.text}>duracao: {curso.dados.duracao}</Text>
                <Text style={styles.text}>Descricao: {curso.dados.descricao}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    img: {
        width: '100%',
        height: '100%',
        maxHeight: 300,
    },
    textos: {
        width: '100%',
    },
    text: {
        fontSize: 16,
        margin: 5,
    }
});