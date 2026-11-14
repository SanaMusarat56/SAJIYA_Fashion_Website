import { useState } from "react";
import { Link } from "react-router-dom";
import navbarlogo from "../../assets/images/navbarlogo.png";
import { row1Items, row2Items, megaMenu } from "./MegaMenudata";
import { FiChevronDown } from "react-icons/fi";
import { titleToRoute } from "./MegaMenudata";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const currentMenudata = activeMenu ? megaMenu[activeMenu] : null;
  return (
    <nav
      className="w-full bg-white border-b border-gray-200 sticky top-0 z-50"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="flex h-25 items-center max-w-[1600px] mx-auto px-6 ">
        <div className="flex w-[15%] px-8">
          <img
            src={navbarlogo}
            alt="Sajiya Clothing"
            className="w-12.5 h-auto object-contain"
          />
        </div>
        <div className="flex w-[85%] items-center gap-5 pl-4 justify-between pr-8">
          {[...row1Items, ...row2Items].map((item) => (
            <div
              key={item}
              className="relative h-25 flex items-center cursor-pointer"
              onMouseEnter={() => setActiveMenu(item)}
            >
              <div className="flex items-center gap-1 h-full">
                <span className="whitespace-nowrap text-[14px] tracking-[0.5px] font-medium uppercase">
                  {item}
                </span>
                {megaMenu[item] && (
                  <FiChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      activeMenu === item ? "rotate-180" : ""
                    }`}
                  />
                )}
                {activeMenu === item && (
                  <div className="absolute bottom-10 left-0 w-full h-0.5 bg-black "></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeMenu && currentMenudata && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 z-50">
          <div className="max-w-[1600px] mx-auto px-6 py-8 flex gap-10">
            {currentMenudata.images && (
              <div className="flex justify-center gap-6 flex-1 w-42.5 shrink-0">
                {currentMenudata.images.map((menuItem, index) => (
                  <Link
                    key={index}
                    to={menuItem.link || titleToRoute[menuItem.title] || "#"}
                    onClick={() => setActiveMenu(null)}
                    className="group cursor-pointer flex flex-col items-center w-42.5 shrink-0"
                  >
                    <div className="w-42.5 h-53.75 overflow-hidden bg-gray-100">
                      <img
                        src={menuItem.image}
                        alt={menuItem.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-center mt-3 text-[13px] font-medium text-gray-900 group-hover:underline">
                      {menuItem.title}
                    </p>
                  </Link>
                ))}
              </div>
            )}
            {currentMenudata.collections && (
              <div className="flex gap-10 shrink-0">
                {currentMenudata.collections.map((column, colIndex) => (
                  <ul
                    key={colIndex}
                    className="flex flex-col gap-3 min-w-40"
                  >
                    {column.map((label) => (
                      <li key={label}>
                        <Link
                          to={titleToRoute[label] || "#"}
                          onClick={() => setActiveMenu(null)}
                          className="text-[13px] text-gray-700 hover:text-black hover:underline"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            )}
            {currentMenudata.nestedCategories?.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-6 ">
                {column.map((block) => (
                  <div key={block.heading}>
                    <Link
                      to={titleToRoute[block.heading] || "#"}
                      onClick={() => setActiveMenu(null)}
                      className="block text-[13px] font-semibold uppercase tracking-wide text-gray-900 mb-2 hover:underline"
                    >
                      {block.heading}
                    </Link>
                    {block.items.length > 0 && (
                      <ul className="flex flex-col gap-2 pl-3">
                        {block.items.map((label) => (
                          <li key={label}>
                            <Link
                              to={titleToRoute[label] || "#"}
                              onClick={() => setActiveMenu(null)}
                              className="text-[12.5px] text-gray-600 hover:text-black hover:underline"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
