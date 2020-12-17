import React, { Component } from 'react';
import { Form, Label, Segment } from 'semantic-ui-react';

class CreateHand extends Component {
  state = {
    card1Rank: '',
    card1Suit:'',
    card2Rank:'',
    card2Suit:'',
    start_money: '',
    end_money: ''
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  render() {
    return (
      <Segment onSubmit={(e) => this.props.addNewSession(e, this.state)}>
        <h4>Add Session</h4>
        <Form>
          <Label>Location:</Label>
          <Form.Input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <Label>Entered with: </Label>
          <Form.Input
            type="number"
            placeholder="$"
            name="start_money"
            value={this.state.start_money}
            onChange={this.handleChange}
          />
          <Label>Exited with: </Label>
          <Form.Input
            type="number"
            placeholder="$"
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

export default CreateHand;
