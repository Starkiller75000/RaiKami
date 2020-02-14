import StyleSheet from 'react-native-lipstick';
import {StyleSheet as DefaultStyleSheet} from 'react-native';
import {map, omit} from 'ramda';

// We add a plugin to handle $inherits
// Which allows a part of a style to inherits from
// an other one
StyleSheet.addPlugin(style => {
  return map((value: {[key: string]: any}) => {
    if (value.$inherits) {
      return {
        ...style[value.$inherits],
        ...omit(['$inherits'], value),
      };
    }
    return value;
  }, style);
});

export const flatten = DefaultStyleSheet.flatten;
export default StyleSheet;

export {
  verticalScale,
  scale,
} from 'react-native-lipstick/src/plugins/scalePlugin';
