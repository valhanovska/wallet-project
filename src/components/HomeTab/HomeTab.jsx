import Media from 'react-media';
import { useSelector } from 'react-redux';
import { MobileTab } from './MobileTab';
import { Table } from './Table';


import Balance from '../Balance/Balance';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';

const HomeTab = () => {

	const allTransaction = useSelector(state=>state.transactionsControllers.allTransactions);



	return (
		<>
			<Media queries={{ small: { maxWidth: 767 } }}>
				{matches =>
					matches.small ? (
						<>
							<Balance />
							{allTransaction && <MobileTab items={allTransaction} />}
						</>
					) : (
						allTransaction && <Table items={allTransaction} />
					)
				}
			</Media>

			<ButtonAddTransactions />
		</>
	);
};

export default HomeTab;