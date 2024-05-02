import Link from "next/link";
import { Routes } from "../../constant/routes";
import "./header.css";
function Header() {
  return (
    <header className="dekstop-header position-relative">
      <div className="container">
        <div className="middlerow">
          <div className="row">
            <div className="col-md-2 px-2 my-auto">
              <div className="weblogo">
                <Link href={Routes.DASHBOARD}>
                  <img src="/logo-placeholder.jpeg" alt="Logo" />
                </Link>
              </div>
            </div>

            <div className="col-md-6 px-2 my-auto">
              <form>
                <div className="header-search dkformcontrol position-relative">
                  <input
                    type="text"
                    placeholder="Search for items.."
                    name="productSearch"
                    autoComplete="off"
                  />
                  <button type="button">
                    <img src="/search.svg" alt="" />
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-4 px-2 my-auto">
              <div className="row m-0 justify-content-end">
                <div className="col-md-4 px-2 my-auto">
                  <div className="header-wishlist ">
                    <Link href={Routes.ACCOUNT_WISHLIST}>
                      <p>
                        <span>0</span>
                        <img src="/wishlist.svg" loading="lazy" alt="" />
                        Wishlist
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 px-2 my-auto">
                  <div className="header-cart">
                    <Link href={Routes.CART}>
                      <p>
                        <span>0</span>
                        <img src="/cart.svg" alt="" loading="lazy" />
                        My cart
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 px-2 my-auto">
                  <div className="header-cart">
                    <a>
                      <p>
                        <img src="/icon-user.svg" loading="lazy" alt="" />
                        Login
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
