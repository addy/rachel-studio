import React from 'react';
import ReactDOM from 'react-dom';
import localforage from 'localforage';
import Router from './routers/Router';
import './stylesheets/styles.css';

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'Rachel Shaw Studio',
});

ReactDOM.render(<Router />, document.getElementById('app'));
