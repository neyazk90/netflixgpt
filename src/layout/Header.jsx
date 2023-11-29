import React, { useState } from "react";
import { Link } from "react-router-dom";
import { appName } from "../shared/config";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../shared/UI/Backdrop";

const Header = () => {
 const [drawerIsOpen, setDrawerIsOpen] = useState(true);

 const openDrawerHandler = () => {
  setDrawerIsOpen(true);
 };

 const closeDrawerHandler = () => {
  setDrawerIsOpen(false);
 };

 return (
  <header className="text-gray-600 body-font">
   {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
   <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
    <nav className="md:ml-auto sm:hidden flex-wrap items-center text-base justify-center">
     <NavLinks />
    </nav>
   </SideDrawer>
   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link
     to="/"
     className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
    >
     <img
      onClick={openDrawerHandler}
      className="sm:hidden"
      style={{ position: "absolute", left: 0 }}
      width="50"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEX///8AAADl5eX09PTV1dUICAiurq5TU1Orq6tJSUnc3Nzt7e1ERET6+vpRUVG9vb0gCS9GAAAA8ElEQVR4nO3dOQ4CQRAEQZblPv//W2yUFsLoNSKekGb1SLPbAQAAAAAAAAAAAADfbodh9+kC9ViGXaYL1Hm6yWm6QGlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJnWdbrLBjXqd9pwuAAAAAMCvzstx1Ba3x9f09rjBJjbq0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClvQet9mnW5TRcAAAAAgP/d98PW6QJljy27fWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJuWPs3LLAAAAAAAAAAAAAGAbPhzZL1DD5UvKAAAAAElFTkSuQmCC"
      alt=""
     />
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
      viewBox="0 0 24 24"
     >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
     </svg>
     <span className="ml-3 text-xl">{appName}</span>
    </Link>
    <nav className="md:ml-auto hidden sm:flex flex-wrap items-center text-base justify-center">
     <NavLinks />
    </nav>
   </div>
  </header>
 );
};

export default Header;