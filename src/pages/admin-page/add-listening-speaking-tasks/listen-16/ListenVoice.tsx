import { styled } from '@mui/material'
import Button from '../../../../shared/UI/Button'
import Switches from '../../../../shared/UI/switches/Switches'
import voluem from '../../../../assets/icons/svgs/voluem.svg'
import deleteIcon from '../../../../assets/icons/svgs/delete.svg'

const ListenVoiceData = [
   { id: Math.random(), number: 1, world: 'WORD 1' },
   { id: Math.random(), number: 2, world: 'WORD 1' },
   { id: Math.random(), number: 3, world: 'WORD 1' },
   { id: Math.random(), number: 4, world: 'WORD 1' },
   { id: Math.random(), number: 5, world: 'WORD 1' },
   { id: Math.random(), number: 6, world: 'WORD 1' },
]

const ListenVoiceItemData = [
   { id: Math.random(), number: 1, world: 'listen' },
   { id: Math.random(), number: 5, world: 'greesey' },
   { id: Math.random(), number: 6, world: 'champion' },
]

const ListenVoice = () => {
   return (
      <>
         <Container>
            <StyledBox>
               <StyledContent>
                  <TableContainerBox>
                     <TitleBox>
                        <p>
                           <span>User:</span> Askarov Marat
                        </p>
                        <p>
                           <span>Test:</span> Test number 1
                        </p>
                     </TitleBox>

                     <SubTitleBox>
                        <LeftBox>
                           <h2>Test Question </h2>
                           <p>
                              <span>Question Title:</span> Listen and Select
                              real English words
                           </p>
                           <p>
                              <span>Duration (in minutes):</span> 0:30
                           </p>
                           <p>
                              <span>Question Type:</span> Listen and Select real
                              English words
                           </p>
                        </LeftBox>
                        <RightBox>
                           <h2>Evaluation</h2>
                           <p>
                              <span>Score:</span> 7
                           </p>
                        </RightBox>
                     </SubTitleBox>

                     <EvalutionItemBox>
                        {ListenVoiceData.map((item) => (
                           <WordBox key={item.id}>
                              <p className="number">{item.number}</p>
                              <img
                                 className="voluem"
                                 src={voluem}
                                 alt="voluem"
                              />
                              <p className="word">{item.world}</p>
                              <SwitchesBox>
                                 <Switches variant="Quaternary" />
                              </SwitchesBox>
                              <img
                                 className="deleteIcon"
                                 src={deleteIcon}
                                 alt="deleteIcon"
                              />
                           </WordBox>
                        ))}
                     </EvalutionItemBox>
                     <UserAnswer>User’s Answer </UserAnswer>
                     <UserAnswerItemBox>
                        {ListenVoiceItemData.map((item) => (
                           <UserAnswerItem key={item.id}>
                              <p className="answerNumber">{item.number}</p>
                              <img
                                 className="answerVoluem"
                                 src={voluem}
                                 alt="voluem"
                              />
                              <p className="answerWorld">{item.world}</p>
                           </UserAnswerItem>
                        ))}
                     </UserAnswerItemBox>

                     <ButtonBoxEvaluate>
                        <Button className="goBack">GO BACK</Button>
                        <Button customVariant="secondary" className="save">
                           SAVE
                        </Button>
                     </ButtonBoxEvaluate>
                  </TableContainerBox>
               </StyledContent>
            </StyledBox>
         </Container>
      </>
   )
}

export default ListenVoice

const Container = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   backgroundColor: '#d7e1f8',
   height: '100%',
   minHeight: '601px',
}))

const StyledBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '1440px',
}))

const StyledContent = styled('div')(() => ({
   width: '100%',
   maxWidth: '1300px',
   display: 'flex',
   justifyContent: 'center',
   marginTop: '68px',
}))

const TableContainerBox = styled('div')(() => ({
   width: '100%',
   maxWidth: '1093px',
   height: '100%',
   backgroundColor: 'white',
   boxShadow: '1px 1px 5px 1px rgba(196, 196, 196, 0.6)',
   borderRadius: 12,
   padding: '80px 50px',
}))

const TitleBox = styled('div')(() => ({
   marginBottom: 50,
   '& p': {
      fontSize: 18,
      fontWeight: 400,
      '& span': {
         color: 'rgba(55, 82, 180, 1)',
      },
   },
}))

const SubTitleBox = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   marginBottom: 40,
}))

const LeftBox = styled('div')(() => ({
   '& h2': {
      fontSize: 18,
      fontWeight: 500,
      color: 'rgba(76, 72, 89, 1)',
      marginBottom: 14,
   },
   '& p': {
      fontSize: 16,
      fontWeight: 400,
      color: 'rgba(76, 72, 89, 1)',
      marginBottom: 8,
      '& span': {
         color: 'rgba(55, 82, 180, 1)',
      },
   },
}))

const RightBox = styled('div')(() => ({
   '& h2': {
      fontSize: 18,
      fontWeight: 500,
      color: 'rgba(76, 72, 89, 1)',
      marginBottom: 2,
   },
   '& p': {
      fontSize: 16,
      fontWeight: 400,
      color: 'rgba(42, 185, 48, 1)',
      marginBottom: 8,
      '& span': {
         color: 'rgba(55, 82, 180, 1)',
      },
   },
}))

const EvalutionItemBox = styled('div')(() => ({
   display: 'flex',
   gap: 18,
   flexWrap: 'wrap',
   width: '100%',
   maxWidth: 756,
   marginBottom: 46,
}))

const WordBox = styled('div')(() => ({
   width: '100%',
   maxWidth: 240,
   height: '100%',
   maxHeight: 46,
   border: '2px solid rgba(212, 208, 208, 1)',
   borderRadius: 12,
   display: 'flex',
   alignItems: 'center',
   '& .number': {
      marginLeft: 16,
      marginRight: 16,
   },
   '& .voluem': {
      marginRight: 12,
   },
   '& .word': {
      width: 100,
   },
   '& .deleteIcon': {
      position: 'relative',
      right: 8,
   },
}))

const SwitchesBox = styled('div')(() => ({
   position: 'relative',
   left: 6,
}))

const UserAnswer = styled('h2')(() => ({
   fontSize: 18,
   fontWeight: 600,
   color: 'rgba(76, 72, 89, 1)',
}))

const UserAnswerItemBox = styled('h2')(() => ({
   display: 'flex',
   gap: 18,
   width: '100%',
   maxWidth: 748,
   marginTop: 14,
   marginBottom: 32,
}))

const UserAnswerItem = styled('h2')(() => ({
   width: '100%',
   maxWidth: '186px',
   height: '100%',
   minHeight: '46px',
   border: '2px solid rgba(212, 208, 208, 1)',
   borderRadius: 12,
   display: 'flex',
   alignItems: 'center',
   '& p': {
      fontSize: 16,
      fontWeight: 400,
      color: 'rgba(76, 72, 89, 1)',
   },
   '& .answerNumber': {
      margin: '0 16px',
   },
   '& .answerVoluem': {
      marginRight: 12,
   },
   '& .answerWorld': {
      width: 110
   },
}))

const ButtonBoxEvaluate = styled('div')(() => ({
   textAlign: 'end',
   '& .goBack': {
      backgroundColor: 'white',
      color: 'rgba(58, 16, 229, 1)',
      border: '2px solid rgba(58, 16, 229, 1)',
      marginRight: 16,
   },
}))
