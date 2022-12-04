import React, { useRef } from 'react';

import { ReactComponent as ArrowLeft } from '../../assets/images/slider-arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/images/slider-arrow-right.svg';
import SocialBackground from '../../assets/images/social-section-bg.png'

import Header from '../../components/Header';
import Campaigns from '../../components/Campaigns';
import Transactions from '../../components/Transactions';
import { Section, PureSection } from '../../components/Layout';


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

const TransactionsSection = () => (
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

const SocialSection = () => (
    <PureSection
    background={SocialBackground}
    >
    <h3>Sosyal hesaplar sizlerle!</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    </PureSection>
)

const Dashboard = () => {
    const sliderRef = useRef();

    return (
        <>
        <Header />
        <CampaignsSection sliderRef={sliderRef} />
        <TransactionsSection />
        <SocialSection />
        </>
    );
};

export default Dashboard;
