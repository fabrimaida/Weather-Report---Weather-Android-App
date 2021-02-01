import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet, Text, View,ImageBackground,TextInput } from 'react-native'

import CustomButton from './CustomButton'
import Spacer from './Spacer'
import WeatherCard from './WeatherCard'



function Form(props) {

  const key = '25068c72bbe11cb7c9b0600f15ebbd06'
  const [location,setLocation] = useState('')
  const [locationLocal,setLocationLocal] = useState('');
  const [tempCurrent, setTempCurrent] = useState(undefined)
  const [currentWeather,setCurrentWeather] = useState('')
  const [currentWeatherSky,setCurrentWeatherSky] = useState('')
  const [tempMax,setMax] = useState(undefined)
  const [tempMin,setMin] = useState(undefined)
  const [humidity,setHumidity] = useState(undefined)
  const [windSpeed,setWindSpeed] = useState(undefined)


  const searchData = () =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=25068c72bbe11cb7c9b0600f15ebbd06`)
    .then(response => response.json())
    .then(data => {
      setLocationLocal(data.name)
      setTempCurrent(data.main.temp)
      setCurrentWeather(data.weather[0].main)
      setCurrentWeatherSky(data.weather[0].description)
      setMax(data.main.temp_max)
      setMin(data.main.temp_min)
      setHumidity(data.main.humidity)
      setWindSpeed(data.wind.speed)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return(
    <View styles={styles.formView}>
      <TextInput
        style={{ height: 40, borderColor: 'white', borderWidth: 1, color:'white',textAlign:'center'}}
        placeholder={'Write here the name of the location'}
        placeholderTextColor={'white'}
        selectionColor={'white'}
        underlineColorAndroid={'white'}
        keyboardAppearance={'light'}
        onChangeText={(text) => setLocation(text)}
      />
      <Spacer height={5} />
      <CustomButton onPress={searchData} title='Go!'>Go!</CustomButton>
      <Spacer height={30} />
      <View style={{padding:10}}>
        <WeatherCard
          location={locationLocal}
          tempC={tempCurrent}
          currWeather = {currentWeather}
          currWeatherSky= {currentWeatherSky}
          tempMax= {tempMax}
          tempMin= {tempMin}
          humidity= {humidity}
          windSpeed= {windSpeed}

        >
        </WeatherCard>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formView:{
    color:'white'
  },
  containerData: {
    backgroundColor:'rgba(190, 190, 190, 0.7)',
    padding: 10,
    elevation:1,
    flexDirection:'column',
    justifyContent:'space-around',
  }
});

export default Form;
