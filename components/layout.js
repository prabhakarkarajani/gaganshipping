import Head from 'next/head';
import { useRouter } from 'next/router';
const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Who We Are' },
    { href: '/service/portagency', label: 'Service' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contactus', label: 'Contact Us' }
]

export default function Layout({ children, title = 'Gaganshipping', href }) {
    const router = useRouter()
    const handleClick = (e, href) => {
        e.preventDefault()
        router.push(href)
    }
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <nav className="flex items-center justify-between flex-wrap bg-white-100 p-2 px-8 border-b-2 border-gray-200">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img className="h-10 w-auto sm:h-18  logo" src={'../images/logo_new.jpeg'} />
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        {links.map(({ href, label }) => (
                            <div className="inline-block h-auto">
                                <a href={href} key={label} onClick={(e) => { handleClick(e, href) }} className={`btn block mt-4 pr-4 lg:inline-block lg:mt-0 hover:text-blue-600 transition duration-150 ease-in-out mr-4  uppercase ${router.asPath.split('/')[1] === href.split('/')[1] ? 'active' : ''}`} >{label}</a>
                            </div>
                        ))}
                    </div>
                    <div className="nav-helpertext">

                        <svg viewBox="0 0 20 20" fill="currentColor" className="support w-4 h-5 mx-2"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                        custom care suport 24/7  call us
  <svg viewBox="0 0 20 20" fill="currentColor" className="phone w-4 h-5 mx-2"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
  7799209295</div>
                </div>
            </nav>
            <div className="pageload-effect">{children}</div>
            <footer >
                <div className="flex items-center justify-between flex-wrap bg-gray-100 py-2 px-8 border-t-2 border-gray-200">
                    <div class="w-1/4 h-12">
                        <img className="h-10 w-auto sm:h-18  logo" src={'../images/logo_new.jpeg'} />
                    </div>
                    <div class="w-3/4 h-12 text-right footer-copyrights pr-4">
                        Copyright &copy; 2020 gaganshipping pvt ltd. All rights reseverd.
                </div>
                </div>
            </footer>
        </div>
    )
}