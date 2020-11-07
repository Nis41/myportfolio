import React, { Component } from "react";
import axios from "axios";

import Pagination from "./Pagination";
import { paginate } from "./paginate";
import { Constant } from "../../lib/Constants";

class UserMessage extends Component {
  state = {
    messages: [],
    currentPage: 1,
    pageSize: 4,
    totalCount: 0,
  };

  async componentDidMount() {
    const { data } = await axios.get(`${Constant.BASE_URL}/contact`);
    this.setState({ messages: data, totalCount: data.length });
  }

  deleteMessage = async (e) => {
    const msgId = e.currentTarget.getAttribute("value");
    const time = new Date().toLocaleTimeString();
    const result = await axios.put(`${Constant.BASE_URL}/contact/${msgId}`, {
      time: time,
    });
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
