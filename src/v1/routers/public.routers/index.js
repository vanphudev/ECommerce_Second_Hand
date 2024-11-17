import routesCustomerSite from "../../modules/customer_site/routers";
import routesAboutTeam07 from "./aboutTeam07.js";
import routesLanding from "./landing.js";
import routesCart from "./cart.js";
import routesDetailOrder from "./detailOrder.js";
import routersLogin from "./login.js";
const routesPublic = [...routesCustomerSite, ...routesAboutTeam07,...routesLanding,...routesCart,...routesDetailOrder,...routersLogin];

export default routesPublic;
