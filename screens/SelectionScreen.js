import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'

export default function SelectionScreen() {
    return (
        <ScrollView>
            <View className="p-4 space-y-5">
                <View>
                    <Text className="font-bold text-3xl text-center mb-2">Perceptrón</Text>
                    <Text className="text-lg text-gray-500 text-center">¿Por qué?</Text>
                </View>
                <View>
                    <Text className="font-bold text-xl mb-2">Justificación</Text>
                    <Text className="text-lg text-gray-500 text-justify ">
                        Para la solución final, utilizamos la red neuronal dado que ambos 
                        modelos de aprendizaje utilizan el conjunto de varios árboles o 
                        neuronas y se llegó a obtener una precisión similar.
                    </Text>
                    <Text className="text-lg text-gray-500 text-justify">
                        Sin embargo, se prefiere utilizar random forests por la facilidad 
                        para entender el modelo, así como también los costos menores de 
                        usarlo, pero por un error de compatibilidad de versiones con Python, 
                        utilizamos el modelo de red neuronal en la aplicación.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}