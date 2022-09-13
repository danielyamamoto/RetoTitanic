import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'

export default function Alg2Screen() {
    return (
        <ScrollView>
            <View className="p-4 space-y-5">
                <View>
                    <Text className="font-bold text-3xl text-center mb-2">Algoritmo 2</Text>
                    <Text className="text-lg text-gray-500 text-center">Perceptron</Text>
                </View>
                <View>
                    <Text className="font-bold text-xl mb-2">Justificación</Text>
                    <Text className="text-lg text-gray-500 text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of 
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </View>
                <View>
                    <Text className="font-bold text-xl mb-2">Resultados</Text>
                    <View className="flex-column space-y-6">
                        <View className="flex-column space-y-2">
                            <Text className="text-lg text-gray-500">Precisión obtenida</Text>
                            <View className="flex items-center">
                                <Image 
                                    source={require('../assets/Juan.jpg')}
                                    className="h-24 w-full" />
                            </View>
                        </View>

                        <View className="flex-column space-y-2">
                            <Text className="text-lg text-gray-500">Matriz de confusión</Text>
                            <View className="flex items-center">
                                <Image 
                                    source={require('../assets/alg1/confusion-matrix.jpeg')}
                                    className="h-64 w-12/12" />
                            </View>
                        </View>

                        <View className="flex-column space-y-2">
                            <Text className="text-lg text-gray-500">ROC</Text>
                            <View className="flex items-center">
                                <Image 
                                    source={require('../assets/Juan.jpg')}
                                    className="h-48 w-full" />
                            </View>
                        </View>

                        <View className="flex-column space-y-2">
                            <Text className="text-lg text-gray-500">AUC</Text>
                            <View className="flex items-center">
                                <Image 
                                    source={require('../assets/Juan.jpg')}
                                    className="h-48 w-full" />
                            </View>
                        </View>

                        <View className="flex-column space-y-2">
                            <Text className="text-lg text-gray-500">Puntaje obtenido en Kaggle</Text>
                            <View className="flex items-center">
                                <Image 
                                    source={require('../assets/Juan.jpg')}
                                    className="h-24 w-full" />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}