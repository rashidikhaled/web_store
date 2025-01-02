import React, { useState, createContext, useContext } from "react";
const sidebarContext = createContext();
const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <sidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </sidebarContext.Provider>
  );
};

const UseSidebar = () => {
  const data = useContext(sidebarContext);
  return data;
};

export default SidebarProvider;
export { UseSidebar };
