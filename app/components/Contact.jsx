import React, { Component, Fragment } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import NavBar from './shared/NavBar';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      submissionEmail: '',
      message: '',
      formResponseCode: undefined,
      saving: false
    };
  }

  onSave = e => {
    e.preventDefault();
    const { firstName, lastName, submissionEmail, message } = this.state;
    if (!firstName || !lastName || !submissionEmail || !message) return;

    this.setState({ saving: true });

    fetch('/api/contact', {
      method: 'POST',
      mode: 'same-origin',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email: submissionEmail,
        message
      })
    }).then(res => {
      this.setState({
        formResponseCode: res.status,
        firstName: '',
        lastName: '',
        email: '',
        submissionEmail: '',
        message: '',
        saving: false
      });
    });
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
    const { value } = e.target;
    if (value !== '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      this.setState({ submissionEmail: value, email: value });
    } else {
      this.setState({ submissionEmail: '', email: value });
    }
  };

  onMessageChange = e => {
    if (e.target.value !== '') {
      this.setState({ message: e.target.value });
    } else {
      this.setState({ message: undefined });
    }
  };

  onAlertClose = () => this.setState({ formResponseCode: undefined });

  render() {
    const {
      onSave,
      onFirstNameChange,
      onLastNameChange,
      onEmailChange,
      onMessageChange,
      onAlertClose
    } = this;
    const {
      firstName,
      lastName,
      email,
      submissionEmail,
      message,
      formResponseCode,
      saving
    } = this.state;
    const color = formResponseCode !== undefined && formResponseCode === 200 ? 'green' : 'red';

    return (
      <Fragment>
        <NavBar currentPage={2} />
        <div className="container mx-auto">
          {formResponseCode && (
            <div
              className={`w-1/2 bg-${color}-100 border border-${color}-400 text-${color}-700 px-4 py-3 rounded relative mx-auto mb-5`}
              role="alert"
            >
              <strong className="font-bold">
                {formResponseCode === 200 ? 'Success!' : 'Failure!'}
              </strong>
              <span className="block sm:inline">
                {` ${formResponseCode === 200 ? 'Email sent.' : 'Could not send the email.'}`}
              </span>
              <button
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
                onClick={onAlertClose}
                type="button"
              >
                <svg
                  className={`fill-current h-6 w-6 text-${color}-500`}
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </button>
            </div>
          )}
          <form className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                  id="first-name"
                >
                  First Name*
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                    value={firstName}
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
                  Last Name*
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                    value={lastName}
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
                  Email Address*
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="text"
                    placeholder="jane.doe@email.com"
                    value={email}
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
                  Message*
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-message"
                    type="text"
                    placeholder="..."
                    value={message}
                    onChange={onMessageChange}
                  />
                </label>
              </div>
            </div>
            {saving ? (
              <button
                type="button"
                className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow opacity-50 cursor-not-allowed"
                title="Submitting..."
              >
                <PulseLoader sizeUnit="px" size={10} loading={saving} />
              </button>
            ) : (
              <Fragment>
                {Boolean(firstName) &&
                  Boolean(lastName) &&
                  Boolean(submissionEmail) &&
                  Boolean(message) && (
                    <button
                      type="button"
                      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer"
                      onClick={onSave}
                    >
                      Submit
                    </button>
                  )}
                {(!firstName || !lastName || !submissionEmail || !message) && (
                  <button
                    type="button"
                    className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow opacity-50 cursor-not-allowed"
                    title="Please fill out all fields."
                  >
                    Submit
                  </button>
                )}
              </Fragment>
            )}
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Contact;
