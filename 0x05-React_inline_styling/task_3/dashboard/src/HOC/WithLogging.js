import React from 'react';

function GetHOC(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function WithLogging(WrappedComponent) {
  class HOCLogging extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent} is mounted`)
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent} is going to unmount`)
    }

    render() {
      return <WrappedComponent />;
    }
  }
  HOCLogging.displayName = `WithLogging(${GetHOC(WrappedComponent)})`;
  return HOCLogging;
};
