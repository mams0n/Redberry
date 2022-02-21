import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

body {
    font-family: 'Inter', sans-serif;

    .ant-dropdown,
    .ant-dropdown-placement-topCenter {
    background: rgba(0, 0, 0, 0.5);
    padding: 10px !important;
    border-radius: 10px;
    max-width: 250px;
    span {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
}

`
