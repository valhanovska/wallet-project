import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
`;
