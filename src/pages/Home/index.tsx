import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react';
import { Feather } from '@expo/vector-icons';
import Products from '../../components/Products';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackParamList } from '../../routes/stack.routes';
import { CartContext } from '../../context/CartContext';

export default function Home(){
    const { cart, addItemCart } = useContext(CartContext);
    const navigation = useNavigation<NavigationProp<StackParamList>>(); // Tipagem correta
    const [products, setProducts] = useState([
        {
            id: '1',
            name: "Coca cola",
            price: 19.90	
        },
        {
            id: '2',
            name: "Chocolate",
            price: 6.50
        },
        {
            id: '4',
            name: "Queijo 500g",
            price: 15
        },
        {
            id: '5',
            name: "Batata Frita",
            price: 23.90
        },
        {
            id: '6',
            name: "Guaraná lata",
            price: 23.90
        },
    ])

    type Product = {
        id: string;
        name: string;
        price: number;
    };
    
    function handleAddCart(item: Product) {
        addItemCart(item);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cartContent}>
                <Text style={styles.title}>Lista de Produtos</Text>
                <TouchableOpacity style={styles.cartButton} onPress={ () => navigation.navigate("Cart") }>
                    
                    {cart.length >= 1 && (
                        <View style={styles.dot}>
                        <Text style={styles.dotText}>
                            {cart?.length}
                        </Text>
                        </View>
                    )}
                    <Feather name="shopping-cart" size={30} color="000"/>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.list}
                data={products}
                keyExtractor={ (item) => String(item.id) }
                renderItem={ ({ item }) => <Products data={item} addToCart={ () => handleAddCart(item)}/>}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        paddingEnd: 14,
        paddingStart: 14
    },
    cartContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 24,
    },
    dot:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "red",
        width: 20,
        height: 20,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 99,
        bottom: -2,
        left: -4,
    },
    dotText:{
        fontSize: 12,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    list:{

    },
    cartButton:{

    }
})