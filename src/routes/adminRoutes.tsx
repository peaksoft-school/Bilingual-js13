import CreateDescription from "../pages/admin-page/test/CreateDescription";
import CreateTest from "../pages/admin-page/test/CreateTest";
import TestInterface from "../pages/admin-page/test/TestInterface";

export const adminRoutes = [
   {
      path: 'about',
      element: <h3>About Company</h3>,
   },
   {
      path: 'test-interface',
      element: <TestInterface/>
   },
   {
      path: 'create-description',
      element: <CreateDescription/>
   },
   {
      path: 'create-test',
      element: <CreateTest/>
   },
]
