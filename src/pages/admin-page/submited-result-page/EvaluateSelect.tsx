import { styled } from '@mui/material'
import Switches from '../../../shared/UI/switches/Switches'
import Button from '../../../shared/UI/Button'

const EvaluateSelectData = [
   { id: Math.random(), number: 1, world: 'champion' },
   { id: Math.random(), number: 2, world: 'listen' },
   { id: Math.random(), number: 3, world: 'nature' },
   { id: Math.random(), number: 4, world: 'twall' },
   { id: Math.random(), number: 5, world: 'advantage' },
   { id: Math.random(), number: 6, world: 'greesey' },
]

const UserAnswerItemData = [
   { id: Math.random(), world: 'listen' },
   { id: Math.random(), world: 'greesey' },
   { id: Math.random(), world: 'champion' },
   { id: Math.random(), world: 'listen' },
]

const EvaluateSelect = () => {
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
                              <span>Question Title:</span> Select real English
                              words
                           </p>
                           <p>
                              <span>Duration (in minutes):</span> 0:30
                           </p>
                           <p>
                              <span>Question Type:</span> Select real English
                              words
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
                        {EvaluateSelectData.map((item) => (
                           <ItemBox key={item.id}>
                              <LeftItemBox>
                                 <p className="numberItem">{item.number}</p>
                                 <p>{item.world}</p>
                              </LeftItemBox>
                              <Switches variant="Quaternary" />
                           </ItemBox>
                        ))}
                     </EvalutionItemBox>
                     <UserAnswer>User’s Answer </UserAnswer>
                     <UserAnswerItemBox>
                        {UserAnswerItemData.map((item) => (
                           <UserAnswerItem key={item.id}>
                              <p>{item.world}</p>
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

export default EvaluateSelect

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
   maxWidth: 748,
   marginBottom: 46,
}))

const ItemBox = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   border: '2px solid rgba(212, 208, 208, 1)',
   width: '100%',
   maxWidth: 234,
   alignItems: 'center',
   height: '100%',
   minHeight: 46,
   borderRadius: 12,
}))

const LeftItemBox = styled('div')(() => ({
   display: 'flex',
   width: '100%',
   maxWidth: 105,
   marginLeft: 16,
   '& .numberItem': {
      marginRight: 16,
   },
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
   maxWidth: '171px',
   height: '100%',
   minHeight: '46px',
   border: '2px solid rgba(212, 208, 208, 1)',
   borderRadius: 12,
   display: 'flex',
   alignItems: 'center',
   paddingLeft: 16,
   '& p': {
      fontSize: 16,
      fontWeight: 400,
      color: 'rgba(76, 72, 89, 1)',
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
