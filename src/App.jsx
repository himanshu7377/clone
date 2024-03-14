
import { AppProvidersWrapper, BackToTop } from "./components";

import { configureFakeBackend } from "@/common";

// styles
import "@/assets/css/style.css";

import OrderDetails from '../src/app/admin/(order)/orders/[orderId]/page'
import { Navbar } from "./components/layout/admin";


import { Topbar } from "./components/layout/admin";








configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
  <Topbar/>
      <OrderDetails/>
      <Navbar/>
    
    // </AppProvidersWrapper>
  );
};

export default App;
