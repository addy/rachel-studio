import React, { Component, Fragment } from 'react';
import NavBar from './shared/NavBar';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      message: undefined
    };
  }

  onSave = e => {
    e.preventDefault();
    const { firstName, lastName, email, title, message } = this.state;
    if (!firstName || !lastName || !email || !title || !message) return;
  };

  onFirstNameChange = e => {
    if (e.target.value !== '') {
      this.setState({ firstName: e.target.value });
    } else {
      this.setState({ firstName: undefined });
    }
  };

  onLastNameChange = e => {
    if (e.target.value !== '') {
      this.setState({ lastName: e.target.value });
    } else {
      this.setState({ lastName: undefined });
    }
  };

  onEmailChange = e => {
    if (e.target.value !== '') {
      this.setState({ email: e.target.value });
    } else {
      this.setState({ email: undefined });
    }
  };

  onMessageChange = e => {
    if (e.target.value !== '') {
      this.setState({ message: e.target.value });
    } else {
      this.setState({ message: undefined });
    }
  };

  render() {
    const { onSave, onFirstNameChange, onLastNameChange, onEmailChange, onMessageChange } = this;

    return (
      <Fragment>
        <NavBar currentPage={2} />
        <div className="container mx-auto">
          <form className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                  id="first-name"
                >
                  First Name
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                    onChange={onFirstNameChange}
                  />
                </label>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                  id="last-name"
                >
                  Last Name
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                    onChange={onLastNameChange}
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                  id="email"
                >
                  Email Address
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="text"
                    placeholder="jane.doe@email.com"
                    onChange={onEmailChange}
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-message"
                  id="message"
                >
                  Message
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-message"
                    type="text"
                    placeholder="..."
                    onChange={onMessageChange}
                  />
                </label>
              </div>
            </div>
            <button
              type="button"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={onSave}
            >
              Submit
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Contact;
