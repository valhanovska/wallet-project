import { useSelector } from "react-redux";
import { getAllTransactions } from "redux/transactionsController/trControllerSelector";
import { Container, Title, Result, Box } from "./Balance.styled";

const Balance = () => {

    const allTransaction = useSelector(getAllTransactions);
    const balance = allTransaction.reduce((total,item)=>total+=item.amount,0)
    return ( 
        <Container>
            <Box>
            <Title>Your balance</Title>
            <Result>&#8372; {(allTransaction.length===0)? (<>0</>): balance}</Result>
            </Box>
        </Container>
     );
}
 
export default Balance;