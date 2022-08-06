import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import useLocalize from "i18n/i18n";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavLink,
  NavbarToggler,
  Input,
} from "reactstrap";
import Image from "next/image";
import {
  deleteSearchKeyword,
  getSearchKeyword,
  getSearchResult,
  getTrendingProductList,
} from "redux/action/searchAction";
import { getCookie } from "commonjs/common";

//components import
import Login from "components/Login/Login";
import PincodeFunc from "components/PinCode/PinCode";
import SearchDropdown from "components/ReUseableComponents/SearchDropDown/SearchDropdown";
import {
  setCart,
  setUserData,
  setUserLoggedOut,
} from "redux/action/userAction";

export default function Header() {
  const dispatch = useDispatch();
  const { localize } = useLocalize();
  const [focus, setfocus] = useState(false);
  const trendingProducts = useSelector((state) => state.search.trendingItems);
  const searchResult = useSelector((state) => state.search.searchResult);
  const searchKeywords = useSelector((state) => state.search.searchKeywords);
  const user = useSelector((state) => state.user);
  const userToken = useSelector((state) => state?.user?.user?.token);
  console.log(userToken, " userToken");
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const route = useRouter();
  const urlPath = route.pathname;
  // get search result
  useEffect(() => {
    if (searchQuery !== "") {
      dispatch(getSearchResult(searchQuery));
      setIsLoggedIn(localStorage.getItem("token"));
    }
  }, [searchQuery, dispatch, user]);

  // Fetch trending products
  useEffect(() => {
    dispatch(getTrendingProductList());
    dispatch(getSearchKeyword());
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    route.replace(`/medicines?q=${searchQuery}`);
  };

  // for login modal
  const [open, setOpen] = useState();
  const logout = () => {
    dispatch(setUserLoggedOut());
    dispatch(setCart({}));
    setIsLoggedIn("");
  };
  const activeHnadler = (path) => {
    return urlPath === path ? "active" : "";
  };

  return (
    <>
      <header className="mdk-header d-flex align-items-center px-5">
        <Navbar
          className="d-flex  justify-content-space-between align-items-center "
          expand="md"
          style={{ width: "100%" }}
        >
          <NavbarBrand href="/">
            {" "}
            <Image
              src="/assets/medcart-logo.svg"
              alt="Logo"
              width={175}
              height={42}
            />
          </NavbarBrand>
          <div
            className="search-bar row d-flex py-8 px-12"
            style={{ width: "100%", height: 50, outline: "none" }}
          >
            <PincodeFunc />
            <div className="right col-9 ">
              <form
                className="d-flex justify-content-center align-items-center"
                onSubmit={onSubmit}
              >
                <Input
                  style={{ border: "none", boxShadow: "none" }}
                  placeholder="Search medicines / health care products"
                  type="text"
                  onFocus={() => setfocus(true)}
                  onBlur={() =>
                    setTimeout(() => {
                      setfocus(false);
                    }, 500)
                  }
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery}
                />
                <button
                  type="submit"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    minHeight: "17.5px",
                  }}
                >
                  <Image
                    src="/assets/search.svg"
                    alt="Logo"
                    width={20}
                    height={20}
                  />{" "}
                </button>
              </form>
              {focus && (
                <div className="list-container">
                  <ul
                    className="list-group history-list "
                    style={{ height: "90%" }}
                  >
                    {searchKeywords.length && searchQuery === "" ? (
                      <li className="list-group-item success-light-bg d-flex justify-content-between">
                        {localize("Recent_Searches")}
                        <span onClick={() => dispatch(deleteSearchKeyword())}>
                          {localize("Clear")}
                        </span>
                      </li>
                    ) : (
                      <></>
                    )}
                    {searchQuery === "" ? (
                      <SearchDropdown
                        data={searchKeywords}
                        search={searchQuery}
                        setSearchQuery={setSearchQuery}
                      />
                    ) : (
                      <SearchDropdown
                        data={searchResult}
                        search={searchQuery}
                        setSearchQuery={setSearchQuery}
                      />
                    )}
                    {searchQuery && searchResult.length > 0 && (
                      <Link href={`/medicines?q=${searchQuery}`} passHref>
                        <div className="view-all">
                          <button className="text-center"> View All </button>
                        </div>
                      </Link>
                    )}
                    {!searchQuery && (
                      <>
                        <li className="list-group-item  success-light-bg">
                          {localize("Trending_Products")}
                        </li>
                        <SearchDropdown
                          data={trendingProducts}
                          search={searchQuery}
                          setSearchQuery={setSearchQuery}
                        />
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="h-icons">
              <div className="icon-content">
                <Image
                  src="/assets/offers.svg"
                  alt="Logo"
                  width={20}
                  className="user-select-cursor"
                  height={20}
                />

                <h3>{localize("Offers")}</h3>
              </div>
              <div
                className="icon-content"
                onClick={() => (!userToken ? setOpen(true) : logout())}
              >
                <Image
                  src={userToken ? "/assets/profile.png" : "/assets/exit.png"}
                  alt="Logo"
                  width={20}
                  height={20}
                  className="user-select-cursor"
                />

                <h3>{userToken ? "Profile" : "Sign in"}</h3>
              </div>
              <div className="icon-content">
                <Image
                  src="/assets/cart.png"
                  alt="Logo"
                  width={20}
                  className="user-select-cursor"
                  height={20}
                />
                <h3> {localize("Cart")} </h3>
              </div>
            </div>
          </div>
        </Navbar>
      </header>
      <div className=" tabs-container d-flex justify-content-center  ">
        <div className="tabs">
          <Navbar expand="md">
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem exact className={activeHnadler("/")}>
                  <Link href="/" as="/">
                    <NavLink>{localize("Home")}</NavLink>
                  </Link>
                </NavItem>
                <NavItem className={activeHnadler("/medicines")}>
                  <Link href="/medicines" as="/medicines">
                    <NavLink>{localize("medicines")}</NavLink>
                  </Link>
                </NavItem>
                <NavItem className={activeHnadler("/lab-test")}>
                  <Link href="#" as="#">
                    <NavLink>{localize("lab-test")}</NavLink>
                  </Link>
                </NavItem>
                <NavItem className={activeHnadler("/store-locater")}>
                  <Link href="#" as="#">
                    <NavLink>{localize("store-locater")}</NavLink>
                  </Link>
                </NavItem>
                <NavItem className={activeHnadler("/compare-medicines")}>
                  <Link href="#" as="#">
                    <NavLink>{localize("COMPARE-MEDICINES")}</NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>

      {/* login modal */}
      <Login open={open} setOpen={setOpen} />
    </>
  );
}
