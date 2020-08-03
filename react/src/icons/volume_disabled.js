import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const VolumeDisabled = forwardRef(
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
        <g
          fill="none"
          stroke={color}
          transform="translate(3 3)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7.5 1.5 1-1v3m0 3.12658691v7.87341309l-5-4h-2c-.55228475 0-1-.4477153-1-1v-4c0-.55228475.44771525-1 1-1h2l1.5-1.5"></path>
          <path d="m2.5.5 12 12"></path>
          <path d="m10.5 5.5v1"></path>
          <path d="m12.7200616 10.7079223c-.3369299.4755068-1.0769504 1.0728661-2.2200616 1.7920777"></path>
          <path d="m10.5 9v.5"></path>
          <path d="m13.5 9c0-.69729457 0-1.19729457 0-1.5 0-1.82842712-.8333333-3.32842712-2.5-4.5"></path>
        </g>
      </svg>
    )
  }
)
VolumeDisabled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
VolumeDisabled.displayName = 'VolumeDisabled'
export default VolumeDisabled
