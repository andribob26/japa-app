import React, { useEffect } from 'react'
import { FaFileCsv } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import BootstrapTable from 'react-bootstrap-table-next'
import filterFactory from 'react-bootstrap-table2-filter'
import paginationFactory, {
  PaginationProvider,
  PaginationTotalStandalone,
  PaginationListStandalone,
  SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator'
import ToolkitProvider, { ColumnToggle } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit'
import CustomToggleColumn from './CustomToggleColumn'
const MyTable = ({
  data,
  columns,
  expandRow,
  options,
  defaultToggleColumn,
  showModalHandler
}) => {
  useEffect(() => {
    const container = document.querySelector('.table-isScroll')

    let startY
    let startX
    let scrollLeft
    let scrollTop
    let isDown

    container.addEventListener('mousedown', e => mouseIsDown(e))
    container.addEventListener('mouseup', e => mouseUp(e))
    container.addEventListener('mouseleave', e => mouseLeave(e))
    container.addEventListener('mousemove', e => mouseMove(e))

    function mouseIsDown (e) {
      isDown = true
      startY = e.pageY - container.offsetTop
      startX = e.pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
      scrollTop = container.scrollTop
    }
    function mouseUp (e) {
      isDown = false
    }
    function mouseLeave (e) {
      isDown = false
    }
    function mouseMove (e) {
      if (isDown) {
        e.preventDefault()
        const y = e.pageY - container.offsetTop
        const walkY = y - startY
        container.scrollTop = scrollTop - walkY
        const x = e.pageX - container.offsetLeft
        const walkX = x - startX
        container.scrollLeft = scrollLeft - walkX
      }
    }
  }, [])
  return (
    <ToolkitProvider keyField='id' data={data} columns={columns} columnToggle>
      {props => {
        return (
          <PaginationProvider pagination={paginationFactory(options)}>
            {({ paginationProps, paginationTableProps }) => (
              <div>
                <div className='tw-flex tw-items-center tw-justify-between tw-mb-2'>
                  <div className='tw-flex tw-items-center tw-gap-2'>
                    <button
                      onClick={() => {
                        showModalHandler('tambah')
                      }}
                      type='button'
                      className='tw-inline-block tw-px-6 tw-py-2 tw-bg-red-500 hover:tw-shadow-md tw-text-white tw-font-bold tw-text-xs tw-rounded tw-duration-300 tw-ease-in-out'
                    >
                      Tambah
                    </button>
                    <SizePerPageDropdownStandalone {...paginationProps} />
                  </div>

                  <div className='tw-flex tw-items-center tw-gap-2'>
                    <button
                      type='button'
                      className='tw-flex hover:tw-bg-gray-100 tw-rounded tw-p-2 tw-items-center tw-font-bold tw-text-xs tw-duration-150 tw-ease-in-out'
                    >
                      <FaFileCsv size={16} />
                    </button>
                    <div>
                      <button
                        id='dropdownColumnToggle'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                        type='button'
                        className='hover:tw-text-gray-500 hover:tw-bg-gray-200 tw-rounded-full tw-p-2 tw-relative tw-flex tw-items-center tw-font-bold tw-duration-150 tw-ease-in-out'
                      >
                        <MdSettings
                          size={16}
                          className='tw-rotate-0 hover:tw-rotate-180 tw-transition-all tw-duration-300'
                        />
                      </button>
                      <CustomToggleColumn
                        {...props.columnToggleProps}
                        defaultToggleColumn={defaultToggleColumn}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <BootstrapTable
                    wrapperClasses='tw-overflow-x-auto table-isScroll tw-cursor-default'
                    classes='tw-m-0 tw-border-none'
                    // headerWrapperClasses='tw-relative'
                    headerClasses='tw-text-sm'
                    bodyClasses='tw-text-sm digiTable'
                    hover={true}
                    {...props.baseProps}
                    expandRow={expandRow}
                    filter={filterFactory()}
                    noDataIndication='Table is Empty'
                    {...paginationTableProps}
                  />
                </div>

                <div className='tw-mt-2 tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between'>
                  <div className='tw-text-xs'>
                    <PaginationTotalStandalone {...paginationProps} />
                  </div>
                  <div className='tw-text-xs tw-mt-2 md:tw-mt-0'>
                    <PaginationListStandalone {...paginationProps} />
                  </div>
                </div>
              </div>
            )}
          </PaginationProvider>
        )
      }}
    </ToolkitProvider>
  )
}

export default MyTable
