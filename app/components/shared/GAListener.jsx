import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import ReactGA from 'react-ga';

const sendPageView = location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
};

const GAListener = ({ children, trackingID, history }) => {
  useEffect(() => {
    ReactGA.initialize(trackingID);
    sendPageView(history.location);
    return history.listen(sendPageView);
  }, [history, trackingID]);

  return children;
};

GAListener.propTypes = {
  children: PropTypes.node,
  trackingID: PropTypes.string,
  history: PropTypes.shape({
    listen: PropTypes.func
  })
};

export default withRouter(GAListener);
