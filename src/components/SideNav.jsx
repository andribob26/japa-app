import React, { useMemo, useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { MdDashboard, MdKeyboardArrowRight, MdContentPaste } from 'react-icons/md'

const menuNav = [
    {
        id: 'dashboard',
        link: "/",
        title: "Dashboard",
        icon: MdDashboard,
        subMenu: null
    },
    {
        id: 'supplier',
        link: "/supplier",
        title: "Supplier",
        icon: MdContentPaste,
        subMenu: null
    },
    {
        id: 'customer',
        link: "/customer",
        title: "Customer",
        icon: MdContentPaste,
        subMenu: null
    },
    {
        id: 'employe',
        link: "/employe",
        title: "Employe",
        icon: MdContentPaste,
        subMenu: null
    },
    {
        id: 'quotation',
        link: "/quotation",
        title: "Quotation",
        icon: MdContentPaste,
        subMenu: null
    },
    {
        id: 'work-order-release',
        link: "/work-order-release",
        title: "Work Order Release",
        icon: MdContentPaste,
        subMenu: null
    },

    // {
    //     id: 'testing',
    //     link: "/testing",
    //     title: "Testing",
    //     icon: <MdEngineering />,
    //     subMenu: [
    //         {
    //             id: 'testingsub1',
    //             link: "/testing/testingsub1",
    //             title: "Testing1",
    //             icon: <MdEngineering />,
    //             subMenu: null
    //         },
    //         {
    //             id: 'testingsub2',
    //             link: "/testingsub2",
    //             title: "Testing2",
    //             icon: <MdEngineering />,
    //             subMenu: null
    //         }
    //     ]
    // },




]

const Sidenav = ({ innerRef, startLoading }) => {
    const location = useLocation()
    const [subMenuId, setsubMenuId] = useState('')
    
    const headerTitle = useMemo(() => {
        return location.pathname.split("/")
    }, [location.pathname])
    const [headerBar, setHeaderBar] = useState({
        title: headerTitle[1] !== '' ? headerTitle[1] : 'dashboard',
        subtitle: headerTitle[2] !== undefined ? headerTitle[2] : '',
    })

    const subNavHandler = (e) => {
        if (subMenuId !== e.currentTarget.id) {
            setsubMenuId(e.currentTarget.id)
        } else {
            setsubMenuId('')
        }
    }

    useEffect(() => {
        const expandedMenu = document.querySelectorAll('.expanded')
        let elSub = null
        expandedMenu.forEach((el) => {
            elSub = el.nextElementSibling
            if (el.id === subMenuId) {
                const elSubHeight = (elSub.children[0].offsetHeight)
                const elSubLength = elSub.childElementCount
                const elHeight = ((elSubHeight * elSubLength))
                elSub.style.maxHeight = (elHeight) + 'px'
            } else {
                elSub.style.maxHeight = '0px'
            }
        })
    }, [subMenuId]);

    useEffect(() => {
        setHeaderBar((headerBar) => ({
            ...headerBar,
            title: headerTitle[1] !== '' ? headerTitle[1] : 'dashboard',
            subtitle: headerTitle[2] !== undefined ? headerTitle[2] : ''
        }))
    }, [location, headerTitle])

    return (
        <div ref={innerRef} className="tw--translate-x-60 md:tw-translate-x-0 tw-z-20 tw-overflow-auto tw-w-60 tw-h-full tw-bg-sky-100 tw-fixed tw-transition-all tw-duration-500 tw-ease-in-out">
            <ul className="tw-relative tw-mt-20 tw-mb-6">
                {
                    menuNav.map((m) => {
                        return (
                            <li key={m.id} className="tw-relative">

                                {
                                    m.subMenu === null ?

                                        <Link onClick={startLoading} to={m.link} className={`${headerBar.title === m.id ? 'tw-text-white hover:tw-text-white' : 'tw-text-gray-700 hover:tw-text-gray-700'} tw-relative tw-flex parent tw-items-center tw-py-2 tw-px-6 tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap tw-transition tw-duration-300 tw-ease-in-out`}>
                                            {<m.icon />}
                                            <span className="tw-ml-2 tw-font-semibold">{m.title}</span>
                                            <span className={` ${headerBar.title === m.id ? 'tw-bg-red-500' : 'tw-bg-sky-100 parent-hover:myHover'} tw--z-10 tw-rounded tw-left-4 tw-right-4 tw-h-9 tw-absolute tw-transition-all tw-duration-300`}></span>
                                        </Link>

                                        :
                                        <button id={m.id} onClick={subNavHandler} className={`tw-text-gray-700 tw-relative parent expanded tw-flex tw-w-full tw-items-center tw-py-2 tw-px-6 tw-overflow-hidden  tw-text-ellipsis tw-whitespace-nowrap tw-rounded-lg tw-transition tw-duration-300 tw-ease-in-out`}>
                                            <MdDashboard />
                                            <span className="tw-ml-2 tw-font-semibold">{m.title}</span>
                                            <MdKeyboardArrowRight className={`${subMenuId === m.id ? 'tw-rotate-90' : 'tw-rotate-0'} tw-ml-auto tw-transition tw-duration-300`} />
                                            <span className={` tw--z-10 tw-rounded tw-left-4 tw-right-4 parent-hover:myHover tw-h-9 tw-absolute tw-transition-all tw-duration-300`}></span>
                                        </button>

                                }

                                {
                                    m.subMenu !== null &&
                                    <ul className="tw-relative tw-ml-6 tw-overflow-hidden tw-max-h-0 tw-transition-all tw-duration-300" id="collapseOrderNav">
                                        {
                                            m.subMenu.map((sm) => {
                                                return (
                                                    <li key={sm.id} className="tw-relative">

                                                        <Link onClick={startLoading} to={sm.link} className={`${headerBar.subtitle === sm.id ? 'tw-text-white hover:tw-text-white' : 'tw-text-gray-700 hover:tw-text-gray-700'} tw-flex tw-relative parent tw-items-center tw-py-2 tw-px-6 tw-overflow-hidden tw-text-gray-700 tw-text-ellipsis tw-whitespace-nowrap tw-transition tw-duration-300 tw-ease-in-out`}>
                                                            <span className="tw-ml-2 tw-font-medium">{sm.title}</span>
                                                            <span className={`${headerBar.subtitle === sm.id ? 'tw-bg-red-500' : 'tw-bg-sky-200 parent-hover:myHover'} tw--z-10  tw-left-4 tw-right-4 tw-rounded tw-h-9 tw-absolute tw-transition-all tw-duration-300`}></span>
                                                            <span className="tw-absolute tw-h-10 tw-w-[2px] tw-bg-gray-500 tw-left-[7px]"></span>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Sidenav