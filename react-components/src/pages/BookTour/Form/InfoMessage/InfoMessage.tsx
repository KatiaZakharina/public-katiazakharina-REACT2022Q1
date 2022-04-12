import React from 'react';

import { StyledInfoMessage } from './StyledInfoMessage';

type InfoMessageProps = { success: boolean; hideAlert: () => void };

export class InfoMessage extends React.Component<InfoMessageProps> {
  private successMessage: string;
  private errorMessage: string;
  private hidingTime = 3000;

  constructor(props: InfoMessageProps) {
    super(props);
    this.successMessage = 'Data saved successfully';
    this.errorMessage = 'Something went wrong';
  }
  componentDidMount() {
    setTimeout(this.props.hideAlert, this.hidingTime);
  }

  render() {
    return (
      <StyledInfoMessage success={this.props.success}>
        {this.props.success ? this.successMessage : this.errorMessage}
      </StyledInfoMessage>
    );
  }
}
