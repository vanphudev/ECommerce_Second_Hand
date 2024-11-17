import React, {useTransition} from "react";
import Profile from "./components/Profile/Profile";
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb";

const index = () => {
   const [isPending, startTransition] = useTransition();
   const handleSelect = (path) => {
      startTransition(() => {});
   };
   return (
      <>
         {isPending && <Spin />}
         <Profile />
      </>
   );
};

export default index;
