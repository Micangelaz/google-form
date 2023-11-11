import React, { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="root-layout">
      {children}
    </div>
  );
};

export default RootLayout;
