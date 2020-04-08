import React from 'react';
import SpinnerIcon from './SpinnerIcon'

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<SpinnerIcon></SpinnerIcon>);
  }
}
export default WithLoading;