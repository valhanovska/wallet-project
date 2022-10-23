import homeSmall from '../../assets/icons/sprite.svg';
import statisticLarge from '../../assets/icons/sprite.svg';
import statisticSmall from '../../assets/icons/sprite.svg';
import homeLarge from '../../assets/icons/sprite.svg';
import currencyLarge from '../../assets/icons/sprite.svg';
import { Item, Link, List, Span } from './Navigation.styled';
import { Svg } from './Navigation.styled';
import { useIsMobile } from 'hooks/useIsMobile';

const Navigations = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <List>
          <Item>
            <Link to="/transactions/home">
              <Svg>
                <use href={homeLarge + '#Home-large'}></use>
              </Svg>
            </Link>
          </Item>
          <Item>
            <Link to="/transactions/diagram">
              <Svg>
                <use href={statisticLarge + '#Statistic-large'}></use>
              </Svg>
            </Link>
          </Item>
          <Item>
            <Link to="/transactions/currency">
              <Svg>
                <use href={currencyLarge + '#Currency-large'}></use>
              </Svg>
            </Link>
          </Item>
        </List>
      ) : (
        <List>
          <Item>
            <Link to="/transactions/home">
              <Svg>
                <use href={homeSmall + '#Home-icon-small'}> </use>
              </Svg>
              <Span>Home</Span>
            </Link>
          </Item>
          <Item>
            <Link to="/transactions/diagram">
              <Svg>
                <use href={statisticSmall + '#Statistic-small'}></use>
              </Svg>
              <Span>Statistic</Span>
            </Link>
          </Item>
        </List>
      )}
    </>
  );
};

export default Navigations;
