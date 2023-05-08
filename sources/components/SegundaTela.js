import { View, Image, StyleSheet, Text } from "react-native";

export default function CursoList({ item, tipo }) {
    
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.text}>{item.curso}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    borderBottomColor: '#999',
    padding: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    padding: 10,
    width: 175,
    maxWidth: '100vw',
  },
  
});

