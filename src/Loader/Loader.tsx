import { View, Text, ActivityIndicator, Modal,Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '../CustomComponents/CustomColor'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function Loader() {
    const {height, width}=Dimensions.get('window')
    return (
        // <Modal
        //     animationType="fade"
        //     transparent={true}
        // >
        //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //         <ActivityIndicator size={'large'} color={Colors.RED} />
        //     </View>
        // </Modal>
        <View style={{ flex: 1,alignSelf:'center' }}>
            <SkeletonPlaceholder>
                {/* <SkeletonPlaceholder.Item  > */}
                    <SkeletonPlaceholder.Item width={width} height={height} />
                {/* </SkeletonPlaceholder.Item> */}
            </SkeletonPlaceholder >
        </View >

    )
}