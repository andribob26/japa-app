import React, { useState, useCallback, useEffect, forwardRef } from 'react'
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdClose
} from 'react-icons/md'
import { getMonth, getYear, isMatch } from 'date-fns'
import range from 'lodash.range'
import moment from 'moment'

import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import id from 'date-fns/locale/id'
registerLocale('id', id)

const MyDatePicker = ({ myClassName, formClassName, handleOnChange, format }) => {
  console.log("my data picker");
  const [startDate, setStartDate] = useState('mm/dd/yyyy')
  const [selectedValue, setSelectedValue] = useState('')
  const years = range(1990, getYear(new Date()) + 1, 1)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]



  const removeHanndler = () => {
    setStartDate('mm/dd/yyyy')
    setSelectedValue('')
  }

  const handleChangeRaw = value => {
    setStartDate(value)
  }
  const handleChange = date => {
    setSelectedValue(date)
  }

  const isValidDate = val => new Date(val).toString() !== 'Invalid Date'
  const focousOut = value => {
    if (!isValidDate(value)) {
      setStartDate('mm/dd/yyyy')
      setSelectedValue('')
    }
  }

  useEffect(() => {
    if (!isValidDate(selectedValue)) {
      handleOnChange('')
    } else {
      handleOnChange(moment(selectedValue).format(`${format}`))
    }
  }, [selectedValue])

  /* eslint-disable react/display-name */
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <>
      <button
        className={formClassName}
        onClick={e => {
          e.preventDefault()
          e.stopPropagation()
          onClick()
        }}
        ref={ref}
      >
        {value}
      </button>
      {selectedValue !== '' && (
        <button
          className='tw-absolute tw-right-1 tw-top-1'
          onClick={e => {
            e.stopPropagation()
            removeHanndler()
          }}
        >
          <MdClose />
        </button>
      )}
    </>
  ))

  const MyContainer = ({ className, children }) => {
    return (
      <div onClick={e =>e.stopPropagation()} className="tw-cursor-default">
        <div className={className}>
          <div>{children}</div>
        </div>
      </div>
    );
  };

  const datePockerHeader = ({
    changeYear,
    changeMonth,
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled
  }) => {
    return (
      <div className=' tw-text-base tw-font-semibold tw-flex tw-items-center tw-justify-between tw-px-3'>
        <button
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
        >
          <MdKeyboardArrowLeft />
        </button>
        {/* <span>{moment(date).format('MMMM YYYY')}</span> */}
        <select
          className='tw-text-sm tw-text-gray-700 tw-bg-white'
          value={getYear(date)}
          onChange={(e) => {
            changeYear(e.target.value)
          }}
        >
          {years.map(option => (
            <option
              key={option}
              value={option}
              className='tw-text-sm tw-text-gray-700 tw-font-normal'
            >
              {option}
            </option>
          ))}
        </select>

        <select
          className='tw-text-sm tw-text-gray-700 tw-bg-white'
          value={months[getMonth(date)]}
          onChange={(e) => {
            changeMonth(months.indexOf(e.target.value))
          }}
        >
          {months.map(option => (
            <option
              key={option}
              value={option}
              className='tw-text-sm tw-text-gray-700 tw-font-normal'
            >
              {option}
            </option>
          ))}
        </select>

        <button
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    )
  }

  return (
    <div className='tw-w-full'>
      { }
      <DatePicker
        // selected={startDate}
        selected={selectedValue}
        value={startDate}
        // value={moment(startDate).format('MMMM YYYY')}
        onChange={handleChange}
        onChangeRaw={e => {
          e.stopPropagation()
          handleChangeRaw(e.target.value)
        }}
        onBlur={e => {
          e.stopPropagation()
          focousOut(e.target.value)
        }}
        className={myClassName}
        locale='id'
        showYearDropdown
        customInput={<CustomInput />}
        // showTimeSelect
        // timeIntervals={5}
        // timeFormat="p"
        // dateFormat="Pp"
        renderCustomHeader={datePockerHeader}
        calendarContainer={MyContainer}
      />
    </div>
  )
}

export default MyDatePicker
