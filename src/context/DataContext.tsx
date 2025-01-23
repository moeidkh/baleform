import React, { createContext, ReactNode, useEffect, useState } from "react";

interface FormContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setData: React.Dispatch<React.SetStateAction<any[]>>;
}
export const FormContext = createContext<FormContextType | null>(null);

type FormType = {
  children: ReactNode;
};

const DataContext: React.FC<FormType> = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setData([]);
    };
    fetchData();
  }, []);

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
};

export default DataContext;
