import { useSelector } from "react-redux";
import { getSelects } from "redux/transactionCategories/selectorsTransactions";
import { Container, Title, Result } from "./Balance.styled";

const Balance = () => {

    const allTransaction = useSelector(state=>state.transactionsControllers.allTransactions);
console.log(allTransaction[allTransaction.length-1]);
    return ( 
        <Container>
            <Title>Your balance</Title>
            <Result>&#8372; {(allTransaction.length===0)? (<>0</>): allTransaction[allTransaction?.length-1].balanceAfter}</Result>
        </Container>
     );
}
 
export default Balance;