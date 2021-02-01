import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet, Text, View,ImageBackground,ScrollView } from 'react-native'
import Spacer from './Spacer'
import CustomButton from './CustomButton'
import ForeCastCard from './ForeCastCard'
import NextDays from './NextDays'
import moment from 'moment'


function WeatherCard(props) {

  var today = new Date();
  var date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();

  if (props.location === undefined || props.location === '') {
    return(
      <View style={styles.containerData}>
        <Text style= {{fontSize:13,color:'white'}}>
          'No city selected or invalid name'
        </Text>
      </View>
    )
  }else {
    return(
      <ScrollView>
      <View style={styles.containerData}>
        <Text style={{color:'yellow',textAlign:'center',fontSize:18}}>Location selected: {props.location}  </Text>
        <Spacer height={10} />
        <Text style={{color:'white',fontSize:17,textAlign:'center',color:'yellow'}}> Today is { moment(today).format('dddd D MMMM, HH:mm')} </Text>
        <Spacer height={10} />
        <Text style={{color:'white',fontSize:17}}>Current temperature:  {Math.round((props.tempC - 273.5)*1000)/1000}  Celsius</Text>
        <Spacer height={10} />
        <Text style={{color:'white',fontSize:17}}>Weather Now: {props.currWeather}  </Text>
        <Spacer height={5} />
        <Text style={{color:'white',fontSize:13}}>Max today:  {Math.round((props.tempMax - 273.5)*1000)/1000}  Celsius</Text>
        <Text style={{color:'white',fontSize:13}}>Min today:  {Math.round((props.tempMin - 273.5)*1000)/1000}  Celsius</Text>
        <Spacer height={10} />
        <Text style={{color:'white',fontSize:13}}>Humidity : {props.humidity}%</Text>
        <Spacer height={10} />
        <Text style={{color:'white',fontSize:13}}>Wind Speed : {props.windSpeed} m/s</Text>
      </View>
      <Spacer height={10}/>
      <ForeCastCard locationForeCast={props.location} />
      <Spacer height={10}/>
      <NextDays locationForeCast={props.location} />
      </ScrollView>
    )

  }
}

const styles = StyleSheet.create({
  containerData: {
    backgroundColor:'rgba(190, 190, 190, 0.7)',
    padding: 10,
    elevation:1,
    flexDirection:'column',
    justifyContent:'space-around',
  }
})

export default WeatherCard;
