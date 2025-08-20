import React from "react";
import { Text, View, Image, TextInput, TouchableHighlight } from "react-native";
import { style } from "./style";
import Logo from "../../assets/logo.png";
import { themas } from "../../global/themes";
import { MaterialIcons } from '@expo/vector-icons';

export default function Login() {
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>Endereço de E-mail:</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        placeholder="Digite seu e-mail"
                        keyboardType="email-address"
                    />
                    <MaterialIcons
                        name="email"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>

                <Text style={style.titleInput}>Senha:</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        placeholder="Digite sua senha"
                        secureTextEntry
                    />
                    <MaterialIcons
                        name="lock"
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
            </View>

            <View style={style.boxBotton}>
                <TouchableHighlight style={style.button}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableHighlight>
            </View>
            <Text style={style.textBotton}>Não tem conta? <Text style={{color: themas.colors.primary}}>Crie agora!</Text></Text>
        </View>
    );
}
