import {Dimensions, Platform, StatusBar} from 'react-native';

/**
 * Return true if the platform is Android
 * @returns {boolean}
 */
export const isAndroid = () => Platform.OS === 'android';
export const isIOS = () => isAndroid() === false;
export const getPlatformName = (): 'android' | 'ios' =>
  isAndroid() ? 'android' : 'ios';

export function isIphoneX() {
  const dimensions = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimensions.height === 812 ||
      dimensions.width === 812 ||
      (dimensions.height === 896 || dimensions.width === 896))
  );
}

/**
 * Android Pie add supports for cutouts
 * @returns {boolean}
 */
export const isAndroidPieOrLater = () => Platform.Version >= 28;

// Status bar stuff
const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const {height: W_HEIGHT, width: W_WIDTH} = Dimensions.get('window');

let isIPhoneX = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
  isIPhoneX =
    (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) ||
    (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT);
}

export const getStatusBarHeight = (): number => {
  if (Platform.OS === 'ios') {
    return isIPhoneX ? 44 : 20;
  }

  // @ts-ignore
  return StatusBar.currentHeight;
};

export const hasAndroidCutout = () =>
  isAndroidPieOrLater() && getStatusBarHeight() >= 36;
