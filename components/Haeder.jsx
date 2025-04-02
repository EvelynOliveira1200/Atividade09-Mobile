import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function Header() {
    return (
        <View style={styles.header}>
            <Image
                source={require("../img/logobranco.png")}
                style={styles.logo}
                contentFit="contain"
            />
            <View style={styles.icons}>
                <Image
                    source={require("../img/pesquisa.png")}
                    style={styles.icon}
                    contentFit="contain"
                />
                <Image
                    source={require("../img/favorito.png")}
                    style={styles.icon}
                    contentFit="contain"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff",
        height: 100,
    },
    logo: {
        width: 150,
        height: 70,
        marginTop: 30,
    },
    icons: {
        flexDirection: "row",
        marginTop: 30,
        marginRight: 20,
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 20,
        padding: 10,
        marrginTop: 10,
    },
});