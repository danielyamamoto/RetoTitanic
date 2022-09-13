import React from 'react'
import { View, Image, Text } from 'react-native'

export default function ProfileTeam({imageUrl, name, matricula}) {    
    return (
        <View className="flex-row items-center mb-4">
            <Image 
                source={imageUrl}
                className="h-24 w-24 p-4 rounded-full" />
            <View className="flex-column pl-4">
                <Text className="text-lg font-bold">{name}</Text>
                <Text className="text-gray-400">{matricula}</Text>
            </View>
        </View>
    )
}