"use client";

import { updateCountry } from "@/redux/navbarSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TbWorld } from "react-icons/tb";
import { useDispatch } from "react-redux";

interface Country {
  code: string;
  name: string;
}

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<string>("");
  const [country, setCountry] = useState<Country>({
    code: "us",
    name: "United States of America",
  });
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState<string>("");
  const router = useRouter();

  const navbarLinks = [
    {
      id: "/",
      name: "Home",
    },
    {
      id: "general",
      name: "News",
    },
    {
      id: "sports",
      name: "Sports",
    },
    {
      id: "business",
      name: "Business",
    },
    {
      id: "technology",
      name: "Technology",
    },
    {
      id: "health",
      name: "Health",
    },
    {
      id: "entertainment",
      name: "Entertainment",
    },
  ];

  const countries: Country[] = [
    { code: "ae", name: "United Arab Emirates" },
    { code: "ar", name: "Argentina" },
    { code: "at", name: "Austria" },
    { code: "au", name: "Australia" },
    { code: "be", name: "Belgium" },
    { code: "bg", name: "Bulgaria" },
    { code: "br", name: "Brazil" },
    { code: "ca", name: "Canada" },
    { code: "ch", name: "Switzerland" },
    { code: "cn", name: "China" },
    { code: "co", name: "Colombia" },
    { code: "cu", name: "Cuba" },
    { code: "cz", name: "Czech Republic" },
    { code: "de", name: "Germany" },
    { code: "eg", name: "Egypt" },
    { code: "fr", name: "France" },
    { code: "gb", name: "United Kingdom" },
    { code: "gr", name: "Greece" },
    { code: "hk", name: "Hong Kong" },
    { code: "hu", name: "Hungary" },
    { code: "id", name: "Indonesia" },
    { code: "ie", name: "Ireland" },
    { code: "il", name: "Israel" },
    { code: "in", name: "India" },
    { code: "it", name: "Italy" },
    { code: "jp", name: "Japan" },
    { code: "kr", name: "South Korea" },
    { code: "lt", name: "Lithuania" },
    { code: "lv", name: "Latvia" },
    { code: "ma", name: "Morocco" },
    { code: "mx", name: "Mexico" },
    { code: "my", name: "Malaysia" },
    { code: "ng", name: "Nigeria" },
    { code: "nl", name: "Netherlands" },
    { code: "nz", name: "New Zealand" },
    { code: "ph", name: "Philippines" },
    { code: "pl", name: "Poland" },
    { code: "pt", name: "Portugal" },
    { code: "ro", name: "Romania" },
    { code: "rs", name: "Serbia" },
    { code: "ru", name: "Russia" },
    { code: "sa", name: "Saudi Arabia" },
    { code: "se", name: "Sweden" },
    { code: "sg", name: "Singapore" },
    { code: "sk", name: "Slovakia" },
    { code: "th", name: "Thailand" },
    { code: "tr", name: "Turkey" },
    { code: "tw", name: "Taiwan" },
    { code: "ua", name: "Ukraine" },
    { code: "us", name: "United States" },
    { code: "ve", name: "Venezuela" },
    { code: "za", name: "South Africa" },
  ];

  function handleCountry(country: Country) {
    dispatch(updateCountry(country.code));
    setCountry(country);
  }

  const countryElement = (country: Country) => {
    return (
      <div
        className="flex items-center gap-2"
        onClick={() => handleCountry(country)}
      >
        <img
          className="w-6 h-6 rounded-full"
          src={`https://flagsapi.com/${country.code.toUpperCase()}/flat/64.png`}
        />
        {country.name}
      </div>
    );
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      console.log("ENTREI");
      router.push(`/search?q=${searchInput}`);
    }
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        <a className="btn btn-ghost text-xl flex items-center space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://flagsapi.com/US/flat/64.png"
          />
          USA Magazine
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6">
          {navbarLinks.map((item, index) => (
            <Link
              key={`navbar-link-${index}-nnan`}
              href={item.id}
              onClick={() => setActiveTab(item.id)}
            >
              <span
                key={`navbar-link-${index}-bb-${item}`}
                className={
                  activeTab === item.id ? "border-b-2 border-black" : ""
                }
              >
                {item.name}
              </span>
            </Link>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          {/* <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
            {countryElement(country)}
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-[300px] mt-2 mr-4 max-h-[300px] overflow-scroll flex flex-col"
          >
            {countries.map((country) => (
              <li key={`countries-link-${country}`}>
                <a>{countryElement(country)}</a>
              </li>
            ))}
          </ul> */}
          <div className="form-control h-9 flex items-center flex-row gap-2">
            <TbWorld className="text-3xl" />
            <input
              type="text"
              placeholder="Search in the World"
              className="input input-bordered w-24 md:w-auto h-9"
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
