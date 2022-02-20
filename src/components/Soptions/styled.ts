import styled from 'styled-components'

export const SOptions = styled.div`
  .rc-virtual-list-holder-inner {
    padding: 0 6px !important;
  }
  .ant-select-item-option-active {
    background: #1013ef !important;
    border-radius: 10px;
    color: #010414 !important;
  }
  .ant-select-item {
    color: #010414 !important;
    border-radius: 6px;
    &:hover {
      color: #ffffff !important;
      background: blue !important;
    }
  }
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background: #f6f6f7;
    color: #010414 !important;
  }
`
