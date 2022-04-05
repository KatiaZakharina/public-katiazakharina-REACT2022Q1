import React from 'react';

import { Description } from './Description/Description';
import { Form, TourFormData } from './Form/Form';
import { RequestList } from './RequestList/RequestList';
import { StyledBookTour, FormInfo } from './StyledBookTour';

type BookTourState = { requests: Array<TourFormData> };

export class BookTour extends React.Component<Record<string, never>, BookTourState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      requests: JSON.parse(localStorage.getItem('tour_requests') ?? '[]'),
    };

    window.addEventListener('beforeunload', this.saveInLocalStorage);
  }

  updateRequests = (data: TourFormData) => {
    this.setState((prevState) => ({
      requests: [...prevState.requests, data],
    }));
  };

  componentWillUnmount() {
    this.saveInLocalStorage();
  }

  saveInLocalStorage = () => {
    localStorage.setItem('tour_requests', JSON.stringify(this.state.requests));
  };

  render() {
    return (
      <StyledBookTour>
        <Form onSubmit={this.updateRequests} />

        <FormInfo>
          <Description />
          <RequestList requests={this.state.requests} />
        </FormInfo>
      </StyledBookTour>
    );
  }
}