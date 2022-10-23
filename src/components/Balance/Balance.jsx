import { useSelector } from "react-redux";
import { getAllTransactions } from "redux/transactionsController/trControllerSelector";
import { Container, Title, Result, Box } from "./Balance.styled";

const Balance = () => {

    const allTransaction = useSelector(getAllTransactions);
    return ( 
        <Container>
            <Box>
            <Title>Your balance</Title>
            <Result>&#8372; {(allTransaction.length===0)? (<>0</>): allTransaction[0].balanceAfter}</Result>
            </Box>
        </Container>
     );
}
 
export default Balance;