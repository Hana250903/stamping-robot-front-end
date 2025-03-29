import { useEffect, ComponentType } from "react";
import { useRouter } from "next/router";

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return function AuthComponent(props: P) {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        router.replace("/login"); // Redirect to login if no token
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
