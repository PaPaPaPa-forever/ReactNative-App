import React from "react";
import { Text, Touchable, TouchableOpacity } from "react-native";
import { style } from "../CustomTabBar/style";

export default ({ state, navigation }: any) => {
    return (
        <Text>
            <TouchableOpacity>
                <Text>Esquerda</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Centro</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Direita</Text>
            </TouchableOpacity>
        </Text>
    )
}