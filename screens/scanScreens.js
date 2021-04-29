import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            scannedData: '',
            buttonState: 'normal'
        }
    }
    getCameraPermissions = async()=>{
        const {status} = await Permissions.askAsync (Permissions.CAMERA);
        this.setState({
            hasCameraPermissions: status==='granted',
        });
    }

    handleBarCodeScanner= async({type, data})=>{
        this.setState({
            scanned:true,
            scannedData:data,
            buttonState: 'normal'
        });
    }

    render(){
        return(
            <View>
                <TouchableOpacity
                    onPress={this.getCameraPermissions}
                    title= "Bar Code Scanner"
                >
        
                </TouchableOpacity>
            </View>
        )
    }

    
}
