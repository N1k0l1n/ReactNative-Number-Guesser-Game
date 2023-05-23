import { View, StyleSheet } from 'react-native'
import Colors from '../utils/colors'
import React from 'react'

export default function Card({children}) {
  return  <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})