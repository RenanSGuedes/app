import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, G, Rect } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 2000 1500" {...props}>
      <Path fill="#fff" d="M0 0H2000V1500H0z" />
      <Defs>
        <Path stroke="#fff" strokeWidth={0.61} id="a" d="M0 0H1V1H0z" />
        <Pattern
          id="b"
          width={3}
          height={3}
          patternUnits="userSpaceOnUse"
          patternTransform="matrix(74.1 0 0 74.1 -73099.65 -54825.108)"
        >
          <Use fill="#fafafa" href="#a" y={2} />
          <Use fill="#fafafa" href="#a" x={1} y={2} />
          <Use fill="#f5f5f5" href="#a" x={2} y={2} />
          <Use fill="#f5f5f5" href="#a" />
          <Use fill="#f0f0f0" href="#a" x={2} />
          <Use fill="#f0f0f0" href="#a" x={1} y={1} />
        </Pattern>
        <Pattern
          id="c"
          width={7}
          height={11}
          patternUnits="userSpaceOnUse"
          patternTransform="matrix(74.1 0 0 74.1 -73099.65 -54825.108)"
        >
          <G fill="#ebebeb">
            <Use href="#a" />
            <Use href="#a" y={5} />
            <Use href="#a" x={1} y={10} />
            <Use href="#a" x={2} y={1} />
            <Use href="#a" x={2} y={4} />
            <Use href="#a" x={3} y={8} />
            <Use href="#a" x={4} y={3} />
            <Use href="#a" x={4} y={7} />
            <Use href="#a" x={5} y={2} />
            <Use href="#a" x={5} y={6} />
            <Use href="#a" x={6} y={9} />
          </G>
        </Pattern>
        <Pattern
          id="d"
          width={5}
          height={13}
          patternUnits="userSpaceOnUse"
          patternTransform="matrix(74.1 0 0 74.1 -73099.65 -54825.108)"
        >
          <G fill="#ebebeb">
            <Use href="#a" y={5} />
            <Use href="#a" y={8} />
            <Use href="#a" x={1} y={1} />
            <Use href="#a" x={1} y={9} />
            <Use href="#a" x={1} y={12} />
            <Use href="#a" x={2} />
            <Use href="#a" x={2} y={4} />
            <Use href="#a" x={3} y={2} />
            <Use href="#a" x={3} y={6} />
            <Use href="#a" x={3} y={11} />
            <Use href="#a" x={4} y={3} />
            <Use href="#a" x={4} y={7} />
            <Use href="#a" x={4} y={10} />
          </G>
        </Pattern>
        <Pattern
          id="e"
          width={17}
          height={13}
          patternUnits="userSpaceOnUse"
          patternTransform="matrix(74.1 0 0 74.1 -73099.65 -54825.108)"
        >
          <G fill="#e5e5e5">
            <Use href="#a" y={11} />
            <Use href="#a" x={2} y={9} />
            <Use href="#a" x={5} y={12} />
            <Use href="#a" x={9} y={4} />
            <Use href="#a" x={12} y={1} />
            <Use href="#a" x={16} y={6} />
          </G>
        </Pattern>
        <Pattern
          id="f"
          width={19}
          height={17}
          patternUnits="userSpaceOnUse"
          patternTransform="matrix(74.1 0 0 74.1 -73099.65 -54825.108)"
        >
          <G fill="#fff">
            <Use href="#a" y={9} />
            <Use href="#a" x={16} y={5} />
            <Use href="#a" x={14} y={2} />
            <Use href="#a" x={11} y={11} />
            <Use href="#a" x={6} y={14} />
          </G>
          <G fill="#e0e0e0">
            <Use href="#a" x={3} y={13} />
            <Use href="#a" x={9} y={7} />
            <Use href="#a" x={13} y={10} />
            <Use href="#a" x={15} y={4} />
            <Use href="#a" x={18} y={1} />
          </G>
        </Pattern>
        <Pattern
          id="g"
          width={47}
          height={53}
          patternUnits="userSpaceOnUse"
          patternTransform="matrix(74.1 0 0 74.1 -73099.65 -54825.108)"
        >
          <G fill="#daebff">
            <Use href="#a" x={2} y={5} />
            <Use href="#a" x={16} y={38} />
            <Use href="#a" x={46} y={42} />
            <Use href="#a" x={29} y={20} />
          </G>
        </Pattern>
        <Pattern
          id="h"
          width={59}
          height={71}
          patternUnits="userSpaceOnUse"
          patternTransform="matrix(74.1 0 0 74.1 -73099.65 -54825.108)"
        >
          <G fill="#daebff">
            <Use href="#a" x={33} y={13} />
            <Use href="#a" x={27} y={54} />
            <Use href="#a" x={55} y={55} />
          </G>
        </Pattern>
        <Pattern
          id="i"
          width={139}
          height={97}
          patternUnits="userSpaceOnUse"
          patternTransform="matrix(74.1 0 0 74.1 -73099.65 -54825.108)"
        >
          <G fill="#daebff">
            <Use href="#a" x={11} y={8} />
            <Use href="#a" x={51} y={13} />
            <Use href="#a" x={17} y={73} />
            <Use href="#a" x={99} y={57} />
          </G>
        </Pattern>
      </Defs>
      <Rect fill="url(#b)" width="100%" height="100%" />
      <Rect fill="url(#c)" width="100%" height="100%" />
      <Rect fill="url(#d)" width="100%" height="100%" />
      <Rect fill="url(#e)" width="100%" height="100%" />
      <Rect fill="url(#f)" width="100%" height="100%" />
      <Rect fill="url(#g)" width="100%" height="100%" />
      <Rect fill="url(#h)" width="100%" height="100%" />
      <Rect fill="url(#i)" width="100%" height="100%" />
    </Svg>
  )
}

export default SvgComponent
