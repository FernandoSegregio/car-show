import styled from 'styled-components';

export const ListContainer = styled.section`
  background-color: var(--neutral-color-white-200);
  width: 100%;
  height: 1116px;

    .is-hidden {
      display: none;
    }
    .no-hidden {
      display: flex;
      position: absolute;
      left: 308px;
      top: 136px;
    }
    
    article {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      margin-bottom: 48px;
      padding-top: 192px;
      width: 1052px;

        h1 {
          color: var(--brand-color-primary);
          font-weight: var(--font-weight-400);
          font-size: var(--font-size-xxl);
          line-height: var(--line-height-m);
        }
    }

    table { 
      border-radius: 6px;
      margin: 0 auto;
      width: 1052px;
    }

    thead {
      background-color: var(--brand-color-primary);
      border-radius: 6px;
      color: var(--neutral-color-white-200);
      height: 75px;
    }
    
    th {
      font-weight: var(--font-weight-400);
      font-size: var(--font-size-s);
      line-height: var(--line-height-m);
    }
    
    th:nth-of-type(6) {
    min-width: 80px
    }

    th:nth-of-type(7) {
    min-width: 70px
    }

    
    td {
      text-align: center;
      height: 64px;
    }
    
    td:nth-of-type(6) {
     text-align: right;
     padding-right: 16px;
    }

    svg {
      height: 24px;
      width: 24px;
    }
`;

export const ButtonAdd = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 21px;
  border: 0.627523px solid var(--brand-color-primary);
  color: var(--brand-color-primary);
  column-gap: 14px;
  cursor: pointer;
  display: flex;
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-500);
  height: 48px;
  justify-content: center;
  line-height: var(--line-height-l);
  text-align: center;
  width: 302px;

    svg {
      height: 25px;
      width: 25px;
    }
`;

export const FormContainer = styled.section`
  background-color: var(--neutral-color-white-200);
  width: 684px;
  height: 723px;
  background: #EBEFF2;
  box-shadow: 0px 6px 24px 3px rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius-l);
  display: flex;
  padding: 40px;
  flex-direction: column;
  position: relative;

  & > button:first-child {
      position: absolute;
      top: 41.52px;
      right: 41.5px;
      border: none;
      background: transparent;
    }

    div {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 40px;

       img {
        width: 225px;
        height: 225px; 
       } 
    }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  row-gap: 16px;

    label {
      color: #808080;
      font-weight: var(--font-weight-normal);
      font-size: var(--font-size-s);
      line-height: var(--line-height-m);
    }
   

    input {
      height: 40px;
      width: 323px;
      border: 1px solid var(--brand-color-secundary);
      border-radius: var(--border-radius-s);

        &:active {
          border: 1px solid var(--brand-color-primary);
        }
    }
`;

export const FormButton = styled(ButtonAdd)`
  background-color: var(--brand-color-primary);
  color: var(--neutral-color-white-200);
  align-self: flex-end;
  cursor: pointer;
  margin-top: 20px;
`;
