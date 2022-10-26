import styled from '@emotion/styled';

export const MobileTransactions = styled.ul`
  /* margin-top: 32px;
  margin-bottom: 48px; */
  margin: 0;
  padding: 0;
`;

export const MobileTableBox = styled.li`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border-left: 5px solid
    ${props => (props.type === 'income' ? '#24CCA7' : '#FF6596')};
  &:not(:first-of-type) {
    margin-top: 8px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  font-family: var(--modal-toggle-font);
  font-style: normal;

  //border-left: 5px solid #FF6596;
  padding: 12px 20px 8px 20px;

  background-color: #fff;
  color: #000;

  &:not(:first-of-type) {
    border-top: 1px solid #dcdcdf;
  }
`;

export const RowName = styled.span`
  font-family: var(--modal-toggle-font);
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

export const RowValue = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const SumRow = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: ${props => (props.type === 'income' ? '#24CCA7' : '#FF6596')};
`;

export const MobileButtonDelete = styled.button`
  position: absolute;
  background: red;
  object-fit: fill;
  border: none;
  width: 35px;
  height: 35px;
  top: -11px;
  right: -9px;
  border-color: transparent;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 250ms linear;
  color: #fff;

  &:hover {
    transform: scale(1.02) translate(-5px, 3px);
  }
  &:active {
    transform: scale(0.9);
  }
`;
export const MobileButtonEdit = styled(MobileButtonDelete)`
  top: -9px;
  left: -11px;
  color: #fff;
  background: #24cca7;

  &:hover {
    transform: scale(1.02) translate(-5px, 3px);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const Trash = styled.img`
  margin-top: 14px;
  margin-left: -3px;
  width: 14px;
  height: 14px;
  transition: all 250ms linear;
  &:hover {
    transform: scale(1.5);
  }
`;
export const Edit = styled(Trash)`
  margin-top: 10px;
  margin-left: 8px;
  width: 14px;
  height: 14px;
  transition: all 250ms linear;
  &:hover {
    transform: scale(1.5);
  }
`;

export const Title = styled.h2`
  margin: 0px;
  padding: 0px;
  max-height: 60vh;
  padding: 5px 20px 15px 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 24px;
`;
