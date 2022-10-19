import { useEffect, useState } from 'react';
import { Blocks } from 'react-loader-spinner';
import {
  CurrencyBody,
  CurrencyHead,
  CurrencyTable,
  CurrencyWrap,
  ExchangeCcy,
  ExchangeValue,
  ExchangeWrap,
  Slash,
  SpinnerWrap,
  Th,
  Tr,
} from './CurrencyExchange.styled';

export const CurrencyExchange = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currency, setCurrency] = useState([]);
  const [error, setError] = useState(null);
  const [activeCcy, setActiveCcy] = useState(currency[0]);
  const [firstCcy, setFirstCcy] = useState(0);
  const [secondCcy, setSecondCcy] = useState(0);

  useEffect(() => {
    const getCurrency = async () => {
      setError(null);
      setIsLoading(true);

      try {
        const res = await fetch(
          'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
        );

        const data = await res.json();
        data.forEach(item => {
          console.log(item.ccy);
          item.buy = Number(item.buy).toFixed(2);
          item.sale = Number(item.sale).toFixed(2);
        });

        setCurrency(data);
        setActiveCcy(data[0]);
      } catch (e) {
        console.log(e);
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    getCurrency();

    // eslint-disable-next-line
  }, []);

  const handleClickCurrency = ccy => {
    setActiveCcy(ccy);
    setFirstCcy(0);
    setSecondCcy(0);
  };

  const handleChangeFirstCcy = e => {
    const result = activeCcy.buy * e.target.value;

    setFirstCcy(e.target.value);
    setSecondCcy(result.toFixed(2));
  };
  const handleChangeSecondCcy = e => {
    const result = e.target.value / activeCcy.buy;

    setSecondCcy(e.target.value);
    setFirstCcy(result.toFixed(2));
  };
  return (
    <CurrencyWrap>
      {isLoading && (
        <SpinnerWrap>
          <Blocks color="rgba(255,255,255,0.2)" ariaLabel="loading-indicator" />
        </SpinnerWrap>
      )}

      {error && <SpinnerWrap>Ошибка</SpinnerWrap>}

      <CurrencyTable>
        <CurrencyHead>
          <tr>
            <Th>Currency</Th>
            <Th>Purchase</Th>
            <Th>Sale</Th>
          </tr>
        </CurrencyHead>
        {!isLoading && !error && (
          <CurrencyBody>
            {currency.map((item, idx) => {
              if (item.ccy === 'RUR') return null;
              return (
                <Tr key={idx} onClick={() => handleClickCurrency(item)}>
                  <Th>{item.ccy}</Th>
                  <Th>{item.buy}</Th>
                  <Th>{item.sale}</Th>
                </Tr>
              );
            })}
          </CurrencyBody>
        )}
      </CurrencyTable>
      <ExchangeWrap>
        <ExchangeCcy>{activeCcy?.ccy}</ExchangeCcy>
        <ExchangeValue
          type="text"
          value={firstCcy}
          onChange={handleChangeFirstCcy}
        />
        <Slash>=</Slash>
        <ExchangeValue
          type="text"
          value={secondCcy}
          onChange={handleChangeSecondCcy}
        />
        <ExchangeCcy>{activeCcy?.base_ccy}</ExchangeCcy>
      </ExchangeWrap>
    </CurrencyWrap>
  );
};
