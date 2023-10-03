import { View, SafeAreaView, Image, Text, TextInput, TouchableOpacity } from "react-native"
import stylesLogin from '../../styles/login'

import imagenLogin from '../../assets/programmer.gif';

function Login(props) {
    const { navigation } = props;

    const goToRegister = () => {
        navigation.navigate("Register");
    }

    return (
        <SafeAreaView style={stylesLogin.container}>

            <View style={stylesLogin.firstSection}>
                <Image
                    source={imagenLogin}
                    style={{ width: "100%", height: "120%", resizeMode: "cover" }}
                />

                <View
                    style={{
                        position: "absolute"
                    }}
                >
                    <Text style={stylesLogin.tittle}></Text>
                </View>

            </View>

            <View style={stylesLogin.secondSecction}>
                <View>
                    <View style={stylesLogin.spacing}>
                        <Text style={stylesLogin.label}>Email address</Text>
                        <TextInput
                            style={stylesLogin.textInput}
                            underlineColorAndroid="blue"
                            placeholder="example@example.com"
                            keyboardType='email-address'
                            returnKeyType='next'
                        />
                    </View>

                    <View style={stylesLogin.spacing}>
                        <Text style={stylesLogin.label}>Password</Text>
                        <TextInput
                            style={stylesLogin.textInput}
                            underlineColorAndroid="blue"
                            placeholder="******"
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={stylesLogin.spacing}>
                        <Text style={stylesLogin.ForgotPassword}>Forgot password?</Text>
                    </View>

                    <View style={stylesLogin.spacing}>
                        <TouchableOpacity style={stylesLogin.button}>
                            <Text style={stylesLogin.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[stylesLogin.spacing, stylesLogin.row]}>
                    <Text style={stylesLogin.label}>Don't have an account?</Text>
                    <TouchableOpacity onPress={goToRegister}>
                        <Text style={stylesLogin.signup}>Sign up</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    );
}

export default Login;