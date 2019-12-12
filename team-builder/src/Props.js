import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
  } from 'reactstrap';

const Properties = (props) => {
  return (
    <div>
      {props.List.map(info => {
        return (
          <div>
            <Card className="Card">
              <CardBody className="cardBody">
              <CardTitle className="title">Name: {info.fname}</CardTitle>
              <CardText className="text">Surname: {info.lname} </CardText>
              <CardText className="text"> School: {info.sch} </CardText>
              </CardBody>
            </Card>
          </div>
        )
      })}
    </div>
  )


};

export default Properties;