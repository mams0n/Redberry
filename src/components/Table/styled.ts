import styled from 'styled-components'
import { Table } from 'antd'

export const STable = styled(Table)`
  .ant-table {
    .ant-table-container {
      border-radius: 8px !important;
      border: 1px solid #f6f6f7;
    }
    th {
      background: #f6f6f7;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      color: #bfc0c4;
      padding: 19px 32px;
      border-top: 1px solid #f6f6f7;
      &:first-child {
        border-top-left-radius: 8px !important;
      }
      &:last-child {
        border-top-right-radius: 8px !important;
      }
    }
    th:last-child {
      width: 260px;
    }
    tr {
      td {
        padding: 18px 32px;
      }
      td:last-child {
        padding: 10px 32px;
      }
    }
    tbody {
      tr {
        &:last-child {
          td {
            border: none;
          }
        }
      }
    }
  }
`
