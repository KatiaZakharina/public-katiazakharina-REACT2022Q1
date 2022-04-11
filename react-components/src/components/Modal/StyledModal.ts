import styled from 'styled-components';

import { BLACK, WHITE } from 'styles/constants';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: ${BLACK};
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
`;
export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75vw;
  max-width: 1200px;
  min-width: 290px;
  padding: 35px 20px;
  background-color: ${WHITE};
  border-radius: 20px;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const Close = styled.div`
  position: absolute;
  top: 8px;
  right: 24px;
  font-size: 50px;
  color: ${BLACK};
  opacity: 0.5;
  font-weight: 100;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
