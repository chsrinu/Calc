import React from 'react';
import { View } from 'react-native';
import CustomButton from './CustomButton';

const CardSection = (props) => (
  <View style={styles.containerStyle}>
    <CustomButton label={props.labels[0]} />
    <CustomButton label={props.labels[1]} />
    <CustomButton label={props.labels[2]} />
    <CustomButton label={props.labels[3]} symbol />
  </View>
);
const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
};
export { CardSection };
