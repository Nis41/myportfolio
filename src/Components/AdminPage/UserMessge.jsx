import React, { Component } from "react";
import Pagination from "./Pagination";
import { paginate } from "./paginate";

import axios from "axios";

class UserMessage extends Component {
  state = {
    messages: [],
    currentPage: 1,
    pageSize: 4,
    totalCount: 0,
  };

  async componentDidMount() {
    // "http://localhost:5000/api/contact"
    const { data } = await axios.get(
      "https://nisargpatel-portfolio.herokuapp.com/api/contact"
    );
    this.setState({ messages: data, totalCount: data.length });
  }

  deleteMessage = async (e) => {
    const msgId = e.currentTarget.getAttribute("value");
    const time = new Date().toLocaleTimeString();
    // `http://localhost:5000/api/contact/${msgId}`
    // https://nisargpatel-portfolio.herokuapp.com
    const result = await axios.put(
      `http://localhost:5000/api/contact/${msgId}`,
      {
        time: time,
      }
    );
    const deletedMessage = result.data;
    const messages = this.state.messages.filter(
      (m) => m._id !== deletedMessage._id
    );
    this.setState({ messages });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const { pageSize, currentPage, messages } = this.state;

    const data = paginate(messages, currentPage, pageSize);

    return { messages: data };
  };

  render() {
    const { messages } = this.getPagedData();
    // const messages = this.state.messages;
    const card = messages.map((message) => {
      return (
        <div key={message._id} className="card messageCard">
          <div className="card-header">{message.userName}</div>
          <div className="card-body">
            <h6 className="card-title">{message.createdAt}</h6>
            <p className="card-text">{message.userMessage}</p>
            <a href={`mailto:${message.userEmail}`} className="btn btn-primary">
              Email
            </a>
            <button
              // onClick={this.deleteMessage(message._id)}
              onClick={this.deleteMessage}
              className="btn btn-danger delete"
              value={message._id}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });

    return (
      <div>
        <React.Fragment>
          {card}
          <Pagination
            itemsCount={this.state.totalCount}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </React.Fragment>
      </div>
    );
  }
}

export default UserMessage;
