import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View,ImageBackground,ScrollView } from 'react-native'
import Form from './components/Form'
import Spacer from './components/Spacer'
import WeatherCard from './components/WeatherCard'
import CustomButton from './components/CustomButton'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/earth.png')} style={styles.imgBg}>
        <Text style={styles.title}> The Weather Report! </Text>
        <Spacer height={15} />
        <ScrollView>
          <Form>
          </Form>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:25,
    flex: 1,
    backgroundColor: 'rgba(190, 190, 190, 0.2)',
  },
  title:{
    color:'white',
    textAlign:'center'
  },
  imgBg:{
    resizeMode: "contain",
    opacity: 10,
    justifyContent: "center",
    width:'100%',
    height:'100%',
    justifyContent:'space-around'
  },
});
