import { View, Text, ActivityIndicator, Modal } from 'react-native'
import React from 'react'
import { Colors } from '../CustomComponents/CustomColor'

export default function Loader() {
    return (
        <Modal
            animationType="fade"
            transparent={true}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} color={Colors.RED} />
            </View>
        </Modal>

    )
}