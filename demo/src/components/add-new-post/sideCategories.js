import React from "react";
import { Card,CardHeader,CardBody,ListGroup,
    ListGroupItem,
    FormCheckbox } from "shards-react";

class FormCheckboxExample extends React.Component {

    state = {
      Politics: true,
      Business: false,
      Sports: false
    };
    
  handleChange(e, category) {
    const newState = {};
    newState[category] = !this.state[category];
    this.setState({ ...this.state, ...newState });
    // console.log(this.state);
  }

  componentDidUpdate =( ) => {
    localStorage.setItem("tags", JSON.stringify(this.state));

  }


  render() {
    return (
        <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <strong className="m-0">Select Categories :</strong>
        </CardHeader>
        <CardBody className="p-0">
        <ListGroup flush>
        <ListGroupItem className="px-3 pb-2">
      
        <FormCheckbox
          checked={this.state.Politics}
          onChange={e => this.handleChange(e, "Politics")}
        >
          Politics
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.Business}
          onChange={e => this.handleChange(e, "Business")}
        >
          Business
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.Sports}
          onChange={e => this.handleChange(e, "Sports")}
        >
          Sports
        </FormCheckbox>
        </ListGroupItem>
      </ListGroup>
        
        </CardBody>
  </Card>
    );
  }
}

export default FormCheckboxExample;