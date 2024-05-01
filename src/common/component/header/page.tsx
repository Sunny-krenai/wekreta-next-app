import Link from "next/link"
import { Routes } from "../../constant/routes";
import "./header.css";
function Header() {
    return (
        <header className="dekstop-header position-relative" >


            <div className="container">
                <div className="middlerow">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <div className="weblogo">
                                <Link href={Routes.DASHBOARD}>
                                    <img src="/logo-placeholder.jpeg"
                                        alt="Logo" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-span-6">
                            <form >
                                <div className="header-search dkformcontrol position-relative">
                                    <input type="text" placeholder="Search for items.." name="productSearch"
                                        autoComplete="off" />
                                    <button type="button" >
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M11.168 4C7.30198 4 4.16797 7.13401 4.16797 11C4.16797 14.866 7.30198 18 11.168 18C15.034 18 18.168 14.866 18.168 11C18.168 7.13401 15.034 4 11.168 4ZM2.16797 11C2.16797 6.02944 6.19741 2 11.168 2C16.1385 2 20.168 6.02944 20.168 11C20.168 15.9706 16.1385 20 11.168 20C6.19741 20 2.16797 15.9706 2.16797 11Z"
                                            />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M16.1093 15.9428C16.4998 15.5523 17.133 15.5523 17.5235 15.9428L21.8735 20.2928C22.264 20.6833 22.264 21.3165 21.8735 21.707C21.483 22.0975 20.8498 22.0975 20.4593 21.707L16.1093 17.357C15.7188 16.9665 15.7188 16.3333 16.1093 15.9428Z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form >
                        </div >
                        <div className="col-span-4">
                            <div className="row-auto m-0 justify-content-end">
                                <div className="col-span-4 px-2">
                                    <div className="header-wishlist " >
                                        <Link href={Routes.ACCOUNT_WISHLIST}>
                                            <p>
                                                <span>0</span>
                                                <img src="/wishlist.svg" loading="lazy" alt="" />
                                                Wishlist
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-span-4 px-2">
                                    <div className="header-cart" >
                                        <Link href={Routes.CART}>
                                            <p>
                                                <span>0</span>
                                                <img src="/cart.svg" alt="" loading="lazy" />
                                                My cart
                                            </p>
                                        </Link>
                                    </div >
                                </div >
                                <div className="col-span-4 px-2">
                                    <div className="header-cart">

                                        <a>
                                            <p><img src="/icon-user.svg" loading="lazy" alt="" />Login</p>
                                        </a>
                                    </div >

                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            </div >

        </header >
    );
}

export default Header;