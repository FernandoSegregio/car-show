import styled from 'styled-components';

export const ListContainer = styled.section`
  background-color: var(--neutral-color-white-200);
  width: 100%;
  height: 1116px;
    
    div {
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
