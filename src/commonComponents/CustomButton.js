import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Text } from 'react-native';
import { colors, fontSizes } from '../constants';
import * as actions from '../actions';

class CustomButton extends Component {
  getStyles(){
    if(this.props.symbol)
    {
      return styles.symbolContainer;
    }
  }
render() {
  const { label } = this.props;
  return (
  <TouchableOpacity
  style={[styles.containerStyle, this.props.symbol? styles.symbolBg:styles.numberBg]}
  onPress={() => this.numberSeparator(label)}>
  <Text style={[styles.textStyle,this.props.symbol? styles.symbolText:styles.numberText]}>{label}</Text>
  </TouchableOpacity>
);
}
numberSeparator(label) {
  if (this.props.symbol | label === '=') {
    this.props.foundSymbol(label);
  } else {
    this.props.foundNumber(label);
  }
this.props.buttonClicked(label);
}
}

const styles = {
  containerStyle: {
    height: 100,
    width: 100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.buttonBorderColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 10
  },
  symbolBg: {
    backgroundColor: colors.symbolButtonBgColor,
  },
  numberBg: {
    backgroundColor: colors.numberButtonBgColor,
  },
  symbolText: {
    color: colors.symbolButtonTextColor
  },
  numberText: {
    color: colors.numberButtonTextColor
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: fontSizes.buttonTextFontSize
  },
};
export default connect(null, actions)(CustomButton);
