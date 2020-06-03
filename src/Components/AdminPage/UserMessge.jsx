import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class UserMessage extends Component {
  state = {
    messages: [],
  };

  async componentDidMount() {
    // "http://localhost:5000/api/contact"
    const { data: messages } = await axios.get(
      "https://nisargpatel-portfolio.herokuapp.com/api/contact"
    );
    this.setState({ messages });
  }

  deleteMessage = async (e) => {
    const msgId = e.currentTarget.getAttribute("value");

    // `http://localhost:5000/api/contact/${msgId}`
    const result = await axios.delete(
      `https://nisargpatel-portfolio.herokuapp.com/api/contact/${msgId}`
    );
    const deletedMessage = result.data;
    const messages = this.state.messages.filter(
      (m) => m._id !== deletedMessage._id
    );
    this.setState({ messages });
  };

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
            <a
              href="#"
              // onClick={this.deleteMessage(message._id)}
              onClick={this.deleteMessage}
              className="btn btn-danger delete"
              value={message._id}
            >
              Delete
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
