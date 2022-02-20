import styled from 'styled-components'

export const UploadFileContainer = styled.div`
  width: 392px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  .upload_button {
    width: 240px !important;
    height: 48px !important;
    padding: 15px 32px;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    align-self: center;
  }
  .ant-upload {
    padding: 0 !important;
    border: none;
    border-radius: 8px;
  }
`

export const DraggerInner = styled.div`
  background: rgba(246, 246, 247, 0.5);
  border: 1px dashed #e6e6e7;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`

export const DragInfoText = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #010414;
`

export const OrSeparator = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #808189;
`

export const Required = styled.div`
  font-style: italic;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #bfc0c4;
  padding-top: 8px;
`

export const Download = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;
  color: #ef1083;
  margin-top: 8px;
`
