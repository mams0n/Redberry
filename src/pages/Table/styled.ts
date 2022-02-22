import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 1124px;
  max-width: 100%;
  margin: auto;

  .ant-input::placeholder {
    color: #bfc0c4;
  }
  input {
    max-width: 700px;
  }
`

export const SubHeader = styled.div`
  padding: 20px 0;
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 30px;
  color: #010414;
`

export const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;

  .ant-select {
    height: 56px;
    border-radius: 8px;
  }
  .ant-select-selector {
    height: 100% !important;
    border-radius: 8px !important;
  }
  .ant-select-selection-placeholder {
    display: flex;
    align-items: center;
  }
`
