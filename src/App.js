import React, { useRef } from 'react';
import './App.less';


import { ReactComponent as ArrowLeft } from './assets/images/slider-arrow-left.svg';
import { ReactComponent as ArrowRight } from './assets/images/slider-arrow-right.svg';

import Header from './components/Header';
import Campaigns from './components/Campaigns';
import Transactions from './components/Transactions';
import { Section } from './components/Layout';


const CampaignsSection = (props) => (
  <Section
    title={"SİZE ÖZEL KAMPANYALAR"}
    titleRight={
      <>
        <a href onClick={() => props.sliderRef.current.prev()}>
          <ArrowLeft />
        </a>
        <a href onClick={() => props.sliderRef.current.next()}>
          <ArrowRight />
        </a>
      </>
    }
  >
    <Campaigns sliderRef={props.sliderRef} />
  </Section>
);


const TransactionsSection = (props) => (
  <Section
    title={"HESAP HAREKETLERİ"}
    titleRight={
      <>
        <a href>
          Harcama Analizi <ArrowRight />
        </a>
      </>
    }
  >
    <Transactions />
  </Section>
);


const Dashboard = () => {
  const sliderRef = useRef();

  return (
    <>
      <Header />
      <CampaignsSection sliderRef={sliderRef} />
      <TransactionsSection />
    </>
  );
};


const App = () => (
  <div className="App">
    <Dashboard />
  </div>
);

export default App;
