// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native'

// UI Imports
import { blockPadding, itemSpacing, itemRadius, font } from '../common/responsive'
import { white, black } from '../common/colors'

// Component
const Toast = (props) => (
  <TouchableNativeFeedback onPress={props.onPress}>
    <View style={styles.container}>
      <Text style={styles.text}>{ props.message }</Text>
    </View>
  </TouchableNativeFeedback>
)

// Component Properties
Toast.propTypes = {
  message: PropTypes.string
}

export default Toast

// Component Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: black,
    bottom: itemSpacing,
    left: itemSpacing,
    right: itemSpacing,
    padding: blockPadding,
    borderRadius: itemRadius,
    elevation: 6
  },
  text: {
    fontSize: font(16),
    textAlign: 'center',
    color: white
  }
})
