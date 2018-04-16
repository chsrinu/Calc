import React from 'react';
import { View } from 'react-native';
import { CardSection } from './';

const Card = () => (
  <View>
      <CardSection labels={[1, 2, 3, '+']} values={[1,2,3,'+']} />
      <CardSection labels={[4, 5, 6, '-']} values={[4,5,6,'-']} />
      <CardSection labels={[7, 8, 9, 'x']} values={[7,8,9,'*']} />
      <CardSection labels={['.', 0, '=', '/']} values={['.',0,'=','/']} />
  </View>

);
export { Card };
