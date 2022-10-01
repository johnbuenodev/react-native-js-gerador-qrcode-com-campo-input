import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {

  const [qrCodeValue, setQrCodeValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  return (
    <SafeAreaView style={{flex:1}}>
     <View style={styles.containerQrCode}>
       <QRCode
        value={qrCodeValue ? qrCodeValue : 'NA'}
        size={250}
        color="black"
        backgroundColor="white"
        logoSize={30}
        logoMargin={2}
        logoBorderRadius={15}
        logoBackgroundColor="yellow"
       />
     </View>
     <View style={styles.container}>
      <Text style={styles.text}>
       Insira um valor para gerar o QRCODE  
      </Text> 
      <TextInput 
       style={styles.textInput}
       onChangeText={(inputValue) => setInputValue(inputValue)}
       value={inputValue}
      />
      <View style={{margin:5}}>
      <Button 
       title='!Generate QRCODE!'
       onPress={() => setQrCodeValue(inputValue)}
      />
      </View>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerQrCode: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:16,
    marginTop:16
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5
  },
  textInformation: {
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
    marginBottom:16,
  },
  textInput: {
    flexDirection: 'row',
    width: '92%',
    paddingHorizontal: 8,
    height: 40,
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'black',
    textDecorationLine: 'none',
    textDecorationColor: 'none',
    fontSize: 18
  }
});