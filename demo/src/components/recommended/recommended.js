import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";



class Recommended extends Component {

  state = {
    img : "",
  }

  componentDidMount(){
    this.setState({img:'http://localhost:8080/'+this.props.image});
  }
    render(){
      return (
        <Col lg="3">         
        <Card >
          <CardImg top src={this.state.img} />
          <CardBody>
            <p>{this.props.title}</p>
          </CardBody>
        </Card>
        <br></br>
        </Col>
      )
    }

}

export default Recommended;
