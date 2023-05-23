import {  Text, StyleSheet } from 'react-native'
import Colors from '../utils/colors'
import React from 'react'

export default function InstructionText({children, styled}) {
  return  <Text style={[styles.instructionText, styled]}>{children}</Text>
}

const styles = StyleSheet.create({
    instructionText:{
        fontWeight:'bold',
        color: Colors.accent500,
        fontSize: 24
      },
})