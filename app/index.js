import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, Vibration, View } from 'react-native'
import { COLORS, SIZES } from '../constants'
import { Stack } from 'expo-router'
import { Controls, Countdown, FocusHistory, Welcome } from '../components'
import ProgressBar from 'react-native-progress/Bar'
import { useKeepAwake } from 'expo-keep-awake'

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
    4 * ONE_SECOND_IN_MS,
    5 * ONE_SECOND_IN_MS
]

const Home = () => {
    useKeepAwake()
    const [currentSubject, setCurrentSubject] = useState(null)
    const [history, setHistory] = useState([])
    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(1)
    const [minutes, setMinutes] = useState(0.1)

    const onEnd = (reset)=> {
        Vibration.vibrate(PATTERN)
        setIsStarted(false)
        setProgress(1)
        reset()
    }

    return (
        <SafeAreaView style={{ flex:1, backgroundColor:COLORS.secondary }}>
            <Stack.Screen 
                options={{ 
                    headerStyle: {
                        backgroundColor: COLORS.primary
                    },
                    headerShadowVisible: false,
                    headerTitle: 'Focus App',
                    headerTitleStyle: {
                        color: COLORS.white
                    }
                }}
            />
            
            {
                !currentSubject ? (
                    <>
                        <Welcome setCurrentSubject={setCurrentSubject} />
                        <FocusHistory history={history} />
                    </>
                ) : (
                    <View style={{ flex: 1, padding: SIZES.medium }}>
                        <Countdown
                            focusSubject={currentSubject}
                            onTimerEnd={(subject)=>{
                                setHistory([...history, subject])
                            }}
                            minutes={minutes}
                            isPaused={!isStarted}
                            onProgress={setProgress}
                            onEnd={onEnd}
                        />

                        <ProgressBar
                            progress={progress} 
                            height={SIZES.small} 
                            width={null}
                            borderRadius={0}
                            unfilledColor={COLORS.primary}
                            color={COLORS.tertiary}
                            borderWidth={0}
                            animated={true}
                        />

                        <Controls
                            setMinutes={setMinutes} 
                            isStarted={isStarted} 
                            setIsStarted={setIsStarted} 
                            clearSubject={()=> setCurrentSubject(null)}
                        />

                        {/* 
                            <Time
                                focusSubject={currentSubject}
                                onTimerEnd={()=>{}}
                                clearSubject={()=>{}}
                            />
                        */}
                    </View>
                )
                }
        </SafeAreaView>
    )
}

export default Home