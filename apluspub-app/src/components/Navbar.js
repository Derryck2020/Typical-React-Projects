import logo from '../images/logo/logo.jpg';
import { pageLinks, socialLinks } from '../data';

export const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="nav-center">
            {/* <!-- navbar header --> */}
            <div className="nav-header">
               <img src={logo} className="nav-logo" alt="apluspub" />
               <button type="button" className="nav-toggle" id="nav-toggle">
                  <i className="fas fa-bars"></i>
               </button>
            </div>
            {/* <!-- nav links --> */}
            <ul className="nav-links" id="nav-links">
               {pageLinks.map((link) => {
                  return (
                     <li key={link.id}>
                        <a href={link.href} className="nav-link">
                           {link.text}
                        </a>
                     </li>
                  );
               })}
            </ul>
            <ul className="nav-icons">
               {socialLinks.map((link) => {
                  const { id, href, icon } = link;
                  return (
                     <li key={id}>
                        <a
                           href={href}
                           target="_blank"
                           rel="noreferrer"
                           className="nav-icon"
                        >
                           <i className={icon}></i>
                        </a>
                     </li>
                  );
               })}
            </ul>
         </div>
      </nav>
   );
};
