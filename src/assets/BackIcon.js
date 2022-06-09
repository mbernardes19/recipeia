import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackIcon = props => (
  <Svg
    width={7}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      d="M6 1.061 1.061 6M1.061 6 6 10.939"
    />
  </Svg>
);

export default BackIcon;
