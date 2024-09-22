import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/users/Users";
import NotFound from "../components/errors/NotFound";
import Operator from "../pages/operator/Operators";
import CreateOperator from "../pages/operator/CreateOperator";
import Buses from "../pages/buses/Buses";
import CreateBus from "../pages/buses/CreateBus";
import EditBus from "../pages/buses/EditBus";
import ViewBus from "../pages/buses/ViewBus";
import Layout from "../components/Layout";
import CreateUser from "../pages/users/CreateUser";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "create-user",
                element: <CreateUser />,
            },
            {
                path: "users",
                element: <Users />,
                loader: async () => {
                    const jsonData = await fetch("http://localhost:4000/users/get-all-users");
                    const data = await jsonData.json();
                    return data;
                },
                children: [
                    {
                        path: "edit-user/:userID",
                        element: <Dashboard />,
                    },
                    {
                        path: "view-user/:userID",
                        element: <Dashboard />,
                    },
                ],
            },
            {
                path: "operator",
                element: <Operator />,
                loader: async () => {
                    const jsonData = await fetch(
                        "http://localhost:4000/operators/get-all-operators"
                    );
                    const data = await jsonData.json();
                    return data;
                },
                children: [

                    {
                        path: "edit-operator/:operatorID",
                        element: <Dashboard />,
                    },
                    {
                        path: "view-operator/:operatorID",
                        element: <Dashboard />,
                    },
                ],
            },
            {
                path: "create-operator",
                element: <CreateOperator />
            },
            {
                path: "buses",
                element: <Buses />,
                loader: async () => {
                    const jsonData = await fetch("http://localhost:4000/buses/get-all-bus");
                    const data = await jsonData.json();
                    return data;
                },
                children: [
                    {
                        path: "create-bus",
                        element: <CreateBus />,
                    },
                    {
                        path: "edit-bus/:busID",
                        element: <EditBus />,
                    },
                    {
                        path: "view-bus/:busID",
                        element: <ViewBus />,
                    },
                ],
            },
        ],
    },
]);


export default router;