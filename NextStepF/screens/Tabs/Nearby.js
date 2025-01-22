import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Nearby extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: "center",
        alignItems: "center",}}>
        <Text>Nearby</Text>
      </View>
    )
  }
}

export default Nearby