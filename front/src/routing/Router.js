import Add from "../pages/site/Add/Add";
import Edit from "../pages/site/Edit/Edit";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";



const Router=[{
    path:'/',
    element:<SiteRoot/>,

    children:[{
        path:"",
        element:<Home/>
    },
{
    path:"add",
    element:<Add/>
},
{
    path:"edit",
    element:<Edit/>
}
]
}]

export default Router