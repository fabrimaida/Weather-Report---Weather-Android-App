import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet, Text, View,ImageBackground,ScrollView } from 'react-native'
import Spacer from './Spacer'
import CustomButton from './CustomButton'
import moment from 'moment'


function ForeCastCard(props) {

  const[cityOfForeCast,setCityOfForeCast] = useState('')

  const[tomorrowNightdate,setTomorrowNightdate] = useState('')
  const[tomorrowNightTemp,setTomorrowNightTemp] = useState('')
  const[tomorrowNightWeather,setTomorrowNightWeather] = useState('')

  const[tomorrow0date,setTomorrow0date] = useState('')
  const[tomorrow0Temp,setTomorrow0Temp] = useState('')
  const[tomorrow0Weather,setTomorrow0Weather] = useState('')

  const[tomorrow1date,setTomorrow1date] = useState('')
  const[tomorrow1Temp,setTomorrow1Temp] = useState('')
  const[tomorrow1Weather,setTomorrow1Weather] = useState('')

  const[tomorrow2date,setTomorrow2date] = useState('')
  const[tomorrow2Temp,setTomorrow2Temp] = useState('')
  const[tomorrow2Weather,setTomorrow2Weather] = useState('')

  const[tomorrow3date,setTomorrow3date] = useState('')
  const[tomorrow3Temp,setTomorrow3Temp] = useState('')
  const[tomorrow3Weather,setTomorrow3Weather] = useState('')

  const[tomorrow4date,setTomorrow4date] = useState('')
  const[tomorrow4Temp,setTomorrow4Temp] = useState('')
  const[tomorrow4Weather,setTomorrow4Weather] = useState('')

  const[tomorrow5date,setTomorrow5date] = useState('')
  const[tomorrow5Temp,setTomorrow5Temp] = useState('')
  const[tomorrow5Weather,setTomorrow5Weather] = useState('')

  const[tomorrow6date,setTomorrow6date] = useState('')
  const[tomorrow6Temp,setTomorrow6Temp] = useState('')
  const[tomorrow6Weather,setTomorrow6Weather] = useState('')

  const[secondDayNightdate,setSecondDayNightdate] = useState('')
  const[secondDayNightTemp,setSecondDayNightTemp] = useState('')
  const[secondDayNightWeather,setSecondDayNightWeather] = useState('')

  const[secondDay0date,setSecondDay0date] = useState('')
  const[secondDay0Temp,setSecondDay0Temp] = useState('')
  const[secondDay0Weather,setSecondDay0Weather] = useState('')

  const[secondDay1date,setSecondDay1date] = useState('')
  const[secondDay1Temp,setSecondDay1Temp] = useState('')
  const[secondDay1Weather,setSecondDay1Weather] = useState('')

  const[secondDay2date,setSecondDay2date] = useState('')
  const[secondDay2Temp,setSecondDay2Temp] = useState('')
  const[secondDay2Weather,setSecondDay2Weather] = useState('')

  const[secondDay3date,setSecondDay3date] = useState('')
  const[secondDay3Temp,setSecondDay3Temp] = useState('')
  const[secondDay3Weather,setSecondDay3Weather] = useState('')

  const[secondDay4date,setSecondDay4date] = useState('')
  const[secondDay4Temp,setSecondDay4Temp] = useState('')
  const[secondDay4Weather,setSecondDay4Weather] = useState('')

  const[secondDay5date,setSecondDay5date] = useState('')
  const[secondDay5Temp,setSecondDay5Temp] = useState('')
  const[secondDay5Weather,setSecondDay5Weather] = useState('')

  const[secondDay6date,setSecondDay6date] = useState('')
  const[secondDay6Temp,setSecondDay6Temp] = useState('')
  const[secondDay6Weather,setSecondDay6Weather] = useState('')

  const[thirdDayNightdate,setThirdDayNightdate] = useState('')
  const[thirdDayNightTemp,setThirdDayNightTemp] = useState('')
  const[thirdDayNightWeather,setThirdDayNightWeather] = useState('')

  const[thirdDay0date,setThirdDay0date] = useState('')
  const[thirdDay0Temp,setThirdDay0Temp] = useState('')
  const[thirdDay0Weather,setThirdDay0Weather] = useState('')

  const[thirdDay1date,setThirdDay1date] = useState('')
  const[thirdDay1Temp,setThirdDay1Temp] = useState('')
  const[thirdDay1Weather,setThirdDay1Weather] = useState('')

  const[thirdDay2date,setThirdDay2date] = useState('')
  const[thirdDay2Temp,setThirdDay2Temp] = useState('')
  const[thirdDay2Weather,setThirdDay2Weather] = useState('')

  const[thirdDay3date,setThirdDay3date] = useState('')
  const[thirdDay3Temp,setThirdDay3Temp] = useState('')
  const[thirdDay3Weather,setThirdDay3Weather] = useState('')

  const[thirdDay4date,setThirdDay4date] = useState('')
  const[thirdDay4Temp,setThirdDay4Temp] = useState('')
  const[thirdDay4Weather,setThirdDay4Weather] = useState('')

  const[thirdDay5date,setThirdDay5date] = useState('')
  const[thirdDay5Temp,setThirdDay5Temp] = useState('')
  const[thirdDay5Weather,setThirdDay5Weather] = useState('')

  const[thirdDay6date,setThirdDay6date] = useState('')
  const[thirdDay6Temp,setThirdDay6Temp] = useState('')
  const[thirdDay6Weather,setThirdDay6Weather] = useState('')


  const[fourthDayNightdate,setFourthDayNightdate] = useState('')
  const[fourthDayNightTemp,setFourthDayNightTemp] = useState('')
  const[fourthDayNightWeather,setFourthDayNightWeather] = useState('')

  const[fourthDay0date,setFourthDay0date] = useState('')
  const[fourthDay0Temp,setFourthDay0Temp] = useState('')
  const[fourthDay0Weather,setFourthDay0Weather] = useState('')

  const[fourthDay1date,setFourthDay1date] = useState('')
  const[fourthDay1Temp,setFourthDay1Temp] = useState('')
  const[fourthDay1Weather,setFourthDay1Weather] = useState('')

  const[fourthDay2date,setFourthDay2date] = useState('')
  const[fourthDay2Temp,setFourthDay2Temp] = useState('')
  const[fourthDay2Weather,setFourthDay2Weather] = useState('')

  const[fourthDay3date,setFourthDay3date] = useState('')
  const[fourthDay3Temp,setFourthDay3Temp] = useState('')
  const[fourthDay3Weather,setFourthDay3Weather] = useState('')

  const[fourthDay4date,setFourthDay4date] = useState('')
  const[fourthDay4Temp,setFourthDay4Temp] = useState('')
  const[fourthDay4Weather,setFourthDay4Weather] = useState('')

  const[fourthDay5date,setFourthDay5date] = useState('')
  const[fourthDay5Temp,setFourthDay5Temp] = useState('')
  const[fourthDay5Weather,setFourthDay5Weather] = useState('')

  const[fourthDay6date,setFourthDay6date] = useState('')
  const[fourthDay6Temp,setFourthDay6Temp] = useState('')
  const[fourthDay6Weather,setFourthDay6Weather] = useState('')


  const getNextDaysForeCast = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.locationForeCast}&appid=25068c72bbe11cb7c9b0600f15ebbd06`)
    .then(response => response.json())
    .then(data =>{
      setCityOfForeCast(data.city.name)



      setTomorrowNightdate(data.list[3].dt_txt)
      setTomorrowNightTemp(data.list[3].main.temp)
      setTomorrowNightWeather(data.list[3].weather[0].main)


      setTomorrow0date(data.list[4].dt_txt)
      setTomorrow0Temp(data.list[4].main.temp)
      setTomorrow0Weather(data.list[4].weather[0].main)

      setTomorrow1date(data.list[5].dt_txt)
      setTomorrow1Temp(data.list[5].main.temp)
      setTomorrow1Weather(data.list[5].weather[0].main)

      setTomorrow2date(data.list[6].dt_txt)
      setTomorrow2Temp(data.list[6].main.temp)
      setTomorrow2Weather(data.list[6].weather[0].main)

      setTomorrow3date(data.list[7].dt_txt)
      setTomorrow3Temp(data.list[7].main.temp)
      setTomorrow3Weather(data.list[7].weather[0].main)

      setTomorrow4date(data.list[8].dt_txt)
      setTomorrow4Temp(data.list[8].main.temp)
      setTomorrow4Weather(data.list[8].weather[0].main)

      setTomorrow5date(data.list[9].dt_txt)
      setTomorrow5Temp(data.list[9].main.temp)
      setTomorrow5Weather(data.list[9].weather[0].main)

      setTomorrow6date(data.list[10].dt_txt)
      setTomorrow6Temp(data.list[10].main.temp)
      setTomorrow6Weather(data.list[10].weather[0].main)

      setSecondDayNightdate(data.list[11].dt_txt)
      setSecondDayNightTemp(data.list[11].main.temp)
      setSecondDayNightWeather(data.list[11].weather[0].main)

      setSecondDay0date(data.list[12].dt_txt)
      setSecondDay0Temp(data.list[12].main.temp)
      setSecondDay0Weather(data.list[12].weather[0].main)

      setSecondDay1date(data.list[13].dt_txt)
      setSecondDay1Temp(data.list[13].main.temp)
      setSecondDay1Weather(data.list[13].weather[0].main)

      setSecondDay2date(data.list[14].dt_txt)
      setSecondDay2Temp(data.list[14].main.temp)
      setSecondDay2Weather(data.list[14].weather[0].main)

      setSecondDay3date(data.list[14].dt_txt)
      setSecondDay3Temp(data.list[14].main.temp)
      setSecondDay3Weather(data.list[14].weather[0].main)

      setSecondDay4date(data.list[15].dt_txt)
      setSecondDay4Temp(data.list[15].main.temp)
      setSecondDay4Weather(data.list[15].weather[0].main)

      setSecondDay5date(data.list[16].dt_txt)
      setSecondDay5Temp(data.list[16].main.temp)
      setSecondDay5Weather(data.list[16].weather[0].main)

      setSecondDay6date(data.list[17].dt_txt)
      setSecondDay6Temp(data.list[17].main.temp)
      setSecondDay6Weather(data.list[17].weather[0].main)

      setThirdDayNightdate(data.list[18].dt_txt)
      setThirdDayNightTemp(data.list[18].main.temp)
      setThirdDayNightWeather(data.list[18].weather[0].main)

      setThirdDay0date(data.list[19].dt_txt)
      setThirdDay0Temp(data.list[19].main.temp)
      setThirdDay0Weather(data.list[19].weather[0].main)

      setThirdDay1date(data.list[20].dt_txt)
      setThirdDay1Temp(data.list[20].main.temp)
      setThirdDay1Weather(data.list[20].weather[0].main)

      setThirdDay2date(data.list[21].dt_txt)
      setThirdDay2Temp(data.list[21].main.temp)
      setThirdDay2Weather(data.list[21].weather[0].main)

      setThirdDay3date(data.list[22].dt_txt)
      setThirdDay3Temp(data.list[22].main.temp)
      setThirdDay3Weather(data.list[22].weather[0].main)

      setThirdDay4date(data.list[23].dt_txt)
      setThirdDay4Temp(data.list[23].main.temp)
      setThirdDay4Weather(data.list[23].weather[0].main)

      setThirdDay5date(data.list[24].dt_txt)
      setThirdDay5Temp(data.list[24].main.temp)
      setThirdDay5Weather(data.list[24].weather[0].main)

      setThirdDay6date(data.list[25].dt_txt)
      setThirdDay6Temp(data.list[25].main.temp)
      setThirdDay6Weather(data.list[25].weather[0].main)


      setFourthDayNightdate(data.list[26].dt_txt)
      setFourthDayNightTemp(data.list[26].main.temp)
      setFourthDayNightWeather(data.list[26].weather[0].main)

      setFourthDay0date(data.list[27].dt_txt)
      setFourthDay0Temp(data.list[27].main.temp)
      setFourthDay0Weather(data.list[27].weather[0].main)

      setFourthDay1date(data.list[28].dt_txt)
      setFourthDay1Temp(data.list[28].main.temp)
      setFourthDay1Weather(data.list[28].weather[0].main)

      setFourthDay2date(data.list[29].dt_txt)
      setFourthDay2Temp(data.list[29].main.temp)
      setFourthDay2Weather(data.list[29].weather[0].main)

      setFourthDay3date(data.list[30].dt_txt)
      setFourthDay3Temp(data.list[30].main.temp)
      setFourthDay3Weather(data.list[30].weather[0].main)

      setFourthDay4date(data.list[31].dt_txt)
      setFourthDay4Temp(data.list[31].main.temp)
      setFourthDay4Weather(data.list[31].weather[0].main)

      setFourthDay5date(data.list[32].dt_txt)
      setFourthDay5Temp(data.list[32].main.temp)
      setFourthDay5Weather(data.list[32].weather[0].main)

      setFourthDay6date(data.list[33].dt_txt)
      setFourthDay6Temp(data.list[33].main.temp)
      setFourthDay6Weather(data.list[33].weather[0].main)





    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }



  if (tomorrow1date === undefined || tomorrow1date === '' || cityOfForeCast !== props.locationForeCast) {
    return(
      <View>
        <CustomButton title='Forecast next 4 days' onPress={getNextDaysForeCast}></CustomButton>
      </View>
    )
  }else {
    return(
      <View style={styles.containerData}>
      <CustomButton title='Forecast next 4 days' onPress={getNextDaysForeCast}> Forecast </CustomButton>
        <Spacer height={4} />
        <View style={styles.tomorrow}>
          <Text style={{fontSize:20,color:'white'}}> {moment(tomorrow0date).format('dddd, D MMMM')} </Text>
          <Text style={{color:'white',fontSize:13}}> 03:00 | {Math.round((tomorrowNightTemp - 273.5)*1000)/1000} Celsius | {tomorrowNightWeather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 06:00 | {Math.round((tomorrow0Temp - 273.5)*1000)/1000} Celsius | {tomorrow0Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 09:00 | {Math.round((tomorrow1Temp - 273.5)*1000)/1000} Celsius | {tomorrow1Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 12:00 | {Math.round((tomorrow2Temp - 273.5)*1000)/1000} Celsius | {tomorrow2Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 15:00 | {Math.round((tomorrow3Temp - 273.5)*1000)/1000} Celsius | {tomorrow3Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 18:00 | {Math.round((tomorrow4Temp - 273.5)*1000)/1000} Celsius | {tomorrow4Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 21:00 | {Math.round((tomorrow5Temp - 273.5)*1000)/1000} Celsius | {tomorrow5Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 00:00 | {Math.round((tomorrow6Temp - 273.5)*1000)/1000} Celsius | {tomorrow6Weather}   </Text>
        </View>
        <View style={styles.secondDay}>
          <Text style={{fontSize:20,color:'white'}}> {moment(secondDay0date).format('dddd, D MMMM')}  </Text>
          <Text style={{color:'white',fontSize:13}}> 03:00 | {Math.round((secondDayNightTemp - 273.5)*1000)/1000} Celsius | {secondDayNightWeather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 06:00 | {Math.round((secondDay0Temp - 273.5)*1000)/1000} Celsius | {secondDay0Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 09:00 | {Math.round((secondDay1Temp - 273.5)*1000)/1000} Celsius | {secondDay1Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 12:00 | {Math.round((secondDay2Temp - 273.5)*1000)/1000} Celsius | {secondDay2Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 15:00 | {Math.round((secondDay3Temp - 273.5)*1000)/1000} Celsius | {secondDay3Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 18:00 | {Math.round((secondDay4Temp - 273.5)*1000)/1000} Celsius | {secondDay4Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 21:00 | {Math.round((secondDay5Temp - 273.5)*1000)/1000} Celsius | {secondDay5Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 00:00 | {Math.round((secondDay6Temp - 273.5)*1000)/1000} Celsius | {secondDay6Weather}   </Text>
        </View>
        <View style={styles.thirdDay}>
          <Text style={{fontSize:20,color:'white'}}>{moment(thirdDay0date).format('dddd, D MMMM')}</Text>
          <Text style={{color:'white',fontSize:13}}> 03:00 | {Math.round((thirdDayNightTemp - 273.5)*1000)/1000} Celsius | {thirdDayNightWeather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 06:00 | {Math.round((thirdDay0Temp - 273.5)*1000)/1000} Celsius | {thirdDay0Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 09:00 | {Math.round((thirdDay1Temp - 273.5)*1000)/1000} Celsius | {thirdDay1Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 12:00 | {Math.round((thirdDay2Temp - 273.5)*1000)/1000} Celsius | {thirdDay2Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 15:00 | {Math.round((thirdDay3Temp - 273.5)*1000)/1000} Celsius | {thirdDay3Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 18:00 | {Math.round((thirdDay4Temp - 273.5)*1000)/1000} Celsius | {thirdDay4Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 21:00 | {Math.round((thirdDay5Temp - 273.5)*1000)/1000} Celsius | {thirdDay5Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 00:00 | {Math.round((thirdDay6Temp - 273.5)*1000)/1000} Celsius | {thirdDay6Weather}   </Text>
        </View>
        <View style={styles.fourthDay}>
          <Text style={{fontSize:20,color:'white'}}>{moment(fourthDay0date).format('dddd, D MMMM')}</Text>
          <Text style={{color:'white',fontSize:13}}> 03:00 | {Math.round((fourthDayNightTemp - 273.5)*1000)/1000} Celsius | {fourthDayNightWeather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 06:00 | {Math.round((fourthDay0Temp - 273.5)*1000)/1000} Celsius | {fourthDay0Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 09:00 | {Math.round((fourthDay1Temp - 273.5)*1000)/1000} Celsius | {fourthDay1Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 12:00 | {Math.round((fourthDay2Temp - 273.5)*1000)/1000} Celsius | {fourthDay2Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 15:00 | {Math.round((fourthDay3Temp - 273.5)*1000)/1000} Celsius | {fourthDay3Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 18:00 | {Math.round((fourthDay4Temp - 273.5)*1000)/1000} Celsius | {fourthDay4Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 21:00 | {Math.round((fourthDay5Temp - 273.5)*1000)/1000} Celsius | {fourthDay5Weather}   </Text>
          <Spacer height={3} />
          <Text style={{color:'white',fontSize:13}}> 00:00 | {Math.round((fourthDay6Temp - 273.5)*1000)/1000} Celsius | {fourthDay6Weather}   </Text>
        </View>
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
  },
  tomorrow: {
    backgroundColor:'rgba(190, 190, 190, 0.7)',
    padding: 10,
    elevation:1,
    flexDirection:'column',
    justifyContent:'space-around',
  },
  secondDay: {
    backgroundColor:'rgba(190, 190, 190, 0.7)',
    padding: 10,
    elevation:1,
    flexDirection:'column',
    justifyContent:'space-around',
  },
  thirdDay: {
    backgroundColor:'rgba(190, 190, 190, 0.7)',
    padding: 10,
    elevation:1,
    flexDirection:'column',
    justifyContent:'space-around',
  },
  fourthDay: {
    backgroundColor:'rgba(190, 190, 190, 0.7)',
    padding: 10,
    elevation:1,
    flexDirection:'column',
    justifyContent:'space-around',
  }
})

export default ForeCastCard
