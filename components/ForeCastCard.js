import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View,ImageBackground,ScrollView } from 'react-native';
import Spacer from './Spacer'
import CustomButton from './CustomButton'
import moment from "moment"

function ForeCastCard(props) {

  const[cityOfForeCast,setCityOfForeCast] = useState('')
  const[data3HoursToday,setData3HoursToday] = useState('')
  const[data3HoursTodayTemp,setData3HoursTodayTemp] = useState('')
  const[data3HoursTodayWeather,setData3HoursTodayWeather] = useState('')

  const[data6HoursToday,setData6HoursToday] = useState('')
  const[data6HoursTodayTemp,setData6HoursTodayTemp] = useState('')
  const[data6HoursTodayWeather,setData6HoursTodayWeather] = useState('')

  const[data9HoursToday,setData9HoursToday] = useState('')
  const[data9HoursTodayTemp,setData9HoursTodayTemp] = useState('')
  const[data9HoursTodayWeather,setData9HoursTodayWeather] = useState('')


  const[data12HoursToday,setData12HoursToday] = useState('')
  const[data12HoursTodayTemp,setData12HoursTodayTemp] = useState('')
  const[data12HoursTodayWeather,setData12HoursTodayWeather] = useState('')


  const getTodayForeCast = () => {

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.locationForeCast}&appid=25068c72bbe11cb7c9b0600f15ebbd06`)
    .then(response => response.json())
    .then(data =>{
      setCityOfForeCast(data.city.name)
      setData3HoursToday(data.list[1].dt_txt)
      setData3HoursTodayTemp(data.list[1].main.temp)
      setData3HoursTodayWeather(data.list[1].weather[0].main)


      setData6HoursToday(data.list[2].dt_txt)
      setData6HoursToday(data.list[2].dt_txt)
      setData6HoursTodayTemp(data.list[2].main.temp)
      setData6HoursTodayWeather(data.list[2].weather[0].main)

      setData9HoursToday(data.list[3].dt_txt)
      setData9HoursToday(data.list[3].dt_txt)
      setData9HoursTodayTemp(data.list[3].main.temp)
      setData9HoursTodayWeather(data.list[3].weather[0].main)

      setData12HoursToday(data.list[4].dt_txt)
      setData12HoursToday(data.list[4].dt_txt)
      setData12HoursTodayTemp(data.list[4].main.temp)
      setData12HoursTodayWeather(data.list[4].weather[0].main)

    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }



  if (data3HoursToday === undefined || data3HoursToday === '' || cityOfForeCast !== props.locationForeCast) {
    return(
      <View>
        <CustomButton title='Forecast next 12 hours' onPress={getTodayForeCast}> Forcast </CustomButton>
      </View>
    )
  }else {
    return(
      <View style={styles.containerData}>
        <CustomButton title='Forecast next 12 hours' onPress={getTodayForeCast}> Forecast </CustomButton>
        <Spacer height={4} />
        <Text style={{color:'white',fontSize:13}}>{ moment(data3HoursToday).format('hh:mm')}|  {Math.round((data3HoursTodayTemp - 273.5)*1000)/1000} Celsius |  {data3HoursTodayWeather}   </Text>
        <Spacer height={4} />
        <Text style={{color:'white',fontSize:13}}>{moment(data6HoursToday).format('hh:mm')}|  {Math.round((data6HoursTodayTemp - 273.5)*1000)/1000} Celsius |  {data6HoursTodayWeather}   </Text>
        <Spacer height={4} />
        <Text style={{color:'white',fontSize:13}}>{moment(data9HoursToday).format('hh:mm')}|  {Math.round((data9HoursTodayTemp - 273.5)*1000)/1000} Celsius |  {data9HoursTodayWeather}   </Text>
        <Spacer height={4} />
        <Text style={{color:'white',fontSize:13}}>{moment(data12HoursToday).format('hh:mm')}|  {Math.round((data12HoursTodayTemp - 273.5)*1000)/1000} Celsius |  {data12HoursTodayWeather}   </Text>
      </View>
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

export default ForeCastCard
