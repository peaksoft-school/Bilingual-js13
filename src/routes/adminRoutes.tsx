import ListenVoice from '../pages/admin-page/add-listening-speaking-tasks/listen-16/ListenVoice'
import WhatYouHear from '../pages/admin-page/add-listening-speaking-tasks/type-17/WhatYouHear'
import DescribeImg from '../pages/admin-page/describe-img/DescribeImg'
import HighightAnswer from '../pages/admin-page/highight-answer/HighightAnswer'
import ListenSelect from '../pages/admin-page/listen-select/ListenSelect'
import ListenSelectAudio from '../pages/admin-page/listen-select/ListenSelectAudio'
import ListenSelectModal from '../pages/admin-page/listen-select/ListenSelectModal'
import PrintHear from '../pages/admin-page/print-hear/PrintHear'
import RecordSayingStatement from '../pages/admin-page/record-saying-statement/RecordSayingStatement'
import RespondWords from '../pages/admin-page/respond-words/RespondWords'
import SelectIdeaModal from '../pages/admin-page/select-idea-modal/SelectIdeaModal'
import SelectIdea from '../pages/admin-page/select-idea/SelectIdea'
import EvaluateSelect from '../pages/admin-page/submited-result-page/EvaluateSelect'
import EvalutionSubmited from '../pages/admin-page/submited-result-page/EvalutionSubmited'
import SubmitedResultPage from '../pages/admin-page/submited-result-page/SubmitedResultPage'
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
   {
      path: 'record-saying-statement',
      element: <RecordSayingStatement />,
   },
   {
      path: 'respond-words',
      element: <RespondWords />,
   },
   {
      path: 'highight-answer',
      element: <HighightAnswer />,
   },
   {
      path: 'select-idea',
      element: <SelectIdea />,
   },
   {
      path: 'select-idea-modal',
      element: <SelectIdeaModal />,
   },
   {
      path: 'submited-result-page',
      element: <SubmitedResultPage />,
   },
   {
      path: 'evalution-submited',
      element: <EvalutionSubmited />,
   },
   {
      path: 'evaluate-select',
      element: <EvaluateSelect />,
   },
   {
      path: 'listen-voice',
      element: <ListenVoice />, // Ветка add-listening-seaking-tasks
   },
   {
      path: 'what-you-hear',
      element: <WhatYouHear />, // Ветка add-listening-seaking-tasks
   },
]
