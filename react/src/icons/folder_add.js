import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const FolderAdd = forwardRef(
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
          transform="translate(3 4)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m.5 1.5v9c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-6.00280762c.000802-1.1045695-.8946285-2-1.999198-2-.0002674 0-.0005348.00000006-.0008018.00080218l-5.0000002.00200544-2-2h-4c-.55228475 0-1 .44771525-1 1z"></path>
          <path d="m5.5 7.5h4"></path>
          <path d="m7.5 9.556v-4.056"></path>
        </g>
      </svg>
    )
  }
)
FolderAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
FolderAdd.displayName = 'FolderAdd'
export default FolderAdd
