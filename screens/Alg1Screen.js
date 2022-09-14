import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'

export default function Alg1Screen() {
    return (
        <ScrollView>
            <View className="p-4 space-y-5">
                <View>
                    <Text className="font-bold text-3xl text-center mb-2">Algoritmo 1</Text>
                    <Text className="text-lg text-gray-500 text-center">Random Forest</Text>
                </View>
                <View>
                    <Image
                        source={require('../assets/alg1/model.png')}
                        className="h-48 w-full rounded-lg mb-2" />
                    <Text className="font-bold text-xl mb-2">Justificación</Text>
                    <Text className="text-lg text-gray-500 text-justify">
                        Los árboles de decisión son un modelo que clasifica datos de lo 
                        general a lo particular donde toma un N número de árboles de decisión 
                        y los entrena con diferentes conjuntos de datos aleatorios del conjunto 
                        de datos original. 
                        
                        El valor final que se utiliza es aquel que se considera como valor 
                        promedio de todos los árboles de decisión, es por ello que usar varios 
                        árboles nos permite crear un modelo que sea mucho más acertado que si 
                        usaramos uno solo.
                    </Text>
                    <Text className="text-lg text-gray-500 text-justify">
                        Es por ello que decidimos elegir el modelo de Random Forest, ya que nos 
                        permite tener un modelo balanceado y preciso al momento de tomar decisiones.
                    </Text>
                </View>
                <View>
                    <Text className="font-bold text-xl mb-2">Resultados</Text>
                    <View className="flex-column space-y-6">
                        <View className="flex-column space-y-2">
                            <Text className="text-lg text-gray-500">Precisión obtenida</Text>
                            <View className="flex items-center">
                                <Text className="text-lg">0.9135802469135802</Text>
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
                                    source={require('../assets/alg1/ROC.jpeg')}
                                    className="h-56 w-full" />
                            </View>
                        </View>

                        <View className="flex-column space-y-2">
                            <Text className="text-lg text-gray-500">AUC</Text>
                            <View className="flex items-center">
                                <Text className="text-lg">0.89</Text>
                            </View>
                        </View>

                        <View className="flex-column space-y-2">
                            <Text className="text-lg text-gray-500">Puntaje obtenido en Kaggle</Text>
                            <View className="flex items-center">
                                <Image 
                                    source={require('../assets/alg1/kaggle.jpeg')}
                                    className="h-24 w-full" />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}