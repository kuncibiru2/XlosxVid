
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogoIcon } from './icons/LogoIcon';

const Header: React.FC = () => {
  const activeLinkClass = 'text-primary';
  const inactiveLinkClass = 'text-text-secondary hover:text-text-main transition-colors';

  return (
    <header className="bg-dark-light/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold">
            <LogoIcon className="h-8 w-8 text-primary" />
            <span>SnapVid</span>
          </NavLink>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
            >
              Home
            </NavLink>
            <NavLink 
              to="/faq" 
              className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
            >
              FAQ
            </NavLink>
            <NavLink 
              to="/support" 
              className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
            >
              Support
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
