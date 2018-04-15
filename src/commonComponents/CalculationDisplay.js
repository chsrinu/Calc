import React from 'react';
import { View, Text } from 'react-native';
import { fontSizes, colors } from '../constants';

const CalculationDisplay = ({ text }) => (
  <View style={styles.containerStyle}>
    <Text style={styles.textStyle}> {text} </Text>
  </View>
);
const styles = {
  containerStyle: {
    flex: 1,
    borderWidth: 2,
    marginTop: 5,
    justifyContent: 'center',
    borderColor: colors.calcDisplayborder
  },
  textStyle: {
    fontSize: fontSizes.displayTextSize,
    fontFamily: 'digital-7',
    color: colors.displayTextColor,
  }

};
export { CalculationDisplay };
