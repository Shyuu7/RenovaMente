import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
export default SearchScreen;