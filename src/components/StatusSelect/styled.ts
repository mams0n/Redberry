import styled from 'styled-components'
import { Select } from 'antd'

export const StatusSelectContainer = styled.div`
  .ant-select-selector {
    background: #f6b639;
    color: #fff;
    min-width: 110px;
    box-shadow: none;
    border-radius: 8px !important;
    border: none !important;
    padding-left: 20px !important;
    height: 38px !important;
    .ant-select-selection-item {
      padding-top: 3px;
      font-weight: 500;
      font-size: 14px;
    }
  }
  .ant-select-selection-search {
    width: 106px !important;
    border-right: 1px solid #fff !important;
    height: 38px !important;
  }
  &.firstContact {
    .ant-select-selector {
      background: #1013ef;
    }
    svg path {
      fill: #ffffff;
    }
  }
  &.approved {
    .ant-select-selector {
      background: #10ef7c;
      color: #000000;
    }
  }
  &.rejected {
    .ant-select-selector {
      background: #fa1b1b;
    }
    svg path {
      fill: #ffffff;
    }
  }
  &.interview {
    .ant-select-selector {
      background: #efec10;
      color: #000000;
    }
  }
  .ant-select-focused .ant-select-selector,
  .ant-select-selector:focus,
  .ant-select-selector:active,
  .ant-select-open .ant-select-selector {
    border-color: #d9d9d9 !important;
    box-shadow: none !important;
  }
  .ant-select-item-option-active {
    color: red !important;
    background: green !important;
  }
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    color: inherit !important;
  }
`

export const SSelect = styled(Select)``
