import React, { Component } from 'react';
import { Form, Label, Segment,TextArea,Button} from 'semantic-ui-react';
import Select from 'react-select'
import data from '../data/cards'
class CreateHand extends Component {
  state = {
    card1_rank: '',
    card1_suit:'',
    card2_rank:'',
    card2_suit:'',
    action: '',
    starting_stack: 0,
    ending_stack: 0
  };
  handleCard1 = (e) => {
    console.log('EVENT: ',e)
    console.log('CARD VALUE: ',e.value)
    this.setState({
            card1_rank: e.value.rank,
            card1_suit: e.value.suit
        });
  }
  handleCard2 = (e) => {
    console.log('EVENT: ',e)
    console.log('CARD VALUE: ',e.value)
    this.setState({
        card2_rank: e.value.rank,
        card2_suit: e.value.suit
    });
  }
  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    //console.log('ACTION: ',this.state.action);
  };
  render() {
    const options = data.map((card)=>{
        return {value: card, label:card.rank+card.suit}
    })

    return (
      <Segment onSubmit={(e) => this.props.addNewHand(e, this.state,this.props.id)}>
        <h4>Add Hand</h4>
        <Form>
          <Label>Cards:</Label>
          <Select className ="cardSelect" options={options} onChange={this.handleCard1}></Select>
          <Select className ="cardSelect" options={options} onChange={this.handleCard2}></Select>
          <Label>Action:</Label>
          <Form
            >
            <TextArea name="action"
                      placeholder="Write down what happened in the hand..."
                      value={this.state.action}
                      onChange={this.handleChange}></TextArea>
          </Form>
          <Button type="Submit">Add Hand</Button>
          {/* <Label>Entered with: </Label>
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
          <button type="Submit">Add Session</button> */}
        </Form>
      </Segment>
    );
  }
}

export default CreateHand;
