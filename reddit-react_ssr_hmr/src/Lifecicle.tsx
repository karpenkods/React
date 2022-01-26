import React from "react";

interface ILifecicleProps {
  someProp: number;
}

interface ILifecicleState {
  stateField: number;
  isMounted: boolean;
  hasError: boolean;
}

export class Lifecicle extends React.Component<
  ILifecicleProps,
  ILifecicleState
> {
  constructor(props: ILifecicleProps) {
    super(props);

    this.state = { stateField: 0, isMounted: false, hasError: false };
    // this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(
    props: Readonly<ILifecicleProps>,
    state: Readonly<ILifecicleState>
  ) {
    return { stateField: props.someProp };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  public shouldComponentUpdate(
    nextProps: Readonly<ILifecicleProps>,
    nextState: Readonly<ILifecicleState>,
    nextContext: any
  ): boolean {
    return this.state != nextState || this.props != nextProps;
  }

  public render() {
    if (this.state.hasError) {
      return <div>Error</div>;
    }

    return <div onClick={this.handleClick}>1</div>;
  }

  public getSnapshotBeforeUpdate(
    prevProps: Readonly<ILifecicleProps>,
    prevState: Readonly<ILifecicleState>
  ): any | null {
    return 12345;
  }

  public componentDidUpdate(
    prevProps: Readonly<ILifecicleProps>,
    prevState: Readonly<ILifecicleState>,
    snapshot?: any
  ) {
    if (snapshot > 1000) {
      this.setState({});
    }
  }

  public componentDidMount() {
    document.addEventListener("resize", () => {});
    setTimeout(() => {}, 0);
    this.setState({ isMounted: true });
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    //   logError(errorInfo.componentStack)
  }

  public componentWillUnmount() {
    document.removeEventListener("resize", () => {});
  }

  private handleClick = () => {
    this.setState({ stateField: 1 });
  };
}
