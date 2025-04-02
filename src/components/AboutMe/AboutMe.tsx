import Card, { cardData } from "./Card";
import Title from "./Title";

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
const AboutMe: React.FC = () => {
  return (
    <section className="about-container" id="AboutIdForScroll">
      <Title />
      {/* mapping and rendering cards about me : */}
      <div className="cards-container">
        {Object.keys(cardData).map((key) => (
          <Card key={key} cardData={cardData[key as keyof CardData]} />
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
