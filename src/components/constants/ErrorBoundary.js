import React from 'react';




export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // componentDidCatch() {

  // }
  render() {
    if (this.state.hasError) {
      return (
        <h2>something blew up</h2>
      );
    }
    return this.props.children;
  }


}
