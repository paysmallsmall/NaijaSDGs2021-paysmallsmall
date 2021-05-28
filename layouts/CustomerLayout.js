import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  CustomerNav,
  Footer,
  NavSpacer,
  ShopNavBar,
} from "../components/common";
import { shoppersRoutes } from "../utils/routes";

const ShopLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated, user, role } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated || !user || role !== 1) {
      // console.log(isAuthenticated, user, role);
      router.push(shoppersRoutes.LOGIN);
    }
    //check registration status
    const { phoneVerified, bvnVerified, bankVerified, employerVeried } = user;
    if (!phoneVerified || !bvnVerified || !bankVerified || !employerVeried) {
      router.push(shoppersRoutes.COMPLETE_REGISTRATION);
    }
    setIsLoading(false);
  }, [isAuthenticated, role, router, user]);

  //check if completed registration

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-content">
      <ShopNavBar />
      <NavSpacer />
      <CustomerNav />
      {children}
      <Footer />
    </div>
  );
};

export default ShopLayout;
