import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckIcon = props => (
  <Svg
    width={20}
    height={16}
    fill="none"
    opacity={props.opacity}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m2.914 5.953 6.622 6.95-3 2.5-6.45-6.621 2.828-2.829Z"
      fill="#EF3737"
    />
    <Path
      fill="#EF3737"
      d="M19.668 2.83 6.864 15.632l-2.828-2.828L16.84.001z"
    />
  </Svg>
);

export default CheckIcon;
