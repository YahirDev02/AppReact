import { StyleSheet } from "react-native";

const styleRegister = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    firstSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: '100%',
    },
    secondSecction: {
        flex: 2,
        backgroundColor: 'white',
        width: '100%',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        padding: 20,
        justifyContent: "space-between"
    },
    tittle: {
        fontSize: 64,
        color: "white",
    },
    label: {
        color: "#000",
    },
    textInput: {
        color: "#000",
        padding: 8,
    },
    ForgotPassword: {
        color: "black",
        textAlign: 'right'
    },
    button: {
        backgroundColor: "orange",
        padding: 15,
        borderRadius: 30,
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    spacing: {
        marginTop: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    },
    signup: {
       color: "#00A86B",
       padding: 5, 
    }
})

export default styleRegister;