import { React, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import { 
    InformationCircleIcon, 
    IdentificationIcon, 
    ClipboardIcon, 
    StarIcon, 
    HeartIcon, 
    PaperAirplaneIcon 
} from 'react-native-heroicons/outline';
import axios from 'axios';

export default function PredictionScreen() {    
    const [sex, setSex] = useState('1');
    const [age, setAge] = useState('25');
    const [pclass, setPclass] = useState('3');
    const [sibsp, setSibsp] = useState('1');
    const [parch, setParch] = useState('1');
    const [cabin, setCabin] = useState('1');

    const ageArray = []

    for (let i = 0; i <= 100; i++) {
        ageArray.push(i.toString());
    }

    return (
        <ScrollView>
            <View className="p-4 space-y-5">
                <View>
                    <Text className="font-bold text-3xl text-center">Predicción</Text>
                    <Text className="text-lg text-gray-500 text-justify">
                        Llena este formulario para realizar una predicción. 
                    </Text>
                </View>

                <View>
                    <Formik
                        onSubmit = {values => 
                            axios.post('http://192.168.1.69:5000', {
                                sex: sex,
                                age: age,
                                pclass: pclass,
                                sibsp: sibsp,
                                parch: parch,
                                cabin: cabin,
                            }).then(response => {
                                alert(response.data[0] === 1 ? "Sobrevivió" : "No sobrevivió");
                            }).catch(err => {
                                alert(err.message);
                            })
                        }
                        >{({handleChange, handleBlur, handleSubmit, values}) => (
                            <View className="space-y-4">
                                <View className="flex-column items-center space-x-2">
                                    <View className="flex-row w-full items-center space-x-4">
                                        <InformationCircleIcon size={24} color="#00CCDD" />
                                        <Text className="font-bold text-xl">Sexo</Text>
                                    </View>
                                    <View className="w-full">
                                        <Picker
                                            selectedValue={sex}
                                            onValueChange={(itemValue, itemIndex) => setSex(itemValue)}>
                                                <Picker.Item label="Mujer" value="1" />
                                                <Picker.Item label="Hombre" value="0" />
                                        </Picker>
                                    </View>
                                </View>

                                <View className="flex-column items-center space-x-2">
                                    <View className="flex-row w-full items-center space-x-4">
                                        <IdentificationIcon size={24} color="#00CCDD" />
                                        <Text className="font-bold text-xl">Edad</Text>
                                    </View>
                                    <View className="w-full">
                                        <Picker
                                            selectedValue={age}
                                            onValueChange={(itemValue, itemIndex) => setAge(itemValue)}>
                                                {ageArray.map((num, index) => (
                                                    <Picker.Item key={num} label={num} value={num} />
                                                ))}
                                        </Picker>
                                    </View>
                                </View>

                                <View className="flex-column items-center space-x-2">
                                    <View className="flex-row w-full items-center space-x-4">
                                        <ClipboardIcon size={24} color="#00CCDD" />
                                        <Text className="font-bold text-xl">Clase</Text>
                                    </View>
                                    <View className="w-full">
                                        <Picker
                                            selectedValue={pclass}
                                            onValueChange={(itemValue, itemIndex) => setPclass(itemValue)}>
                                                <Picker.Item label="Tipo 1" value="1" />
                                                <Picker.Item label="Tipo 2" value="2" />
                                                <Picker.Item label="Tipo 3" value="3" />
                                        </Picker>
                                    </View>
                                </View>

                                <View className="flex-column items-center space-x-2">
                                    <View className="flex-row w-full items-center space-x-4">
                                        <StarIcon size={24} color="#00CCDD" />
                                        <Text className="font-bold text-xl">Conyuge / Hermanos</Text>
                                    </View>
                                    <View className="w-full">
                                        <Picker
                                            selectedValue={sibsp}
                                            onValueChange={(itemValue, itemIndex) => setSibsp(itemValue)}>
                                                <Picker.Item label="No tienen" value="0" />
                                                <Picker.Item label="Sí tienen" value="1" />
                                        </Picker>
                                    </View>
                                </View>

                                <View className="flex-column items-center space-x-2">
                                    <View className="flex-row w-full items-center space-x-4">
                                        <HeartIcon size={24} color="#00CCDD" />
                                        <Text className="font-bold text-xl">Padres / Hijos</Text>
                                    </View>
                                    <View className="w-full">
                                        <Picker
                                            selectedValue={parch}
                                            onValueChange={(itemValue, itemIndex) => setParch(itemValue)}>
                                                <Picker.Item label="No tienen" value="0" />
                                                <Picker.Item label="Sí tienen" value="1" />
                                        </Picker>
                                    </View>
                                </View> 

                                <View className="flex-column items-center space-x-2">
                                    <View className="flex-row w-full items-center space-x-4">
                                        <PaperAirplaneIcon size={24} color="#00CCDD" />
                                        <Text className="font-bold text-xl">Cabina</Text>
                                    </View>
                                    <View className="w-full">
                                        <Picker
                                            selectedValue={cabin}
                                            onValueChange={(itemValue, itemIndex) => setCabin(itemValue)}>
                                                <Picker.Item label="No tiene" value="0" />
                                                <Picker.Item label="Sí tiene" value="1" />
                                        </Picker>
                                    </View>
                                </View> 

                                <View className="bg-[#00CCDD] rounded-lg py-2">
                                    <Button 
                                        onPress={handleSubmit} 
                                        color="white"
                                        title="Submit"/>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </ScrollView>
    )
}