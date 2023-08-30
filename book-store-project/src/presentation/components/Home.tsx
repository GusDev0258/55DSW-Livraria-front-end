import * as React from 'react';
import InformationHeader from './header/Information-header';
import Header from './header/Header';

export interface HomeProps {
}

export default class Home extends React.Component<HomeProps> {
  public render() {
    return (
      <>
      <InformationHeader/>
      <Header/>
        <h1 className='text-gray-950'>React TS Home</h1>
      </>
    );
  }
}
