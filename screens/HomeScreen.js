import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ProfileTeam from '../components/Profile'

export default function HomeScreen() {
    const team = [
        {uri: require("../assets/main/Juan.jpg"), name: "Juan Díaz", matricula: "A01653546"},
        {uri: require("../assets/main/Hector.jpg"), name: "Héctor Noyola", matricula: "A01023808"},
        {uri: require("../assets/main/Daniel.jpg"), name: "Daniel Yamamoto", matricula: "A01658318"},
    ]

    return (
        <ScrollView>
            <View className="p-4 space-y-5">
                <View>
                    <Text className="font-bold text-3xl text-center">Reto Titanic</Text>
                    <Image
                        source={require('../assets/main/titanic.jpg')}
                        className="h-48 w-full rounded-lg my-4" />
                    <Text className="text-lg text-gray-500 text-justify">
                        Este proyecto tiene como finalidad usar dos distintos algoritmos de Machine Learning, 
                        los cuales analizarán datos en formato CSV para poder realizar predicciones lo más 
                        acertadas posibles. En este caso, se tomarán datos de pasajeros del Titanic, y el modelo 
                        deberá predecir si un pasajero en cuestión sobrevivió o murió basado en sus datos de entrenamiento.
                    </Text>
                </View>
                <View className="flex-column">
                    <Text className="font-bold text-3xl text-center mb-2">Equipo</Text>
                    {
                        team.map((member, index) => (
                            <ProfileTeam 
                                key={index}
                                imageUrl={member.uri}
                                name={member.name}
                                matricula={member.matricula} 
                            />
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    )
}