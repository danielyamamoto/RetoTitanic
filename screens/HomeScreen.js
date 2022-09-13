import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import ProfileTeam from '../components/Profile'

export default function HomeScreen() {
    const team = [
        {uri: require("../assets/Juan.jpg"), name: "Juan Díaz", matricula: "A01653546"},
        {uri: require("../assets/Hector.jpg"), name: "Héctor Noyola", matricula: "A01023808"},
        {uri: require("../assets/Daniel.jpg"), name: "Daniel Yamamoto", matricula: "A01658318"},
    ]

    return (
        <ScrollView>
            <View className="p-4 space-y-5">
                <View className="">
                    <Text className="font-bold text-3xl text-center mb-2">Reto Titanic</Text>
                    <Text className="text-lg text-gray-500">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of 
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem Ipsum.
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