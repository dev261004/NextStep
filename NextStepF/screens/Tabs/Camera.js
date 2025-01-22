import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Camera extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: "center",
        alignItems: "center",}}>
        <Text>Camera</Text>
       
      </View>
    )
  }
}

export default Camera