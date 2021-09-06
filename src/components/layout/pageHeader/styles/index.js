import styled from "styled-components";

const PageHeaderStyles = styled.div`
  background: ${({ theme }) => theme.local__ui.headerBackground};
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  height: 60px;
  width: 100%;
  color: white;
`;

export { PageHeaderStyles };
