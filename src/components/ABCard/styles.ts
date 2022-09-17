import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 48px 32px 48px 48px;
  gap: 16px;
  width: 380px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 725px;
    height: 266px;
    padding: 24px;
  }

  @media (min-width: 1200px) {
    padding: 48px 32px 48px 48px;
    width: 551px;
    height: 374px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`;

export const About = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  margin-bottom: 8px;

  color: #eb9b00;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
  }
`;

export const Title = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #002f52;

  @media (min-width: 1200px) {
    margin: 24px 0;
  }
`;

export const Description = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: rgba(0, 0, 0, 0.85);
  margin: 8px 0;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1200px) {
    font-size: 14px;
  }
`;

export const Author = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: rgba(0, 0, 0, 0.85);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 1200px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const From = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height */

  color: rgba(0, 0, 0, 0.54);

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1200px) {
    font-size: 14px;
  }
`;

export const ActionContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    align-items: space-between;
    flex: 1;
    img {
      padding: 10px;

      width: 26px;
      height: 26px;
    }
  }

  @media (min-width: 768px) {
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: auto;

    img {
      padding: 0;
      &:first {
        margin-right: 44px;
      }
      width: 40px;
      height: 36px;
    }
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }
`;

export const Amount = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin-left: 10px;

  color: #002f52;

  @media (min-width: 768px) {
    margin-left: 0;
    font-size: 36px;
    line-height: 54px;
  }
`;
