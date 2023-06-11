import React, { useEffect, useRef, useState } from 'react'
import styles from './countdown.style'
import { Text, View } from 'react-native'

const minutesToMiilis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

const Countdown = (props) => {
    const { focusSubject, minutes=0.1, isPaused, onProgress, onEnd, onTimerEnd } = props
    const [millis, setMillis] = useState(null)
    const interval = useRef(null)

    const reset = ()=> setMillis(minutesToMiilis(minutes))

    const countDown = ()=> {
        setMillis((time)=> {
            if (time === 0) {
                clearInterval(interval.current)
                onEnd(reset)
                onTimerEnd(focusSubject)
                return time
            }

            const timeLeft = time - 1000
            return timeLeft
        })
    }

    useEffect(()=> {
        setMillis(minutesToMiilis(minutes))
    }, [minutes])

    useEffect(()=> {
        onProgress(millis / minutesToMiilis(minutes))
    }, [millis])

    useEffect(()=> {
        if (isPaused) {
            if (interval.current) clearInterval(interval.current)
            return;
        }

        interval.current = setInterval(countDown, 1000);

        return ()=> clearInterval(interval.current)
    }, [isPaused])

    const minute = Math.floor(millis / 1000 / 60) % 60
    const seconds = Math.floor(millis / 1000) % 60

    return (
        <>
            <View style={styles.container}>
                <View style={styles.countdownWrapper}>
                    <Text style={styles.countdownText}>
                        {`${formatTime(minute)}:${formatTime(seconds)}`}
                    </Text>
                </View>

                <View style={styles.taskWrapper}>
                    <Text style={styles.taskTitle}>
                        Focusing on:
                    </Text>
                    <Text style={styles.task}>
                        {focusSubject}
                    </Text>
                </View>
            </View>

            
        </>
    )
}

export default Countdown