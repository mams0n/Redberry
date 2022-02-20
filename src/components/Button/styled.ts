import styled from "styled-components";
import { Button } from "antd";

export const SButton = styled(Button)`
  width: 100%;
  height: 56px;
  background: #ef1083;
  border-radius: 28px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  border: none;
  &:hover {
    background: #ca1371;
  }
`;
