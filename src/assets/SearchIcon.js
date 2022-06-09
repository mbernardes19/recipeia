import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const SearchIcon = props => (
  <Svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={6.5} cy={6.5} r={5.75} stroke="#EF3737" strokeWidth={1.5} />
    <Path
      stroke="#EF3737"
      strokeWidth={1.5}
      strokeLinecap="round"
      d="m11.061 11 2.475 2.475"
    />
  </Svg>
);

export default SearchIcon;
