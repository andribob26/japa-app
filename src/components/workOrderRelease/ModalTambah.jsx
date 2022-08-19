import React, { useRef, useState, useEffect } from 'react'
import MyDatePicker from '../data_picker/MyDatePicker'

const ModalTambah = () => {
  const equRef = useRef(null)
  const [selectedEquIdx, setSelectedEquIdx] = useState(null)
  const dataContoh = [
    {
      equipment: 'equipment1',
      items: [
        {
          item: 'item1'
        },
        {
          item: 'item1'
        },
        {
          item: 'item1'
        }
      ]
    },
    {
      equipment: 'equipment2',
      items: [
        {
          item: 'item2'
        },
        {
          item: 'item2'
        }
      ]
    }
  ]

  const equHandler = (e) => {
    setSelectedEquIdx(e.target.selectedIndex - 1)
  }


  useEffect(() => {
    equRef.current.childNodes.forEach(node => {
      node.firstChild.checked = false
    })
  }, [selectedEquIdx])

  return (
    <React.Fragment>
      <div
        className='modal fade tw-fixed tw-top-0 tw-left-0 tw-hidden tw-w-full tw-h-full tw-outline-none tw-overflow-x-hidden tw-overflow-y-auto'
        id='tambah'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='detail'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable tw-relative tw-w-auto tw-pointer-events-none'>
          <div className='modal-content tw-border-none tw-shadow-lg tw-relative tw-flex tw-flex-col tw-w-full tw-pointer-events-auto tw-bg-white tw-bg-clip-padding tw-rounded tw-outline-none tw-text-current'>
            <div className='modal-header tw-flex tw-flex-shrink-0 tw-items-center tw-justify-between tw-py-2 tw-px-6 tw-border-b tw-border-gray-200 tw-rounded-t'>
              <h5
                className='tw-text-xl tw-font-medium tw-leading-normal tw-text-gray-800'
                id='exampleModalLabel'
              >
                Tambah Work Order Release
              </h5>
              <button
                type='button'
                className='tw-btn-close tw-box-content tw-w-4 tw-h-4 tw-p-1 tw-text-black tw-border-none tw-rounded-none tw-opacity-50 focus:tw-shadow-none focus:tw-outline-none focus:tw-opacity-100 hover:tw-text-black hover:tw-opacity-75 hover:tw-no-underline'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body tw-relative tw-py-2 tw-px-6'>
              {/* //content */}
              <form>
                <div className='flex tw-gap-6'>
                  <div className='tw-form-group tw-mb-2 tw-w-1/2'>
                    <label
                      htmlFor='exampleInputEmail2'
                      className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                    >
                      Quotation Number
                    </label>
                    <select
                      defaultValue="default"
                      className='tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                      aria-label='Default select example'
                    >
                      <option value="default" disabled>
                        Pilih Quotation Number
                      </option>
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </select>
                  </div>
                  <div className='tw-form-group tw-mb-2 tw-w-1/2'>
                    <label
                      htmlFor='exampleInputEmail2'
                      className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                    >
                      Customer
                    </label>
                    <input
                      disabled
                      type='text'
                      className='tw-bg-gray-100 tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                      id='nama'
                      placeholder='Customer'
                    />
                  </div>
                </div>
                <div className='tw-flex tw-gap-6'>
                  <div className='tw-form-group tw-mb-2 tw-w-1/2'>
                    <label
                      htmlFor='exampleInputEmail2'
                      className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                    >
                      Adress
                    </label>
                    <input
                      disabled
                      type='text'
                      className='tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-gray-100 tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                      id='jenis'
                      placeholder='Adress'
                    />
                  </div>
                  <div className='tw-form-group tw-mb-2 tw-w-1/2'>
                    <label
                      htmlFor='exampleInputEmail2'
                      className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                    >
                      City
                    </label>
                    <input
                      disabled
                      type='text'
                      className='tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-gray-100 tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                      id='pph'
                      placeholder='City'
                    />
                  </div>
                </div>
                <div className='tw-flex tw-gap-6'>
                  <div className='tw-form-group tw-mb-2 tw-w-1/2'>
                    <label
                      htmlFor='exampleInputEmail2'
                      className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                    >
                      Contact
                    </label>
                    <input
                      disabled
                      type='text'
                      className='tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-gray-100 tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                      id='jenis'
                      placeholder='Adress'
                    />
                  </div>
                  <div className='tw-form-group tw-mb-2 tw-w-1/2'>
                    <label
                      htmlFor='exampleInputEmail2'
                      className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                    >
                      Email
                    </label>
                    <input
                      type='text'
                      className='tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                      id='pph'
                      placeholder='Email'
                    />
                  </div>
                </div>
                <div className='form-group mb-2'>
                  <label
                    htmlFor='exampleInputEmail2'
                    className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    className='tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                    id='pph'
                    placeholder='Subject pekerjaan'
                  />
                </div>
                <div className='form-group mb-2'>
                  <label
                    htmlFor='exampleInputEmail2'
                    className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                  >
                    Job Description
                  </label>
                  <textarea
                    type='textarea'
                    className='tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                    id='npwp'
                    rows='3'
                    placeholder='Job description'
                  />
                </div>
                <div className='tw-flex tw-gap-6'>
                  <div className='tw-form-group tw-mb-2 tw-w-1/2'>
                    <label
                      htmlFor='exampleInputEmail2'
                      className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                    >
                      No SPK
                    </label>
                    <input
                      disabled
                      type='text'
                      className='tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-gray-100 tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                      id='jenis'
                      placeholder='No SPK'
                    />
                  </div>
                  <div className='tw-form-group tw-mb-2 tw-w-1/2'>
                    <label
                      htmlFor='exampleInputEmail2'
                      className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                    >
                      Sales
                    </label>
                    <div className='flex'>
                      <select
                        defaultValue="default"
                        className='tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded-l tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                        aria-label='Default select example'
                      >
                        <option value="default" disabled>
                          Pilih Sales
                        </option>
                        <option value='1'>One</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                      </select>
                      <input
                        type='number'
                        className='tw-bg-white tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded-r tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                        id='nama'
                        placeholder='Nilai kontrak'
                      />
                    </div>
                  </div>
                </div>
                <div className='tw-flex tw-gap-6'>
                  <div className='tw-form-group tw-mb-2 tw-w-1/2'>
                    <label
                      htmlFor='exampleInputEmail2'
                      className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                    >
                      Priority Status
                    </label>
                    <div className='flex'>
                      <select
                        defaultValue="default"
                        className='tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded-l tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                        aria-label='Default select example'
                      >
                        <option value="default" disabled>
                          Pilih Priority Status
                        </option>
                        <option value='1'>One</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                      </select>
                      <input
                        type='number'
                        className='tw-bg-white tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded-r tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                        id='nama'
                        placeholder='Qty'
                      />
                    </div>
                  </div>
                  <div className='tw-form-group tw-mb-2 tw-w-1/2'>
                    <label
                      htmlFor='exampleInputEmail2'
                      className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                    >
                      Unit
                    </label>
                    <input
                      disabled
                      type='text'
                      className='tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                      id='jenis'
                      placeholder='Unit'
                    />
                  </div>
                </div>
                <div className='tw-flex tw-gap-6'>
                  <div className='tw-form-group tw-mb-2 tw-w-1/2'>
                    <label
                      htmlFor='exampleInputEmail2'
                      className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                    >
                      Date Of Order
                    </label>
                    <MyDatePicker
                      formClassName={`tw-text-left tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none`}
                      handleOnChange={(date) => { }}
                      format={`M/DD/YYYY`}
                    />
                  </div>
                  <div className='tw-form-group tw-mb-2 tw-w-1/2'>
                    <label
                      htmlFor='exampleInputEmail2'
                      className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                    >
                      Delivery Date
                    </label>
                    <MyDatePicker
                      formClassName={`tw-text-left tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none`}
                      handleOnChange={(date) => { }}
                      format={`M/DD/YYYY`}
                    />
                  </div>
                </div>
                <div className='form-group mb-2'>
                  <label
                    htmlFor='exampleInputEmail2'
                    className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                  >
                    Shipping Address
                  </label>
                  <textarea
                    type='textarea'
                    className='tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                    id='npwp'
                    rows='3'
                    placeholder='Shipping Address'
                  />
                </div>
                <div className='form-group mb-2'>
                  <label
                    htmlFor='exampleInputEmail2'
                    className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                  >
                    Estimate Man Hour
                  </label>
                  <input
                    type='number'
                    className='tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                    id='npwp'
                    placeholder='Estimate Man Hour 	'
                  />
                </div>
                <div className='tw-flex tw-gap-6'>
                  <div className='tw-form-group tw-mb-2 tw-w-1/2'>
                    <label
                      htmlFor='exampleInputEmail2'
                      className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                    >
                      Equipment
                    </label>
                    <select
                      defaultValue="default"
                      onChange={equHandler}
                      className='tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                      aria-label='Default select example'
                    >
                      <option value="default" disabled>
                        Pilih Equipment
                      </option>
                      {
                        dataContoh.map((equ, idx) => {
                          return (
                            <option key={idx} value={equ.equipment}>{equ.equipment}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <div className='tw-form-group tw-mb-2 tw-w-1/2'>
                    <label
                      htmlFor='exampleInputEmail2'
                      className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                    >
                      Items
                    </label>
                    <div
                      ref={equRef}
                      className='tw-flex tw-flex-wrap tw-gap-3 tw-min-h-[37px] tw-form-control tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                    >
                      {
                        selectedEquIdx !== null &&
                        dataContoh[selectedEquIdx].items.map((item, idx) => {
                          return (
                            <div key={idx} className="tw-form-check">
                              <input
                                onChange={(e) => {
                                  equRef.current.childNodes.forEach(node => {
                                    if (node.firstChild.id === 'all') {
                                      node.firstChild.checked = false
                                    }
                                  })
                                }}
                                className="tw-form-check-input tw-appearance-none tw-h-4 tw-w-4 tw-border tw-border-gray-300 tw-rounded tw-bg-white checked:tw-bg-blue-600 checked:tw-border-blue-600 focus:tw-outline-none tw-transition tw-duration-200 tw-mt-[1px] tw-align-top tw-bg-no-repeat tw-bg-center tw-bg-contain tw-float-left tw-mr-2 tw-cursor-pointer"
                                type="checkbox"
                                value={item.item}
                                id="flexCheckDefault" />
                              <label className="tw-form-check-label tw-m-0 tw-inline-block tw-text-gray-700" htmlFor="flexCheckDefault">
                                {item.item}
                              </label>
                            </div>
                          )
                        })

                      }
                      {selectedEquIdx !== null &&
                        <div className="tw-form-check">
                          <input
                            onChange={(e) => {
                              console.log(JSON.parse(e.target.value));
                              equRef.current.childNodes.forEach(node => {
                                if (node.firstChild.id !== 'all') {
                                  node.firstChild.checked = false
                                }
                              })
                            }}
                            className="tw-form-check-input tw-appearance-none tw-h-4 tw-w-4 tw-border tw-border-gray-300 tw-rounded tw-bg-white checked:tw-bg-blue-600 checked:tw-border-blue-600 focus:tw-outline-none tw-transition tw-duration-200 tw-mt-[1px] tw-align-top tw-bg-no-repeat tw-bg-center tw-bg-contain tw-float-left tw-mr-2 tw-cursor-pointer"
                            type="checkbox"
                            value={JSON.stringify(dataContoh[selectedEquIdx].items)}
                            id="all" />
                          <label className="tw-form-check-label tw-m-0 tw-inline-block tw-text-gray-700" htmlFor="flexCheckDefault">
                            all
                          </label>
                        </div>
                      }
                    </div>
                  </div>
                </div>
                <div className='form-group mb-2'>
                  <label
                    htmlFor='exampleInputEmail2'
                    className='tw-form-label tw-text-sm tw-font-bold tw-inline-block tw-mb-2 tw-text-gray-700'
                  >
                    Scope Of Work
                  </label>
                  <textarea
                    type='textarea'
                    className='tw-form-control tw-block tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-normal  tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'
                    id='npwp'
                    rows='3'
                    placeholder='Scope of work'
                  />
                </div>
              </form>
            </div>
            <div className='modal-footer tw-flex tw-flex-shrink-0 tw-flex-wrap tw-items-center tw-justify-end tw-py-2 tw-px-6 tw-border-t tw-border-gray-200 tw-rounded-b-md'>
              <button
                type='button'
                className='tw-inline-block tw-px-6 tw-py-2 tw-bg-red-500 tw-text-white tw-font-bold tw-text-xs tw-rounded tw-duration-150 tw-ease-in-out'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button
                type='button'
                className='tw-inline-block tw-px-6 tw-py-2 tw-bg-red-500 tw-text-white tw-font-bold tw-text-xs tw-rounded tw-duration-150 tw-ease-in-out'
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ModalTambah
