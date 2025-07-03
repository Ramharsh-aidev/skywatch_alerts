'use client';
import { Component, ReactNode } from 'react';
import { Button } from '../ui/button';

interface ErrorBoundaryProps {
  children: ReactNode;
  onRetry?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class FlightErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    this.props.onRetry?.();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-[600px] flex items-center justify-center bg-red-50 rounded-lg">
          <div className="text-center p-6 max-w-md">
            <div className="text-red-500 font-bold text-xl mb-2">
              Flight Data Error
            </div>
            <p className="text-gray-700 mb-4">
              {this.state.error?.message || 'Failed to load flight data'}
            </p>
            <Button 
              onClick={this.handleRetry}
              variant="outline"
              className="bg-white hover:bg-gray-100"
            >
              Retry
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              If the problem persists, try again later or check our status page.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Default export for easier imports
export default FlightErrorBoundary;