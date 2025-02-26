import { Footer, Header } from "@components";
import ContextProvider from "@providers/AppProvider";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <ContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </ContextProvider>
  );
};
