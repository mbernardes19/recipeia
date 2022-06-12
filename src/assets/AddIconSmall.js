import * as React from 'react';
import Svg, {Circle, Mask, Path} from 'react-native-svg';

const AddIconSmall = props => (
  <Svg
    width={35}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={17.5} cy={17.5} r={17} fill="#fff" stroke="#000" />
    <Mask id="a" fill="#fff">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 23.5a2.5 2.5 0 0 0 5 0V20h3.5a2.5 2.5 0 0 0 0-5H20v-3.5a2.5 2.5 0 0 0-5 0V15h-3.5a2.5 2.5 0 0 0 0 5H15v3.5Z"
      />
    </Mask>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 23.5a2.5 2.5 0 0 0 5 0V20h3.5a2.5 2.5 0 0 0 0-5H20v-3.5a2.5 2.5 0 0 0-5 0V15h-3.5a2.5 2.5 0 0 0 0 5H15v3.5Z"
      fill="#fff"
    />
    <Path
      d="M20 20v-1h-1v1h1Zm0-5h-1v1h1v-1Zm-5 0v1h1v-1h-1Zm0 5h1v-1h-1v1Zm2.5 5a1.5 1.5 0 0 1-1.5-1.5h-2a3.5 3.5 0 0 0 3.5 3.5v-2Zm1.5-1.5a1.5 1.5 0 0 1-1.5 1.5v2a3.5 3.5 0 0 0 3.5-3.5h-2Zm0-3.5v3.5h2V20h-2Zm4.5-1H20v2h3.5v-2Zm1.5-1.5a1.5 1.5 0 0 1-1.5 1.5v2a3.5 3.5 0 0 0 3.5-3.5h-2ZM23.5 16a1.5 1.5 0 0 1 1.5 1.5h2a3.5 3.5 0 0 0-3.5-3.5v2ZM20 16h3.5v-2H20v2Zm-1-4.5V15h2v-3.5h-2ZM17.5 10a1.5 1.5 0 0 1 1.5 1.5h2A3.5 3.5 0 0 0 17.5 8v2ZM16 11.5a1.5 1.5 0 0 1 1.5-1.5V8a3.5 3.5 0 0 0-3.5 3.5h2Zm0 3.5v-3.5h-2V15h2Zm-4.5 1H15v-2h-3.5v2ZM10 17.5a1.5 1.5 0 0 1 1.5-1.5v-2A3.5 3.5 0 0 0 8 17.5h2Zm1.5 1.5a1.5 1.5 0 0 1-1.5-1.5H8a3.5 3.5 0 0 0 3.5 3.5v-2Zm3.5 0h-3.5v2H15v-2Zm1 4.5V20h-2v3.5h2Z"
      fill="#000"
      mask="url(#a)"
    />
  </Svg>
);

export default AddIconSmall;
