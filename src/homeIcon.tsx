import React from 'react';
import Svg, {Path} from 'react-native-svg';
const homeComponent = () => {
  return (
    <Svg link="http://www.w3.org/2000/svg" width={26} height={26}>
      <Path d="M20 2.031c-.55 0-1 .45-1 1v4.781l-5.281-5.28a1.028 1.028 0 0 0-1.438 0L.562 14.281a.99.99 0 0 0 0 1.405.99.99 0 0 0 1.407 0L13 4.658l11.063 11.062c.195.195.46.312.718.312.258 0 .492-.117.688-.312a.99.99 0 0 0 0-1.406L22 10.842V3.032c0-.55-.45-1-1-1ZM13 6.5l-11 11V23a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-5.5ZM11 16h4c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1Z" />
    </Svg>
  );
};
export default homeComponent;
