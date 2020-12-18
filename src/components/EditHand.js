import React, { Component } from 'react';
import { Form, Label, Segment,TextArea,Button} from 'semantic-ui-react';
import Select from 'react-select'
import data from '../data/cards'
import axios from 'axios';

const apiURL = 'http://localhost:5000';

class EditHand extends Component {
  state = {
    card1_rank: '',
    card1_suit:'',
    card2_rank:'',
    card2_suit:'',
    action: '',
    starting_stack: '',
    ending_stack: ''
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


  setInitialState = () =>{
      console.log(this.props.hand);
  }

  componentDidMount(){
      this.setInitialState();
  }
  render() {
    const options = data.map((card)=>{
        return {value: card, label:card.rank+card.suit}
    })

    return (
      <Segment onSubmit={() => this.props.editHand(this.props.id, this.state)}>
        <h4>View/Edit Hand</h4>
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
          <Form.Input
            type="number"
            placeholder="$ starting stack"
            name="starting_stack"
            value={this.state.start_money}
            onChange={this.handleChange}
          />
          <Form.Input
            type="number"
            placeholder="$ ending stack"
            name="ending_stack"
            value={this.state.start_money}
            onChange={this.handleChange}
          />
          <Button type="Submit">Save Hand</Button>
        </Form>
      </Segment>
    );
  }
}

export default EditHand;