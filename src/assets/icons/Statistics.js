import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.25 9.82H.894a.897.897 0 00-.894.894v13.39c0 .496.403.893.894.893H6.25a.894.894 0 00.894-.894v-13.39a.894.894 0 00-.894-.893zM15.178.003H9.822a.893.893 0 00-.894.889v23.211c0 .497.402.894.894.894h5.356a.894.894 0 00.894-.894V.897a.894.894 0 00-.894-.894zM24.106 7.142H18.75a.89.89 0 00-.894.894v16.067c0 .497.402.894.894.894h5.356a.894.894 0 00.894-.894V8.036a.894.894 0 00-.894-.894z"
        fill="#47566A"
      />
    </Svg>
  )
}

export default SvgComponent
