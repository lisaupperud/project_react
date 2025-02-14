import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [ 
    // homepage
    index("routes/home.tsx"),
    // about page
    route("about", "./routes/about.tsx")
] satisfies RouteConfig;
