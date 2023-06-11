import { React, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { SIZES } from '../../../constants'
import RoundButton from '../../common/roundButton/RoundButton'
import styles from './welcome.style'

const Welcome = (props) => {
    const [subject, setSubject] = useState(null)
    const { setCurrentSubject } = props
    
    return (
        <View style={{ padding: SIZES.medium }}>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        value={subject}
                        onChangeText={setSubject}
                        style={styles.searchInput} 
                        placeholder='What would you like to focus on?'
                    />
                </View>
                <RoundButton title="+" size={50} onPress={()=> setCurrentSubject(subject)} />
            </View>
        </View>
    )
}

export default Welcome