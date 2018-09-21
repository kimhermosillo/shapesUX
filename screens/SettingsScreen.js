import React from 'react'
import { ExpoConfigView, StyleSheet } from '@expo/samples'
import { Text } from 'react-native'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Food Log',
  };

  render() {
    return (
      <Text>FOOD JOURNAL</Text>
    )
  }
}
