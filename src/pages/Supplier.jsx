import React, { useState, memo } from 'react'
// import BootstrapTable from 'react-bootstrap-table-next'
import {
    textFilter,
    selectFilter,
    customFilter,
    FILTER_TYPES
} from 'react-bootstrap-table2-filter'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import AksiFormatter from '../components/supplier/AksiFormatter'
import PageButtonRenderer from '../components/tabel/PageButtonRenderer'
import SizePerPageRenderer from '../components/tabel/SizePerPageRenderer'
import MyDatePicker from '../components/data_picker/MyDatePicker'
import ModalTambah from '../components/supplier/ModalTambah'
import ModalEdit from '../components/supplier/ModalEdit'
import ModalDetail from '../components/supplier/ModalDetail'
import ModalRemove from '../components/supplier/ModalRemove'
import MyTable from '../components/tabel/MyTable'
const classNameFilterForm =
    'tw-form-control tw-flex tw-py-1 tw-px-2 tw-text-xs tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0  focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none'

const Supplier = () => {
    console.log('====================================')
    console.log('page supplier')
    console.log('====================================')

    const data = [
        {
            id: 'e8f796c3-0f1a-4fd0-9a85-1baa3a10e8ee',
            nama: 'Schmitt, Johnston and Kris',
            alamat: '0129 Monument Terrace',
            jenis: 'Sitework & Site Utilities',
            pph: '$3.13',
            ppn: '$3.87',
            npwp: '5602214053275481',
            created_at: '6/7/2022'
        },
        {
            id: '38278e61-67ef-4e3e-b89c-0a535dfa014c',
            nama: 'Schumm, Stroman and Bartell',
            alamat: '4 Elmside Road',
            jenis: 'Curb & Gutter',
            pph: '$3.44',
            ppn: '$1.79',
            npwp: '3587808347630437',
            created_at: '6/2/2022'
        },
        {
            id: '74eb5623-aa88-4ca4-9720-46916d867bfa',
            nama: 'Braun-Stehr',
            alamat: '6 Independence Parkway',
            jenis: 'Structural & Misc Steel Erection',
            pph: '$0.94',
            ppn: '$0.84',
            npwp: '3563913262376376',
            created_at: '3/18/2022'
        },
        {
            id: 'e3aeee1e-937d-43e7-8978-6dad88e9c81b',
            nama: 'Wehner, Padberg and Keeling',
            alamat: '3499 Scoville Plaza',
            jenis: 'Plumbing & Medical Gas',
            pph: '$7.00',
            ppn: '$5.87',
            npwp: '5100139754155632',
            created_at: '7/31/2022'
        }
    ]

    const [isHiden, setIsHiden] = useState({
        alamat: false,
        jenis: false,
        pph: true,
        ppn: true,
        npwp: true,
        created_at: false
    })

    const [valAksi, setValAksi] = useState({
        id: '',
        nama: '',
        alamat: '',
        jenis: '',
        pph: '',
        ppn: '',
        npwp: '',
        created_at: ''
    })

    const defaultToggleColumn = (toggleVal, columnField) => {
        setIsHiden(isHiden => ({
            ...isHiden,
            [columnField]: !toggleVal
        }))
    }

    const showModalHandler = (type, row = null) => {
        console.log('====================================')
        console.log(type)
        console.log('====================================')
        let elModal = null
        if (row !== null) {
            setValAksi(valAksi => ({
                ...valAksi,
                id: row.id,
                nama: row.nama,
                alamat: row.alamat,
                jenis: row.jenis,
                pph: row.pph,
                ppn: row.ppn,
                npwp: row.npwp,
                created_at: row.created_at
            }))
        }

        switch (type) {
            case 'tambah':
                elModal = document.querySelector(`#${type}`)
                break
            case 'detail':
                elModal = document.querySelector(`#${type}`)
                break
            case 'edit':
                elModal = document.querySelector(`#${type}`)
                break
            case 'remove':
                elModal = document.querySelector(`#${type}`)
                break

            default:
                break
        }
        if (elModal !== null) {
            const modal = new window.Modal(elModal)
            modal.show()
        }
    }

    const selectOptions = [{ value: 'Electrical', label: 'Electrical' }]

    const columns = [
        {
            dataField: 'no',
            text: '#',
            sort: false,
            headerStyle: () => ({ width: '50px' }),
            formatter: (cell, row, rowIndex, formatExtraData) => {
                const currentPage = 1
                const rowNumber = (currentPage - 1) * 10 + (rowIndex + 1)
                return rowNumber
            }
        },
        {
            dataField: 'nama',
            text: 'Nama',
            sort: true,
            filter: textFilter({
                placeholder: ' ',
                className: classNameFilterForm
            }),
            headerStyle: () => ({ width: '180px' })
        },
        {
            hidden: isHiden.alamat,
            dataField: 'alamat',
            text: 'Alamat',
            sort: true,
            filter: textFilter({
                placeholder: ' ',
                className: classNameFilterForm
            }),
            headerStyle: () => ({ width: '180px' })
        },
        {
            hidden: isHiden.jenis,
            dataField: 'jenis',
            text: 'Jenis',
            sort: true,
            filter: selectFilter({
                placeholder: 'Pilih',
                options: selectOptions,
                className: classNameFilterForm
            }),
            headerStyle: () => ({ width: '180px' })
        },
        {
            hidden: isHiden.pph,
            dataField: 'pph',
            text: 'PPh',
            sort: true,
            filter: textFilter({
                placeholder: ' ',
                className: classNameFilterForm
            }),
            headerStyle: () => ({ width: '100px' })
        },
        {
            hidden: isHiden.ppn,
            dataField: 'ppn',
            text: 'PPN',
            sort: true,
            filter: textFilter({
                placeholder: ' ',
                className: classNameFilterForm
            }),
            headerStyle: () => ({ width: '100px' })
        },
        {
            hidden: isHiden.npwp,
            dataField: 'npwp',
            text: 'NPWP',
            sort: true,
            filter: textFilter({
                placeholder: ' ',
                className: classNameFilterForm
            }),
            headerStyle: () => ({ width: '180px' })
        },
        {
            hidden: isHiden.created_at,
            dataField: 'created_at',
            text: 'Tanggal',
            sort: true,
            filter: customFilter({
                type: FILTER_TYPES.TEXT
            }),
            filterRenderer: (onFilter, column) => {
                const handleOnChange = date => {
                    onFilter(date)
                }
                return (
                    <div className=''>
                        <MyDatePicker
                            formClassName={`form-control tw-w-full tw-flex tw-py-1 tw-px-2 tw-text-xs tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0  focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none`}
                            handleOnChange={handleOnChange}
                            format={`M/DD/YYYY`}
                        />
                    </div>
                )
            },
            headerStyle: () => ({ width: '150px' })
        },
        {
            dataField: 'aksi',
            text: 'Aksi',
            headerStyle: () => ({ width: '100px' }),
            formatter: (cell, row) => {
                return <AksiFormatter row={row} showModalHandler={showModalHandler} />
            }
        }
    ]

    // const expandRow = {
    //     onlyOneExpanding: true,
    //     className: 'tw-bg-gray-200',
    //     renderer: row => {
    //         return (
    //             <BootstrapTable
    //                 keyField='id'
    //                 classes='m-0'
    //                 data={[
    //                     {
    //                         nama: 'andri',
    //                         telp: '080087996'
    //                     }
    //                 ]}
    //                 columns={[
    //                     {
    //                         dataField: 'nama',
    //                         text: 'Nama'
    //                     },
    //                     {
    //                         dataField: 'telp',
    //                         text: 'Telephone'
    //                     }
    //                 ]}
    //             />
    //         )
    //     },
    //     showExpandColumn: false
    // }

    const options = {
        // sizePerPage: 3,
        custom: true,
        totalSize: data.length,
        // firstPageText: 'First',
        // prePageText: 'Back',
        // nextPageText: 'Next',
        // lastPageText: 'Last',
        // nextPageTitle: 'First page',
        // prePageTitle: 'Pre page',
        // firstPageTitle: 'Next page',
        // lastPageTitle: 'Last page',
        pageButtonRenderer: PageButtonRenderer,
        sizePerPageRenderer: SizePerPageRenderer
    }

    return (
        <>
            <div className='tw-bg-white tw-p-3 tw-rounded-lg'>
                <MyTable
                    data={data}
                    columns={columns}
                    options={options}
                    defaultToggleColumn={defaultToggleColumn}
                    showModalHandler={showModalHandler}
                    expandRow={{}}
                />
            </div>
            <ModalTambah />
            <ModalEdit valAksi={valAksi} />
            <ModalDetail />
            <ModalRemove />
        </>
    )
}


export default memo(Supplier)
