import {verticalScale, scale} from './StyleSheet';
import {getStatusBarHeight, isAndroid} from './Platform';

export const Metrics = {
  statusBarHeight: getStatusBarHeight(),
  navbarHeight: isAndroid() ? verticalScale(54) : verticalScale(48),
  swipeableButtonWidth: scale(98),

  sn_SwipeableIconSize: verticalScale(34),
  sn_TopIconSize: verticalScale(16),
  sn_BottomIconSize: verticalScale(24),
  sn_selectedIconSize: verticalScale(26),
};

export default Metrics;
