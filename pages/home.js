import Cards from '../components/Cards';
import Header from "../components/Haeder";
import { View, ImageBackground, StyleSheet } from 'react-native';


export default function HomeScreen() {
    return (
        <ImageBackground source={require("../img/fundopreto.png")} style={styles.imagemfundo}>
        <View>
            <Header />

            <View style={styles.cards}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            </View>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imagemfundo: {
        flex: 1,
        resizeMode: 'cover',
    },
    cards: {
        flexDirection: 'column',
        justifyContent: 'space-around', 
        marginTop: 20, 
        padding: 10,
        gap: 10,
    },
});