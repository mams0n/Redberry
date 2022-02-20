import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  width: 392px;
  margin-top: 120px;

  .username,
  .password {
    display: flex;
    flex-direction: column;
    gap: 8px !important;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #010414;
  }
  .username {
    margin-top: 40px;
  }
  .password {
    margin-top: 16px;
    margin-bottom: 24px;
  }
  .ant-form-item-explain-error {
    position: absolute;
    color: red;
    font-size: 12px;
  }
`;

export const LoginTitle = styled.div`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #010414;
`;

export const LoginSubtext = styled.div`
  margin-top: 16px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #808189;
`;
