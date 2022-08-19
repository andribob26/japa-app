import { useState, useRef, useEffect } from 'react'
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import Header from './Header'
import Sidenav from './SideNav'


const Layout = () => {
    const [isAuth, setIsAuth] = useState({
        isLoggedIn: true
    })
    const location = useLocation()
    const sideNavRef = useRef(null)
    const mainRef = useRef(null)
    const loadingRef = useRef(null)
    const [isOpenNav, setIsOpenNav] = useState(false)
    const [screenMd, setScreenMd] = useState(null)

    const startLoading = () => {
        loadingRef.current.continuousStart()
    }

    const showNavHandler = () => {
        const elSideNav = sideNavRef.current
        const elMain = mainRef.current

        setIsOpenNav(!isOpenNav)
        if (screenMd < 768) {
            if (isOpenNav) {
                elSideNav.style.transform = 'translate(-240px)'
                elMain.childNodes[2].style.visibility = 'hidden'
                elMain.childNodes[2].style.opacity = 0
            } else {
                elSideNav.style.transform = 'translate(0px)'
                elMain.childNodes[2].style.visibility = 'visible'
                elMain.childNodes[2].style.opacity = 0.5
            }
        } else {
            if (!isOpenNav) {
                elSideNav.style.transform = 'translate(-240px)'
                elMain.style.marginLeft = '0px'
                elMain.childNodes[0].style.left = '-240px'
            } else {
                elSideNav.style.transform = 'translate(0px)'
                elMain.style.marginLeft = '240px'
                elMain.childNodes[0].style.left = '0px'
            }
        }
    }

    useEffect(() => {
        if (sideNavRef.current !== null) {
            setScreenMd(window.innerWidth)
            window.addEventListener('resize', () => {
                setScreenMd(window.innerWidth)
                setIsOpenNav(false)
                sideNavRef.current.style.transform = null
                mainRef.current.childNodes[0].style.left = null
                mainRef.current.style.marginLeft = null
            })
        }
    }, [])

    useEffect(() => {
        if (loadingRef.current !== null) {
            loadingRef.current.complete()
        }
    }, [location])

    if (!isAuth.isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return (
        <>
            <LoadingBar color='rgb(239 68 68)' ref={loadingRef} shadow={false} />
            <Sidenav innerRef={sideNavRef} startLoading={startLoading} />
            {/* ml 60 untuk push side */}
            <div
                ref={mainRef}
                className={`md:tw-ml-60 tw-transition-all tw-duration-500 tw-ease-in-out`}
            >
                <Header showNavHandler={showNavHandler} isOpenNav={isOpenNav} />
                <span
                    onClick={showNavHandler}
                    className='tw-block md:tw-hidden tw-fixed tw-bg-black tw-w-screen tw-h-full tw-z-10 tw-ransition-all tw-duration-150 tw-ease-in-out'
                    style={{ visibility: 'hidden', opacity: 0 }}
                ></span>
                <div className='tw-p-3'>
                    <div className='tw-mt-20 md:tw-mt-16'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout