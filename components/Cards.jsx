import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function Cards({ imageSource, title, price, iconSource }) {
    return (
        <View style={styles.cards}>
            <Image
                source={imageSource}
                style={styles.card}
                contentFit="contain"
            />
            <View style={styles.texto}>
                <Text style={styles.text1}>{title}</Text>
                <Text style={styles.text2}>{price}</Text>
            </View>
            <View style={styles.iconContainer}>
                <Image
                    source={iconSource}
                    style={styles.icon}
                    contentFit="contain"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cards: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
        height: 105,
        borderRadius: 10,
    },
    card: {
        width: 90,
        height: 90,
    },
    texto: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginRight: 40,
    },
    text1: {
        fontSize: 18,
        fontWeight: "bold",
    },
    text2: {
        fontSize: 16,
        color: "#888",
    },
    iconContainer: {
        padding: 10,
        marginRight: 20,
    },
    icon: {
        width: 25,
        height: 25,
    },
});
