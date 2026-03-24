/* eslint-disable react-refresh/only-export-components */
import React from 'react';

interface OrgContextModel {
  organization: string;
  setOrganization: (value: string) => void;
}

interface Props {
  children: React.ReactNode;
}

export const OrgContext = React.createContext<OrgContextModel>(null!);

export const OrgProvider: React.FC<Props> = ({ children }) => {
  const [organization, setOrganization] = React.useState("lemoncode");

  return (
    <OrgContext.Provider value={{ organization, setOrganization }}>
      { children }
    </OrgContext.Provider>
  )
}

