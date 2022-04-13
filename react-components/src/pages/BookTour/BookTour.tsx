import React from 'react';

import { Form } from './Form/Form';
import { TourFormData } from './Form/FormFields';
import { RequestList } from './RequestList/RequestList';
import { StyledBookTour } from './StyledBookTour';

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
      <StyledBookTour data-testid="book_tour_page">
        <Form onSubmit={this.updateRequests} />

        <RequestList requests={this.state.requests} />
      </StyledBookTour>
    );
  }
}
