import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AUTH_CANCELED } from "../store/types/authTypes";
import { shoppersRoutes } from "../utils/routes";

const Logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch({ type: AUTH_CANCELED });
    router.push(shoppersRoutes.LOGIN);
  }, [dispatch, router]);

  return <div></div>;
};

Logout.layout = "auth";

export default Logout;
