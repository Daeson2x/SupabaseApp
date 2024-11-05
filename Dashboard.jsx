import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { supabase } from './Supabase';

export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Elementos: [],
            searchQuery: '',  // Campo de búsqueda
            filteredProductos: [],  // Lista de productos filtrados
        };
    }

    componentDidMount = async () => {
        let { data: productos, error } = await supabase.from('productos').select('*');
        console.log(productos);
        this.setState({ Elementos: productos, filteredProductos: productos });
    }

    handleSearch = (text) => {
        const filtered = this.state.Elementos.filter((producto) =>
            producto.nombre.toLowerCase().includes(text.toLowerCase())
        );
        this.setState({ searchQuery: text, filteredProductos: filtered });
    };

    render() {
        const renderProductCard = ({ item }) => (
            <View style={styles.card}>
                <Image
                    source={{ uri: item.imagen }}
                    style={styles.productImage}
                />
                <Text style={styles.productTitle}>{item.producto}</Text>
                <Text style={styles.Price}>{item.descripcion}</Text>
                <Text style={styles.productPrice}>Precio: ${item.precio}</Text>
                <Text style={styles.productAvailability}>Disponibles: {item.disponibles}</Text>
                <TouchableOpacity style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Comprar</Text>
                </TouchableOpacity>
            </View>
        );

        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Bienvenido a Tu Café Especialidad</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar productos..."
                    value={this.state.searchQuery}
                    onChangeText={this.handleSearch}
                />
                <FlatList
                    data={this.state.filteredProductos}
                    renderItem={renderProductCard}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.listContainer}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f8f5f0', // Fondo claro y cálido
      alignItems: 'center',
  },
  headerText: {
      color: '#4b3621',
      fontSize: 28,
      textAlign: 'center',
      fontWeight: 'bold',
      marginVertical: 25,
      textTransform: 'uppercase',
      letterSpacing: 1.5,
  },
  searchInput: {
      width: '90%',
      height: 45,
      borderColor: '#a67c52',
      borderWidth: 1.5,
      borderRadius: 12,
      paddingHorizontal: 15,
      marginBottom: 20,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 3.5,
  },
  listContainer: {
      alignItems: 'center',
      paddingBottom: 30,
  },
  row: {
      justifyContent: 'space-around',
      paddingHorizontal: 5,
  },
  card: {
      backgroundColor: '#fff7eb',
      borderRadius: 15,
      width: Dimensions.get('window').width / 2.3,
      padding: 12,
      marginVertical: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.25,
      shadowRadius: 6,
      elevation: 6,
      alignItems: 'center',
  },
  productImage: {
      width: '100%',
      height: 180,
      borderRadius: 10,
      marginBottom: 15,
      resizeMode: 'cover',
  },
  productTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#6b4226',
      textAlign: 'center',
      marginBottom: 8,
  },
  Price: {
      fontSize: 14,
      color: '#8b5938',
      textAlign: 'center',
      marginBottom: 8,
      fontStyle: 'italic',
  },
  productPrice: {
      fontSize: 16,
      color: '#a64b2a',
      fontWeight: 'bold',
      marginBottom: 6,
  },
  productAvailability: {
      fontSize: 14,
      color: '#655d52',
      marginBottom: 12,
  },
  buyButton: {
      backgroundColor: '#8b4513',
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 5,
  },
  buyButtonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: 1,
  },
});
