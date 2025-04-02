import { ScrollView } from 'react-native-gesture-handler';
import Cards from '../components/Cards';
import Header from "../components/Haeder";
import { View, ImageBackground, StyleSheet } from 'react-native';

const cards = [
    {
        id: 1,
        image: require("../img/macarrons2.jpg"),
        title: "Produto 1",
        price: "R$ 10,00",
        icon: require("../img/car.png"),
    },
    {
        id: 2,
        image: require("../img/card1.jpg"),
        title: "Produto 2",
        price: "R$ 20,00",
        icon: require("../img/car.png"),
    },
    {
        id: 3,
        image: require("../img/card2.jpg"),
        title: "Produto 3",
        price: "R$ 30,00",
        icon: require("../img/car.png"),
    },
    
    {
        id: 4,
        image: require("../img/card3.jpg"),
        title: "Produto 4",
        price: "R$ 40,00",
        icon: require("../img/car.png"),
    },
    {
        id: 5,
        image: require("../img/card4.jpg"),
        title: "Produto 5",
        price: "R$ 50,00",
        icon: require("../img/car.png"),
    },
    {
        id: 6,
        image: require("../img/card5.jpg"),
        title: "Produto 6",
        price: "R$ 60,00",
        icon: require("../img/car.png"),
    },
    {
        id: 7,
        image: require("../img/card6.jpg"),
        title: "Produto 7",
        price: "R$ 70,00",
        icon: require("../img/car.png"),
    },
    {
        id: 8,
        image: require("../img/card7.jpg"),
        title: "Produto 8",
        price: "R$ 80,00",
        icon: require("../img/car.png"),
    },
    {
        id: 9,
        image: require("../img/card8.jpg"),
        title: "Produto 9",
        price: "R$ 90,00",
        icon: require("../img/car.png"),
    },
    {
        id: 10,
        image: require("../img/card9.jpg"),
        title: "Produto 10",
        price: "R$ 100,00",
        icon: require("../img/car.png"),
    },
];

export default function HomeScreen() {
    return (
        <ImageBackground source={require("../img/fundopreto.png")} style={styles.imagemfundo}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header />

                <View style={styles.cards}>
                    {cards.map((produto) => (
                        <Cards 
                            key={produto.id} 
                            imageSource={produto.image} 
                            title={produto.title} 
                            price={produto.price} 
                            iconSource={produto.icon} 
                        />
                    ))}
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imagemfundo: {
        flex: 1,
        resizeMode: 'cover',
    },
    scrollContainer: {
        flexGrow: 1, 
        paddingVertical: 20,
    },
    cards: {
        flexDirection: 'column',
        justifyContent: 'space-around', 
        padding: 10,
        gap: 10,
    },
});
