import DescribeImg from '../pages/admin-page/describe-img/DescribeImg'
import ListenSelect from '../pages/admin-page/listen-select/ListenSelect'
import ListenSelectAudio from '../pages/admin-page/listen-select/ListenSelectAudio'
import ListenSelectModal from '../pages/admin-page/listen-select/ListenSelectModal'
import PrintHear from '../pages/admin-page/print-hear/PrintHear'
import CreateDescription from '../pages/admin-page/test/CreateDescription'
import CreateTest from '../pages/admin-page/test/CreateTest'
import TestInterface from '../pages/admin-page/test/TestInterface'

export const adminRoutes = [
   {
      path: 'about',
      element: <h3>About Company</h3>,
   },
   {
      path: 'test-interface',
      element: <TestInterface />,
   },
   {
      path: 'create-description',
      element: <CreateDescription />,
   },
   {
      path: 'create-test',
      element: <CreateTest />,
   },
   {
      path: 'listen-select',
      element: <ListenSelect />,
   },
   {
      path: 'listen-select-audio',
      element: <ListenSelectAudio />,
   },
   {
      path: 'listen-select-modal',
      element: (
         <ListenSelectModal
            open={true}
            onSubmit={(data) => console.log(data)}
         />
      ),
   },
   {
      path: 'print-hear',
      element: <PrintHear />,
   },
   {
      path: 'describe-img',
      element: <DescribeImg />,
   },
]
