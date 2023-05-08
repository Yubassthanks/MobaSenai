import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Telatest from '../components/PrimeiraTela'

export default function Categorias({ navigation }) {

    const abrirDetalhes = (dados) => {
        navigation.navigate('tela2', { dados });
    }

    const tipos = [
        {
            categoria: 'TECNICO',
        },
        {
            categoria: 'FIC',
        },
        {
            categoria: 'CAI',
        },

    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={tipos}
                style={styles.list}
                renderItem={({ item }) => <TouchableOpacity style={styles.item} onPress={() => abrirDetalhes(item)}>
                    <Telatest item={item} />
                </TouchableOpacity>}
            />
        </View >);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flex: 1,
        width: '100%',
        paddingHorizontal: '25vw',

    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});