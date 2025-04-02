import calculateAge from "./CalculateAge";

const myAge: number = calculateAge("1992-03-14");

interface CardInfo {
  firstTitle: string;
  secondTitle: string;
  image: string;
}

interface CardData {
  firstCard: CardInfo;
  secondCard: CardInfo;
  thirdCard: CardInfo;
}

export const cardData: CardData = {
  firstCard: {
    firstTitle: "French citizen",
    secondTitle: `${myAge} years old`,
    image: `${import.meta.env.BASE_URL}/icons/about/france.svg`,
  },
  secondCard: {
    firstTitle: "10 years in",
    secondTitle: "International Trade",
    image: `${import.meta.env.BASE_URL}/icons/about/boat.svg`,
  },
  thirdCard: {
    firstTitle: "Loves Tech,",
    secondTitle: "Sports and Nature",
    image: `${import.meta.env.BASE_URL}/icons/about/shoe.svg`,
  },
};

interface AboutCardProps {
  cardData: CardInfo;
}


const AboutCard: React.FC<AboutCardProps> = ({ cardData }) => {
  return (
    <div className="card">
      <div className="about-logo-container">
        <img
          className="about-logo"
          src={cardData.image}
          alt={`logo of ${cardData.firstTitle}`}
        />
      </div>
      <h4>
        {cardData.firstTitle} <br />
        {cardData.secondTitle}
      </h4>
    </div>
  );
};

export default AboutCard;
