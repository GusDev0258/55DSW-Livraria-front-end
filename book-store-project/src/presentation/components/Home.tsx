import * as React from 'react';
import InformationHeader from './header/Information-header';

export interface HomeProps {
}

export default class Home extends React.Component<HomeProps> {
  public render() {
    return (
      <>
      <InformationHeader/>
        <h1>React TS Home</h1>
      </>
    );
  }
}
