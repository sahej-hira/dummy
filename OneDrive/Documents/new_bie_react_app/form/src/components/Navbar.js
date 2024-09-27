import React from "react";
import { Link } from 'react-router-dom';

// function Navbar(){
//     return(
//         <nav className="bg-white p-4 flex flex-row justify-between">
//           <ul className="flex space-x-4">
//             <li>
//               <Link to="/dashboard" className="hover:text-black-200">
//                 <i className="fas fa-tachometer-alt"></i> Dashboard
//               </Link>
//             </li>
//             <li>
//               <Link to="/Kisses" className="hover:text-white-200">
//                 <span role="img" aria-label="kiss">😘</span> Kisses
//               </Link>
//             </li>
//             <li>
//               <Link to="/message" className="hover:text-red-200">
//               <i className="fas fa-envelope"></i> Message from Today
//               </Link>
//             </li>
//           </ul>
//         </nav>
//     )
// }

// export default Navbar;


const Navbar = () => {
  return (
    <div className="bg-pink-400 p-[6px] h-[10%] w-[100%] text-3xl ">
      <div className="flex flex-row justify-center items-center justify-between space-x-4 px-[4rem]">
        <Link to="/dashboard" className="hover:text-yellow-200">
          <i className="fas fa-tachometer-alt"></i> Dashboard
        </Link>
        <Link to="/Kisses" className="hover:text-pink-500">
          <span role="img" aria-label="kiss">😘</span> Kisses

        </Link>
        <Link to="/message" className="hover:text-blue-900">
          <i className="fas fa-envelope"></i> Message
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

// const Navbar = () => {
//   return (
//     <div className="bg-[#e6d9f7] text-[#333] h-[10vh] w-full">
//       <div className="flex flex-row w-[100%] justify-center">
//           <Link to="/dashboard" className="hover:text-black-200">
//              <i className="fas fa-tachometer-alt"></i> Dashboard
//            </Link>
//         <Link to="/Kisses" className="hover:text-white-200">
//               <span role="img" aria-label="kiss">😘</span> Kisses
//          </Link>
//         <Link to="/message" className="hover:text-red-200">
//               <i className="fas fa-envelope"></i> Message
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;