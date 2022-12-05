import { Carousel } from 'antd';

import styled from 'styled-components';

import Card from './Card';

import CampaignTurkcell from '../../assets/images/campaign-turkcell.png';
import CampaignGame from '../../assets/images/campaign-game.png';
import CampaignFups from '../../assets/images/campaign-fups.png';

const Dot = styled.div`
    width: 8px;
    height: 8px;
    background-color: #e8e8f0;
    border-radius: 50%;
`

const defaultSettings = {
    dots: true,
    slidesToShow: 4.1,
    slidesToScroll: 1,
    infinite: false,
    customPaging: i => (<Dot />),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3.1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.1,
        }
      }
    ]
  };


const CampaignsContainer = styled.div`
  .slick-track {
    top: 22px;
    height: 185px;
  }

  .slick-dots {
    bottom: -24px;
  }

  .slick-dots > li.slick-active {
    width: 16px;

    & > div {
        background-color: #155ed4;
    }
  }
`


function Campaigns(props) {
    return (
        <CampaignsContainer>
            <Carousel ref={props.sliderRef} {...defaultSettings}>
                <Card image={CampaignTurkcell} title={"Lorem ipsum dolor"} description={"Lorem ipsum dolor sit amet"} url={"#"}></Card>
                <Card image={CampaignGame} title={"Lorem ipsum dolor"} description={"Lorem ipsum dolor sit amet"} url={"#"}></Card>
                <Card image={CampaignFups} title={"Lorem ipsum dolor"} description={"Lorem ipsum dolor sit amet"} url={"#"}></Card>
                <Card image={CampaignTurkcell} title={"Lorem ipsum dolor"} description={"Lorem ipsum dolor sit amet"} url={"#"}></Card>
                <Card image={CampaignGame} title={"Lorem ipsum dolor"} description={"Lorem ipsum dolor sit amet"} url={"#"}></Card>
                <Card image={CampaignFups} title={"Lorem ipsum dolor"} description={"Lorem ipsum dolor sit amet"} url={"#"}></Card>
                <Card image={CampaignTurkcell} title={"Lorem ipsum dolor"} description={"Lorem ipsum dolor sit amet"} url={"#"}></Card>
                <Card image={CampaignGame} title={"Lorem ipsum dolor"} description={"Lorem ipsum dolor sit amet"} url={"#"}></Card>
                <Card image={CampaignFups} title={"Lorem ipsum dolor"} description={"Lorem ipsum dolor sit amet"} url={"#"}></Card>
            </Carousel>
        </CampaignsContainer>
    );  
  }

export default Campaigns;