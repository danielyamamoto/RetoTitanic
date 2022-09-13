import { React, useEffect, useState } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, View } from 'react-native'
import { HomeIcon, BeakerIcon, DocumentReportIcon, ChartSquareBarIcon, ChartPieIcon } from 'react-native-heroicons/outline';
import { changeValue, indexValue } from '../features/generalVariables';
import Swiper from "react-native-screens-swiper";
import Alg1Screen from './Alg1Screen';
import Alg2Screen from './Alg2Screen';
import HomeScreen from './HomeScreen';
import SelectionScreen from './SelectionScreen';
import PredictionScreen from './PredictionScreen';

export default function HomeSwiper() {
    //const dispatch = useDispatch();
    //const isFocused = useIsFocused();
    //const navigation = useNavigation();
    let index = useSelector(indexValue);
    //console.log(index)

    //useEffect (() => {
        //index = useSelector(indexValue);    
    //}, []);

    const data = [
        {
            tabLabel: 'Alg1',
            component: Alg1Screen,
        },
        {
            tabLabel: 'Alg2',
            component: Alg2Screen,
        },
        {
            tabLabel: 'Home',
            component: HomeScreen, 
        },
        {
            tabLabel: 'Selec',
            component: SelectionScreen, 
        },
        {
            tabLabel: 'Pred',
            component: PredictionScreen, 
        }
    ];

    const styles = {
        staticPillsContainer: {
            height: 35,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        },
            
        pillLabel: {
            color: 'gray',
        },
        
        activeLabel: {
            color: '#00CCDD',
        },
        
        borderActive: {
            borderColor: '#00CCDD'
        },
    };
    
    return (
        <SafeAreaView className="w-full h-full bg-white">
            <Swiper 
                data={data}
                style={styles}
                isStaticPills={true}
                initialScrollIndex={2}
            >
                <View className="w-full h-10 flex-row items-center justify-around -mb-2">
                    <ChartSquareBarIcon color={index === 0 ? "#00CCDD" : "gray"} />
                    <ChartPieIcon color={index === 1 ? "#00CCDD" : "gray"} />
                    <HomeIcon color={index === 2 ? "#00CCDD" : "gray"} />
                    <DocumentReportIcon color={index == 3 ? "#00CCDD" : "gray"} />
                    <BeakerIcon color={index === 4 ? "#00CCDD" : "gray"} />
                </View>
            </Swiper>
        </SafeAreaView>
    )
}
