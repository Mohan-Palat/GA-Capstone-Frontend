import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateSession extends Component {
  state = {
    location: '',
    start_money: '',
    end_money: ''
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  render() {
    return (
      <Segment>
        <h4>Add Session</h4>
        <Form>
          <Label>Location:</Label>
          <Form.Input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <Label>Entered with: $</Label>
          <Form.Input
            type="number"
            name="start_money"
            value={this.state.start_money}
            onChange={this.handleChange}
          />
          <Label>Exited with: $</Label>
          <Form.Input
            type="number"
            name="end_money"
            value={this.state.end_money}
            onChange={this.handleChange}
          />
          <button type="Submit">Add Session</button>
        </Form>
      </Segment>
    );
  }
}

export default CreateSession;
