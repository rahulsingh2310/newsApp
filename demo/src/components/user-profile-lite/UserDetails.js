import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";

const UserDetails = ({ userDetails }) => (
  <Card small className="mb-4 pt-3 sticky-top" style={{top:"69px"}}>
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={userDetails.avatar}
          alt={userDetails.name}
          width="110"
        />
      </div>
      <h4 className="mb-0">{userDetails.name}</h4>
      <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
      <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">person_add</i> Follow
      </Button>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          {userDetails.metaTitle}
        </strong>
        <span>{userDetails.metaValue}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: "Chris messina",
    avatar: require("./../../images/avatars/0.jpg"),
    jobTitle: "Project Manager",
    metaTitle: "Description",
    metaValue:
      "Chris Messina has spent over 15 years  living on the edge of social technology. He has designed products and experiences for Google and Uber, founded startups, and changed the world by giving away many of his creations, including the hashtag. His skillset is broad, anchored in product and user experience design. He lead developer experience at Uber and co-founded Molly (YC W’18), a conversational social AI."
  }
};

export default UserDetails;
