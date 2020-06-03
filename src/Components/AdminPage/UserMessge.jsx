import React, { Component } from "react";
import axios from "axios";

class UserMessage extends Component {
  state = {
    messages: [],
  };

  async componentDidMount() {
    const { data: messages } = await axios.get(
      "http://localhost:5000/api/contact"
    );
    this.setState({ messages });
  }

  render() {
    const messages = this.state.messages;

    const card = messages.map((message) => {
      return (
        <div key={message._id} className="card messageCard">
          <div className="card-header">{message.userName} </div>
          <div className="card-body">
            <h6 className="card-title">{message.createdAt}</h6>

            <p className="card-text">{message.userMessage}</p>
            <a href={`mailto:${message.userEmail}`} className="btn btn-primary">
              Email
            </a>
          </div>
        </div>
      );
    });

    return (
      <div>
        <React.Fragment>{card}</React.Fragment>
      </div>
    );
  }
}

export default UserMessage;
