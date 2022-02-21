import styled from 'styled-components'

export const EditableInput = styled.div`
  box-shadow: none;
  .card-field-input-view {
    padding-left: 0px;
    border: none;
    input {
      width: 250px;
    }
    .ant-input {
    }
  }
  .card-field-input-edit {
    border: none;
    padding-left: 0px;
    input {
      border-bottom: 1px solid #010414 !important;
      width: 250px;
    }
    path {
      color: #5a5a5a;
    }
  }
  .ant-input-affix-wrapper-focused {
    box-shadow: none;
    border: none;
    outline: none;
  }
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: #010414;
  }
  .ant-select-selector {
    border: none;
  }
  svg {
    cursor: pointer;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 8px;
`
