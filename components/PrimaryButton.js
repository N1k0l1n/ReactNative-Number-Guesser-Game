import { View, Text } from 'react-native'
import React from 'react'

export default function PrimaryButton({children}) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}