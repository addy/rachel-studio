import React from 'react';
import ReactDOM from 'react-dom';
import localforage from 'localforage';
import Router from './routers/Router';
import './stylesheets/styles.css';

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'Rachel Shaw Studio',
});

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Router />, document.getElementById('app'));
