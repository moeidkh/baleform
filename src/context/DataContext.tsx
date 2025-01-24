import React, { createContext, ReactNode, useEffect, useState } from "react";
import { folderType, getFolders } from "../services/api";

interface FormContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: folderType;
  setData: React.Dispatch<React.SetStateAction<folderType>>;
}
export const FormContext = createContext<FormContextType | null>(null);

type FormType = {
  children: ReactNode;
};

const DataContext: React.FC<FormType> = ({ children }) => {
  const [data, setData] = useState<folderType | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const folder = (await getFolders()) as folderType[];
      setData(folder[0]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      console.log("dataaaaaa from context", data);
    }
  }, [data]);

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
};

export default DataContext;
