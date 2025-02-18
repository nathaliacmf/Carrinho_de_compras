import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CardItem from '../../components/CardItem';

export default function Cart(){
    const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);
    //no flatlist tem uma sacada para quando não tem nada na lista (ListEmptyComponent)
    return (
        <View style={styles.container}>
             
            <FlatList
                data={cart}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={ () =>  <Text>Nenhum item no seu carrinho...</Text>}
                keyExtractor={ (item) => String(item.id)}
                renderItem={ ( {item}) => (
                    <CardItem
                        data={item}
                        addAmount={ () => addItemCart(item) }
                        removeAmount={ () => removeItemCart(item) }
                    />
                )}
                //vai renderizar o ultimo item da lista
                ListFooterComponent={ () => <Text style={styles.total}>Total R$ {total}</Text> }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14
    },
    total:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 24
    }
})