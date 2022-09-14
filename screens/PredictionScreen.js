import { React, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import { InformationCircleIcon, IdentificationIcon, ClipboardIcon, StarIcon, HeartIcon, PaperAirplaneIcon } from 'react-native-heroicons/outline';
import axios from 'axios';

export default function PredictionScreen() {    
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [pclass, setPclass] = useState('');
    const [sibsp, setSibsp] = useState('');
    const [parch, setParch] = useState('');
    const [cabin, setCabin] = useState('');

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
                        initialValues={{
                            sex: '', 
                            age:'', 
                            pclass:'', 
                            sibsp:'',
                            parch:'',
                            cabin:'',
                        }}
                        onSubmit = {values => 
                            axios.post('http://192.168.1.69:5000', {
                                sex: sex,
                                age: age,
                                pclass: pclass,
                                sibsp: sibsp,
                                parch: parch,
                                cabin: cabin,
                            }).then(response => {
                                //setPrediction(response.data);
                                alert(response.data[0]);
                            }).catch(err => {
                                console.log(err.message)
                                alert(err.message);
                            })
                        }
                        >{({handleChange, handleBlur, handleSubmit, values}) => (
                            <View className="space-y-4">
                                <View className="flex-row items-center space-x-2">
                                    <InformationCircleIcon size={24} color="#00CCDD" />
                                    <View className="flex-1">
                                        {/* 
                                        <TextInput
                                            label="Sexo"
                                            placeholder=""
                                            selectionColor='#00CCDD'
                                            underlineColor='#00CCDD'
                                            activeUnderlineColor='#00CCDD'
                                            onChangeText = {handleChange('sex')}
                                            //onBlur = {handleBlur('sex')}
                                            value = {values.sex} />
                                        */}
                                        <Picker
                                            selectedValue={sex}
                                            onValueChange={(itemValue, itemIndex) => setSex(itemValue)}>
                                                <Picker.Item label="Mujer" value="1" />
                                                <Picker.Item label="Hombre" value="0" />
                                        </Picker>
                                    </View>
                                </View>

                                <View className="flex-row items-center space-x-2">
                                    <IdentificationIcon size={24} color="#00CCDD" />
                                    <View className="flex-1">
                                        {/* 
                                        <TextInput
                                            label="Edad"
                                            placeholder=""
                                            selectionColor='#00CCDD'
                                            underlineColor='#00CCDD'
                                            activeUnderlineColor='#00CCDD'
                                            onChangeText = {handleChange('age')}
                                            //onBlur = {handleBlur('age')}
                                            value = {values.age} />
                                        */}
                                        <Picker
                                            selectedValue={age}
                                            onValueChange={(itemValue, itemIndex) => setAge(itemValue)}>
                                                {ageArray.map((num, index) => (
                                                    <Picker.Item key={num} label={num} value={num} />
                                                ))}
                                        </Picker>
                                    </View>
                                </View>

                                <View className="flex-row items-center space-x-2">
                                    <ClipboardIcon size={24} color="#00CCDD" />
                                    <View className="flex-1">
                                        {/* 
                                        <TextInput
                                            label="Clase"
                                            placeholder=""
                                            selectionColor='#00CCDD'
                                            underlineColor='#00CCDD'
                                            activeUnderlineColor='#00CCDD'
                                            onChangeText = {handleChange('pclass')}
                                            //onBlur = {handleBlur('pclass')}
                                            value = {values.pclass} />
                                        */}
                                        <Picker
                                            selectedValue={pclass}
                                            onValueChange={(itemValue, itemIndex) => setPclass(itemValue)}>
                                                <Picker.Item label="Tipo 1" value="1" />
                                                <Picker.Item label="Tipo 2" value="2" />
                                                <Picker.Item label="Tipo 3" value="2" />
                                        </Picker>
                                    </View>
                                </View>

                                <View className="flex-row items-center space-x-2">
                                    <StarIcon size={24} color="#00CCDD" />
                                    <View className="flex-1">
                                        {/* 
                                        <TextInput
                                            label="Conyuge/Hermanos"
                                            placeholder=""
                                            selectionColor='#00CCDD'
                                            underlineColor='#00CCDD'
                                            activeUnderlineColor='#00CCDD'
                                            onChangeText = {handleChange('sibsp')}
                                            //onBlur = {handleBlur('sibsp')}
                                            value = {values.sibsp} />
                                        */}
                                        <Picker
                                            selectedValue={sibsp}
                                            onValueChange={(itemValue, itemIndex) => setSibsp(itemValue)}>
                                                <Picker.Item label="No tienen" value="0" />
                                                <Picker.Item label="Sí tienen" value="1" />
                                        </Picker>
                                    </View>
                                </View>

                                <View className="flex-row items-center space-x-2">
                                    <HeartIcon size={24} color="#00CCDD" />
                                    <View className="flex-1">
                                        {/* 
                                        <TextInput
                                            label="Padres/Hijos"
                                            placeholder=""
                                            selectionColor='#00CCDD'
                                            underlineColor='#00CCDD'
                                            activeUnderlineColor='#00CCDD'
                                            onChangeText = {handleChange('parch')}
                                            //onBlur = {handleBlur('parch')}
                                            value = {values.parch} />
                                        */}
                                        <Picker
                                            selectedValue={parch}
                                            onValueChange={(itemValue, itemIndex) => setParch(itemValue)}>
                                                <Picker.Item label="No tienen" value="0" />
                                                <Picker.Item label="Sí tienen" value="1" />
                                        </Picker>
                                    </View>
                                </View> 

                                <View className="flex-row items-center space-x-2">
                                    <PaperAirplaneIcon size={24} color="#00CCDD" />
                                    <View className="flex-1">
                                        {/* 
                                        <TextInput
                                            label="Cabina"
                                            placeholder=""
                                            selectionColor='#00CCDD'
                                            underlineColor='#00CCDD'
                                            activeUnderlineColor='#00CCDD'
                                            onChangeText = {handleChange('cabin')}
                                            //onBlur = {handleBlur('cabin')}
                                            value = {values.cabin} />
                                        */}
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