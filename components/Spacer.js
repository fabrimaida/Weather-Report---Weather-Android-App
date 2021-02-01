import React from 'react'
import {View} from 'react-native'


const Spacer = ({
  size= 0,
  horizontal,
  ...props
}) => {
  return (
    <View style={{
      width: 10,
    }} {...props} />
  )
}


export default Spacer
