import { Close, Content, ModalContainer, StyledModal } from './StyledModal';

type ModalProps = { isVisible: boolean; hideModal: () => void; children: React.ReactNode };

export const Modal = ({ children, hideModal }: ModalProps) => (
  <StyledModal data-testid="modal">
    <ModalContainer>
      <Content>
        <Close onClick={hideModal}>x</Close>
        {children}
      </Content>
    </ModalContainer>
  </StyledModal>
);
