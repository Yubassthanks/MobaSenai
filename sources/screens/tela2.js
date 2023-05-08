import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import cursos from '../mocks/jsonlist'
import ItemLista from '../components/SegundaTela'

export default function ClientesScreen({ navigation, route }) {
    let dados = route.params.dados;
    const abrirDetalhes = (dados) => {
        navigation.navigate('tela3', { dados });
    }
    //Filtro
    let categorias = [];
    cursos.forEach(e=>{
        if(e.categoria == dados.categoria)
            categorias.push(e)
    })
    return (
        <View style={styles.container}>
            <FlatList
                data={categorias}
                style={styles.list}
                renderItem={({ item }) => 
                <TouchableOpacity style={styles.item} onPress={() => abrirDetalhes(item)}>
                    <ItemLista item={item} />
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
        width: '100%',
        paddingHorizontal: 20,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
    },
});