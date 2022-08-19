import React, { memo, useEffect } from 'react'

const CustomToggleColumn = ({
  columns,
  onColumnToggle,
  toggles,
  defaultToggleColumn
}) => {
  return (
    <ul
      aria-labelledby='dropdownColumnToggle'
      className=' dropdown-menu tw-min-w-max tw-w-32 tw-absolute tw-bg-white tw-text-base tw-float-left tw-py-2 tw-list-none tw-text-left tw-rounded tw-shadow-lg tw-mt-1 tw-hidden tw-m-0 tw-bg-clip-padding tw-border tw-border-solid'
    >
      {columns.map(column => {
        if (
          column.text !== '#' &&
          column.text !== 'Nama' &&
          column.text !== 'Aksi'
        ) {
          return (
            <li
              key={column.dataField}
              onClick={e => {
                e.stopPropagation()
              }}
              className='hover:tw-bg-gray-100 tw-px-2 tw-transition tw-duration-300 tw-ease-in-out'
            >
              <div className='tw-relative tw-form-check tw-flex tw-items-center tw-text-sm tw-py-2 tw-px-2 tw-font-normal tw-w-full tw-whitespace-nowrap tw-bg-transparent tw-text-gray-700 tw-cursor-pointer'>
                <input
                  onChange={() => {
                    onColumnToggle(column.dataField)
                    defaultToggleColumn(
                      toggles[column.dataField],
                      column.dataField
                    )
                  }}
                  className='tw-z-10 tw-form-check-input tw-appearance-none tw-h-4 tw-w-4 tw-border tw-border-gray-300 tw-rounded-sm tw-bg-white checked:tw-bg-blue-600 checked:tw-border-blue-600 focus:tw-outline-none tw-transition tw-duration-200 tw-align-top tw-bg-no-repeat tw-bg-center tw-bg-contain tw-float-left tw-mr-2 tw-cursor-pointer'
                  type='checkbox'
                  value=''
                  id={column.dataField}
                  checked={toggles[column.dataField]}
                />
                <label
                  className='tw-absolute tw-top-[6px] tw-pl-6 tw-form-check-label tw-inline-block tw-text-gray-800'
                  htmlFor='flexCheckDefault'
                >
                  {column.text}
                </label>
              </div>
            </li>
          )
        }
      })}
    </ul>
  )
}

export default CustomToggleColumn
