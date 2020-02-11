import User from "../User";
import News from "../News";
import Home from "../Home";
import Not404 from "../not404";

const route = [
    {
        exact:true,
        path:'/',
        component:Home
    },
    {
        path:'/News',
        component:News
    },
    {
        path:'/User',
        component:User
    },
    {
        path:'*',
        component:Not404
    }

];

export default route;
