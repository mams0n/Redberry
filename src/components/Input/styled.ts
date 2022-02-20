import styled from "styled-components";
import { Input } from "antd";

export const SInput = styled(Input)`
  border: 1px solid #e6e6e7;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 56px;
  padding: 18px 24px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #bfc0c4;
  }
`;
