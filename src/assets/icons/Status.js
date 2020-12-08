import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M15.66 2.102a9.668 9.668 0 014.2 7.815c.092 5.343-4.16 9.75-9.498 9.854-5.331.105-9.774-4.166-9.875-9.5a9.688 9.688 0 013.917-7.969.94.94 0 011.372.277l.636 1.087a.937.937 0 01-.237 1.215 6.53 6.53 0 00-2.564 5.315 6.558 6.558 0 006.677 6.451c3.577-.062 6.534-3.013 6.446-6.719a6.565 6.565 0 00-2.751-5.187.932.932 0 01-.275-1.202l.598-1.109a.936.936 0 011.354-.328zm-3.92 8.269L11.578.997a.935.935 0 00-.954-.92l-1.25.021a.935.935 0 00-.92.954l.163 9.373c.01.52.435.93.954.921l1.25-.021c.52-.01.93-.435.92-.954z"
        fill="#47566A"
      />
    </Svg>
  )
}

export default SvgComponent
