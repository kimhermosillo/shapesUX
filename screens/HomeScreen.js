import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { WebBrowser } from 'expo'
import ExpoConfigView from '@expo/samples/ExpoConfigView'

//Disables all the warnings that came with font.
console.disableYellowBox = true

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/splash.png')
                  : require('../assets/images/splash.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.welcomeHomeCard}>
            <Text style={styles.welcomeToShapes}>
              Welcome, User!
            </Text>
          </View>
          {/* MAYBE THINK ABOUT ADDING THE USERNAME/PASSWORD FUNCTION HERE */}
          
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Life sucks we're all going to die anyways</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aed137',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  welcomeHomeCard: {
    alignItems: 'center',
    marginHorizontal: 50,
  },

  
  welcomeToShapes: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'rgba(96,100,109, 1)',
    lineHeight: 50,
    textAlign: 'center',
  },
  // IF YOU WANT TO KEEP THE TAB BAR THIS IS WHAT TO EDIT FOR STYLING
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  // END OF TAB BAR CONTAINER -- START
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
})


// Expo.registerRootComponent(App)