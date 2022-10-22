import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  margin: 0;
`;
