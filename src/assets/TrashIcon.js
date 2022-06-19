import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const TrashIcon = props => (
  <Svg
    width={14}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m5.444 0-.777.8H0v1.6h14V.8H9.333L8.556 0H5.444ZM1.062 4 2.25 14.61c.102.793.765 1.39 1.542 1.39h6.415c.776 0 1.44-.596 1.543-1.395L12.938 4H1.062Z"
      fill="#EF3737"
    />
  </Svg>
);

export default TrashIcon;
