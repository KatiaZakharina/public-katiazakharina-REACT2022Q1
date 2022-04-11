import { Component } from 'react';

import { Close, Content, ModalContainer, StyledModal } from './StyledModal';

type ModalProps = { isVisible: boolean; hideModal: () => void; children: React.ReactNode };

export class Modal extends Component<ModalProps> {
  constructor(props: ModalProps) {
    super(props);
  }

  render() {
    return (
      <StyledModal data-testid="modal">
        <ModalContainer>
          <Content>
            <Close onClick={this.props.hideModal}>&times;</Close>
            {this.props.children}
          </Content>
        </ModalContainer>
      </StyledModal>
    );
  }
}
