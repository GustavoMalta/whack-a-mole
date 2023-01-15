import styled from 'styled-components';

export const Div = styled.div`
  position: absolute;
  width: inherit;
`;

export const Table = styled.table`
  width: 100%;
  font-size: 45px;
  line-height: 15px;
  border-collapse: separate;
  border-spacing: 0 6px;

  & thead {
    font-family: @main-bold-font;
    text-align: left;

    & tr {
      & th {
        padding: 0px 30px 40px;
      }
    }
  }

  & tbody {
    position: relative;
    top: -2px;

    & tr {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 45px;
    }

    & td {
      padding-left: 40px;
      font-size: 35px;
    }
  }
`;
