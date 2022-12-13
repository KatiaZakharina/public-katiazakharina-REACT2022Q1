import styled from 'styled-components';
import { BOX_SHADOW_SIDE, WHITE } from 'styles/constants';

const SUCCESS = '#28a745',
  ERROR = '#dc3545';

export const StyledInfoMessage = styled.div<{ success: boolean }>`
  position: fixed;
  top: 60px;
  left: calc(50% - 100px);
  padding: 10px 20px;
  border-radius: 5px;
  color: ${WHITE};
  font-size: 14px;
  font-weight: 800;
  box-shadow: ${BOX_SHADOW_SIDE};
  z-index: 3;

  background-color: ${({ success }) => (success ? SUCCESS : ERROR)};

  &.slide-in-down {
    transform: translateY(-100%) translateX(-50%);
  }

  &.animate {
    opacity: 0;
    transition: all 1s;
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  &.animate.active {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%);
  }
`;
