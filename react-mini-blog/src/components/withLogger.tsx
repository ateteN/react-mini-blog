import { useEffect, type ComponentType } from 'react';

function withLogger<P extends object>(WrappedComponent: ComponentType<P>) {
  function WithLogger(props: P) {
    useEffect(() => {
      console.log(`[withLogger] ${WrappedComponent.name} mounted`);
      return () => {
        console.log(`[withLogger] ${WrappedComponent.name} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  }

  WithLogger.displayName = `WithLogger(${WrappedComponent.name})`;

  return WithLogger;
}

export default withLogger;