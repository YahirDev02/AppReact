import { View, SafeAreaView, Image, Text, TextInput, TouchableOpacity } from "react-native"
import stylesRegister from '../../styles/register'
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

function Register() {

    const [selectedImagen, setSelectedImage] = useState(null);

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.cancelled) {
                setSelectedImage(result.uri);
            }
        } catch (error) {
            console.error('Error al seleccionar una imagen:', error);
        }
    };

    return (
        <SafeAreaView style={stylesRegister.container}>

            <View style={stylesRegister.firstSection}>
                <Image
                    source={{
                        uri: selectedImagen || 'https://unsplash.com/es/fotos/WiE01mC9AtY',
                    }}
                    style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                />
                <View

                    style={{
                        position: "Center"
                    }}
                >
                    <Text style={stylesRegister.tittle}></Text>
                </View>
            </View>
            <View style={stylesRegister.secondSecction}>

                <View>
                    <View style={stylesRegister.spacing}>
                        <Text style={stylesRegister.label}>Email</Text>
                        <TextInput
                            style={stylesRegister.textInput}
                            underlineColorAndroid="pink"
                            placeholder="ejemplo@ejemplo.com"
                            keyboardType='email-address'
                            returnKeyType='next'
                        />
                    </View>

                    <View style={stylesRegister.spacing}>
                        <Text style={stylesRegister.label}>Contraseña</Text>
                        <TextInput
                            style={stylesRegister.textInput}
                            underlineColorAndroid="pink"
                            placeholder="********"
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={stylesRegister.spacing}>
                        <TouchableOpacity style={stylesRegister.button}>
                            <Text style={stylesRegister.buttonText}>Registrar</Text>
                        </TouchableOpacity>
                    </View>

                    
                    <View style={stylesRegister.spacing}>
                        <TouchableOpacity style={stylesRegister.button} onPress={pickImage}>
                            <Text style={stylesRegister.buttonText}>Seleccionar Imagen</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}

export default Register;