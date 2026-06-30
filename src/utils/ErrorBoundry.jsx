import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  // Update state when an error occurs
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  // Log the error
  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary Caught:", error, errorInfo);

    this.setState({
      errorInfo,
    });

    // You can also send errors to:
    // Sentry
    // LogRocket
    // Firebase Crashlytics
    // Custom Backend
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "40px",
            textAlign: "center",
            fontFamily: "Arial",
          }}
        >
          <h1>Something went wrong 😢</h1>

          <p>
            An unexpected error occurred while rendering this page.
          </p>

          <button onClick={this.handleReload}>
            Reload Page
          </button>

          {import.meta.env.DEV && (
            <details
              style={{
                marginTop: 20,
                textAlign: "left",
                whiteSpace: "pre-wrap",
              }}
            >
              <summary>Error Details</summary>

              <p>{this.state.error?.toString()}</p>

              <pre>{this.state.errorInfo?.componentStack}</pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;