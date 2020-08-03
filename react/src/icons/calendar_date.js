import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const CalendarDate = forwardRef(
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
        <g fill="none" transform="translate(2 2)" fillRule="evenodd">
          <path
            d="m2.5.5h12c1.1045695 0 2 .8954305 2 2v11.9903615c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-11.9903615c0-1.1045695.8954305-2 2-2z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="m.659 4.5h15.841"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="m4.81640625 11.1552734v-1.0791015h.87890625c.66894531 0 1.12304688-.39550784 1.12304688-.97167971 0-.52734375-.41503907-.92773438-1.10351563-.92773438-.71289063 0-1.15234375.36621094-1.20117187.99609375h-1.36230469c.04882812-1.29882812 1.04980469-2.17285156 2.63671875-2.17285156 1.5625 0 2.43164062.86425781 2.42675781 1.89453125-.00488281.85449219-.54199219 1.41601565-1.29882813 1.60156255v.0927734c.98144532.1416016 1.57714844.7666016 1.57714844 1.7089844 0 1.2353515-1.16210937 2.109375-2.75390625 2.109375-1.59179687 0-2.67578125-.8691407-2.73925781-2.2021485h1.41113281c.04394531.5957031.55175781.9765625 1.30859375.9765625.74707032 0 1.26953125-.4052734 1.26953125-1.015625 0-.625-.48828125-1.0107422-1.27929687-1.0107422zm6.69433595 3.0712891v-5.61035156h-.0878906l-1.72851566 1.19140625v-1.37207031l1.82128906-1.25488282h1.4697266v7.04589844z"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    )
  }
)
CalendarDate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
CalendarDate.displayName = 'CalendarDate'
export default CalendarDate
