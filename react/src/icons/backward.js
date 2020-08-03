import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Backward = forwardRef(
  ({ color = 'currentColor', size = 21, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 21 21"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        <path
          fill="none"
          stroke={color}
          d="M2.88383653,4.5350696 C6.21696198,0.535925111 9.98791618,-0.406545601 14.1966991,1.70765746 C9.87317822,1.47889363 7.0447511,3.36451171 5.71141777,7.36451171 L5.7106703,7.3629127 L7.83273811,9.48583206 L0.761670299,9.48583206 L0.761670299,2.41476425 Z"
          transform="rotate(45 2.114 12.799)"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }
)
Backward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Backward.displayName = 'Backward'
export default Backward
