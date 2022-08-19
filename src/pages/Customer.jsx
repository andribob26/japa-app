import React, { useState, memo } from 'react'
// import BootstrapTable from 'react-bootstrap-table-next'
import {
    textFilter,
    // selectFilter,
    // customFilter,
    // FILTER_TYPES
} from 'react-bootstrap-table2-filter'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import AksiFormatter from '../components/customer/AksiFormatter'
import PageButtonRenderer from '../components/tabel/PageButtonRenderer'
import SizePerPageRenderer from '../components/tabel/SizePerPageRenderer'
// import MyDatePicker from '../components/data_picker/MyDatePicker'
import ModalTambah from '../components/customer/ModalTambah'
import ModalEdit from '../components/customer/ModalEdit'
import ModalDetail from '../components/customer/ModalDetail'
import ModalRemove from '../components/customer/ModalRemove'
import MyTable from '../components/tabel/MyTable'
const classNameFilterForm =
    'tw-form-control tw-flex tw-py-1 tw-px-2 tw-text-xs tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0  focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-sky-600 focus:tw-outline-none'

const Customer = () => {
    console.log('====================================')
    console.log('page customer')
    console.log('====================================')

    const data = [
        {
            id: '8357ac5e-8b2e-4b5b-9bed-2469ad300072',
            nama: 'Rahel Kittiman',
            alamat: '21353 Loftsgordon Trail',
            telephone: '157-110-8851',
            email: 'rkittiman19@arstechnica.com'
        },
        {
            id: '0c97dcc7-10cd-46ff-9b94-c16b9e2733b6',
            nama: 'Dominica Kelk',
            alamat: '55 Logan Drive',
            telephone: '614-486-5171',
            email: 'dkelk1a@w3.org'
        },
        {
            id: 'b21596f3-f4da-42ff-840a-73ca5b29088f',
            nama: 'Eada Wentworth',
            alamat: '6014 Bayside Trail',
            telephone: '376-586-7655',
            email: 'ewentworth1b@adobe.com'
        },
        {
            id: '62abb79e-5b89-46ac-9cee-f25595afc619',
            nama: 'Stanislaus Gilli',
            alamat: '40 Fremont Junction',
            telephone: '194-800-6775',
            email: 'sgilli1c@latimes.com'
        },
        {
            id: '51f4cc0e-9ab1-4594-ae84-d88e42e0d4e5',
            nama: 'Robinet Riche',
            alamat: '700 Caliangt Hill',
            telephone: '705-552-8096',
            email: 'rriche1d@tamu.edu'
        }
    ]

    const [isHiden, setIsHiden] = useState({
        alamat: false,
        telephone: false,
        email: false
    })

    const [valAksi, setValAksi] = useState({
        id: '',
        nama: '',
        alamat: '',
        telephone: '',
        email: ''
    })

    const defaultToggleColumn = (toggleVal, columnField) => {
        setIsHiden(isHiden => ({
            ...isHiden,
            [columnField]: !toggleVal
        }))
    }

    const showModalHandler = (type, row = null) => {
        let elModal = null
        if (row !== null) {
            setValAksi(valAksi => ({
                ...valAksi,
                id: row.id,
                nama: row.nama,
                alamat: row.alamat,
                telephone: row.telephone,
                email: row.email
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

    // const selectOptions = [{ value: 'Electrical', label: 'Electrical' }]

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
            hidden: isHiden.telephone,
            dataField: 'telephone',
            text: 'Telephone',
            sort: true,
            filter: textFilter({
                placeholder: ' ',
                className: classNameFilterForm
            }),
            headerStyle: () => ({ width: '180px' })
        },
        {
            hidden: isHiden.email,
            dataField: 'email',
            text: 'Email',
            sort: true,
            filter: textFilter({
                placeholder: ' ',
                className: classNameFilterForm
            }),
            headerStyle: () => ({ width: '180px' })
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

export default memo(Customer)
