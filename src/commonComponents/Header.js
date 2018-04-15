import React from 'react';
import { View, Text } from 'react-native';
import { fontSizes, colors } from '../constants';

const Header = ({ title }) => (
  <View style={Styles.containerStyle}>
    <Text style={Styles.textStyle}>{title}</Text>
  </View>
);
const Styles = {
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.headerBgColor
  },
  textStyle: {
    fontSize: fontSizes.headerFontSize,
    color: colors.headerTextColor
  }
};
export { Header };
