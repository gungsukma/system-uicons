import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const User = forwardRef(
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
          transform="translate(3 2)"
          fillRule="evenodd"
          strokeLinejoin="round"
        >
          <path
            d="m8.5 2.5 2 2c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3z"
            strokeLinecap="round"
          ></path>
          <path d="m2.5 10v-4.5c0-2.76142375 2.23857625-5 5-5 2.7614237 0 5 2.23857625 5 5v4.5"></path>
          <path
            d="m14.5 14.5c0-.2427251 0-.4854502 0-.7281753 0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z"
            strokeLinecap="round"
          ></path>
        </g>
      </svg>
    )
  }
)
User.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
User.displayName = 'User'
export default User
