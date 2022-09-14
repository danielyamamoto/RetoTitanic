import React from 'react'
import { TextInput } from 'react-native-paper';

export default function TextInput({label, textValue, value}) {
    return (
        <TextInput
            label={label}
            placeholder=""
            selectionColor='#00CCDD'
            underlineColor='#00CCDD'
            activeUnderlineColor='#00CCDD'
            onChangeText = {handleChange({textValue})}
            onBlur = {handleBlur({textValue})}
            value = {value} />
    )
}