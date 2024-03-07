import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Errorpage from './components/pages/ErrorPage/Errorpage';
import Homepage from './components/pages/Homepage/Homepage';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import ParentComponent from './components/pages/ParentComponent/ParentComponent';
import { ROUTES } from './utils/constants';
import ChildComponent from './components/pages/ChildComponent/ChildComponent';

const Application = () => {
    const router = createBrowserRouter([
        {
            path: ROUTES.HOME,
            ErrorBoundary: Errorpage,
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Homepage />,
                },
                {
                    path: "/:parentId",
                    element: <ParentComponent />,
                },
                {
                    path: "/:parentId/:childId",
                    element: <ChildComponent />,
                },
            ],
        },
        {
            path: "*",
            element: <PageNotFound />,
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Application;