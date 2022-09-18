import styled from 'styled-components';

const colors = {
  default: '#002f52',
  placeholder: '#a4a4a4',
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Label = styled.label`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding-left: 20px;
  margin-bottom: 4px;
  /* identical to box height */

  color: ${colors.default};
`;

export const Input = styled.input`
  border: 1px solid ${colors.default};
  border-radius: 50px;
  padding: 10px 20px;
  color: ${colors.default};

  font-weight: 700;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  ::placeholder {
    /* identical to box height */
    color: ${colors.placeholder};
  }
`;
