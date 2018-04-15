import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CalculationDisplay, Header } from '../commonComponents';
import { colors } from '../constants'
//import * as actions from '../actions';

class MainPage extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Calc" style={{ flex: 0.7 }} />
        <View style={{ flex: 6, borderWidth: 3,borderColor: colors.mainPageBorder, padding: 5 }}>
          <CalculationDisplay style={{ flex: 4 }} text={this.props.data} />
          <Card style={{ flex: 2 }} />
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return { data: state.dataReducer.expression };
}
export default connect(mapStateToProps)(MainPage);
