import React, { createContext, useContext, useState } from "react";

const GallaryContext = createContext();

export const useGallaryFilter = () => {
  return useContext(GallaryContext);
};

export default function GallaryProvider({ children }) {
  const [filter, setFilter] = useState(false);

  const extendFilter = () => {
    setFilter(true);
  };
  const closeFilter = () => {
    setFilter(false);
  };

  return (
    <GallaryContext.Provider
      value={{
        filter,
        extendFilter,
        closeFilter,
      }}
    >
      {children}
    </GallaryContext.Provider>
  );
}
