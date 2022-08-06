import Image from "next/image";
import Link from "next/link";
import React from "react";

const SearchDropdown = ({ data, search, setSearchQuery }) => {
  return (
    <>
      {data &&
        data.map((value, key) => {
          return (
            key < 4 && (
              <li
                onClick={() => setSearchQuery(value.name || value?.keyword)}
                key={key}
                className="list-group-item   d-flex justify-content-between"
              >
                {search === "" ? (
                  <>
                    <span
                      className="col-11"
                      onClick={() =>
                        setSearchQuery(value.name || value?.keyword)
                      }
                    >
                      {value.name ?? value?.keyword}
                    </span>
                    <Image
                      width={9.73}
                      height={9.73}
                      src="/assets/history-icon.svg"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                  <Link href={`/medicine/${value.id}`}>
                    <div className="row query-search d-flex justify-content-between align-items-center cursor-pointer">
                      <div className="col-lg-2">
                        <img src={value.images[0].url} alt="" width={24} />
                      </div>
                      <div className="col-lg-10">
                        <h6>{value.name_web}</h6>
                        <p>
                          {value.package_size}{" "}
                          {value.uom === "units" ? "" : value.uom} &nbsp;
                          <span className="text-capitalize">
                            {" "}
                            {value.content.toLowerCase()}
                          </span>
                          (s)&nbsp;in {value.package_type}
                        </p>
                        {value.is_assured && (
                          <div className="row d-flex  verified-doc justify-content-center align-items-center">
                            <div className="col-lg-2">
                              <img src="/assets/doctor-icon.svg" alt="" />
                            </div>
                            <div className="col-lg-10">
                              <h5>Dr. Assured</h5>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                    <Image
                      width={9.73}
                      height={9.73}
                      src="/assets/history-icon.svg"
                      alt="icon"
                    />
                  </>
                )}
              </li>
            )
          );
        })}
    </>
  );
};

export default SearchDropdown;
