import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'

export default function Alg2Screen() {
    return (
        <ScrollView>
            <View className="p-4 space-y-5">
                <View>
                    <Text className="font-bold text-3xl text-center mb-2">Algoritmo 2</Text>
                    <Text className="text-lg text-gray-500 text-center">Perceptrón</Text>
                </View>
                <View>
                    <Image
                        source={require('../assets/alg2/model.png')}
                        className="h-48 w-full rounded-lg -mt-4" />
                    <Text className="font-bold text-xl mb-2">Justificación</Text>
                    <Text className="text-lg text-gray-500 text-justify mb-2">
                        Las redes neuronales son un método que permiten el procesamiento 
                        de datos de una manera inspirada en la estructura del cerebro humano, 
                        pues utiliza la conexión entre diferentes neuronas artificiales 
                        conectadas entre sí. Esto crea un sistema que se adapta a los errores 
                        al aprender de estos y mejorar de manera constante.
                                                
                    </Text>
                    <Text className="text-lg text-gray-500 text-justify">
                        Es por ello que decidimos elegir el modelo de Perceptron, ya que nos 
                        brinda la flexibilidad de tener una red neuronal sencilla, pero 
                        eficiente que va adaptándose a los errores.
                    </Text>
                </View>
                <View>
                    <Text className="font-bold text-xl mb-2">Resultados</Text>
                    <View className="flex-column space-y-6">
                        <View className="flex-column space-y-2">
                            <Text className="text-lg text-gray-500">Precisión obtenida</Text>
                            <View className="flex items-center">
                                <Text className="text-lg">0.8888888888888888</Text>
                            </View>
                        </View>

                        <View className="flex-column space-y-2">
                            <Text className="text-lg text-gray-500">Matriz de confusión</Text>
                            <View className="flex items-center">
                                <Image 
                                    source={require('../assets/alg2/confusion-matrix.jpeg')}
                                    className="h-64 w-12/12" />
                            </View>
                        </View>

                        <View className="flex-column space-y-2">
                            <Text className="text-lg text-gray-500">ROC</Text>
                            <View className="flex items-center">
                                <Image 
                                    source={require('../assets/alg2/ROC.jpeg')}
                                    className="h-56 w-full" />
                            </View>
                        </View>

                        <View className="flex-column space-y-2">
                            <Text className="text-lg text-gray-500">AUC</Text>
                            <View className="flex items-center">
                                <Text className="text-lg">0.84</Text>
                            </View>
                        </View>

                        <View className="flex-column space-y-2">
                            <Text className="text-lg text-gray-500">Puntaje obtenido en Kaggle</Text>
                            <View className="flex items-center">
                                <Image 
                                    source={require('../assets/alg2/kaggle.jpeg')}
                                    className="h-24 w-full" />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
