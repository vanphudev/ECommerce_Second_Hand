import routesCustomerSite from "../../modules/customer_site/routers";
import routesAboutTeam07 from "./aboutTeam07.js";

const routesPublic = [...routesCustomerSite, ...routesAboutTeam07];

export default routesPublic;
