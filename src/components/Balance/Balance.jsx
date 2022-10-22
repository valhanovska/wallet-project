import { useSelector } from "react-redux";
import { getSelects } from "redux/transactionCategories/selectorsTransactions";
import { Container, Title, Result } from "./Balance.styled";

const Balance = () => {

    const allTransaction = useSelector(state=>state.transactionsControllers.allTransactions);
    return ( 
        <Container>
            <Title>Your balance</Title>
            <Result>&#8372; {(allTransaction.length===0)? (<>0</>): allTransaction[0].balanceAfter}</Result>
        </Container>
     );
}
 
export default Balance;