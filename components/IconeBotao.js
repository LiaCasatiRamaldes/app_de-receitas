import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const IconeBotao = ({ name, size, color }) => (
  <TouchableOpacity>
    <Icon name={name} size={size} color={color} />
  </TouchableOpacity>
);

export default IconeBotao;