import React from 'react';
import { SafeAreaView, View } from 'react-native'
import Swiper from "react-native-screens-swiper";
import Alg1Screen from './Alg1Screen';
import Alg2Screen from './Alg2Screen';
import HomeScreen from './HomeScreen';
import SelectionScreen from './SelectionScreen';
import PredictionScreen from './PredictionScreen';

export default function HomeSwiper() {
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
        /*
        container: {
            flex: 1,
            height: '100%',
            backgroundColor: '#FFFF',
            alignItems: 'center',
            justifyContent: 'center',
        },
        */    
    
        // [View] Static pills container
        staticPillsContainer: {
            height: 35,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        },
            
        // [Text] Button's text
        pillLabel: {
            color: 'gray',
        },
        
        // [Text] Active button's text
        activeLabel: {
            color: '#00CCDD',
        },
        
        // [View] Border of active pill (:warning: opacity will override animation's opacity)
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
                scrollableContainer={false}
                >
            </Swiper>
        </SafeAreaView>
    )
}
