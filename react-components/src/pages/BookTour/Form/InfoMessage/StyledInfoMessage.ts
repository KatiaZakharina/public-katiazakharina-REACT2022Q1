import styled from 'styled-components';

const SUCCESS = '#28a745',
  ERROR = '#dc3545';

export const StyledInfoMessage = styled.div<{ success: boolean }>`
  position: fixed;
  top: 60px;
  left: calc(50% - 100px);
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  font-weight: 800;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.05);
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
