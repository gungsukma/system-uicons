import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const ChevronLeftDouble = forwardRef(
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
          transform="translate(5 6)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m8.5 8.5-4-4 4-4"></path>
          <path d="m4.5 8.5-4-4 4-4"></path>
        </g>
      </svg>
    )
  }
)
ChevronLeftDouble.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ChevronLeftDouble.displayName = 'ChevronLeftDouble'
export default ChevronLeftDouble
