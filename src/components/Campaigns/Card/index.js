import styled from 'styled-components';


const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 40% auto;

  margin: 0 0;
  margin-right: 10px;
  border-radius: 12px;
  background-color: #fff;
  height: 160px;

  & {
    .image {
      display: grid;
    //   place-items: center;
        position: relative;

        img {
            position: absolute;
            width: 75%;
            bottom: 0;
        }
    }

    .details {
      display: flex;
      //align-items: center;
      justify-content: center;
      flex-direction: column;

      h3.title {
        color: #17171a;
        font-size: 14px;
        font-weight: 600;
      }

      span.description {
        color: #606066;
        font-size: 12px;
        font-weight: normal;
      }
    }
  }
`

const Card = (props) => {
    const {image, title, description, url} = props;

    return (
      <CardContainer>
        <div className={"image"}>
            <img src={image} />
        </div>
        <div className={"details"}>
          <h3 className={"title"}>{title}</h3>
          <span className={"description"}>{description}</span>
          <a href={url}><span></span></a>
        </div>
      </CardContainer>
    );
};

export default Card;