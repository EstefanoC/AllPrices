// Image
const Person1 = require("../../assets/images/quotes1.jpg");
const Person2 = require("../../assets/images/quotes2.jpg");
const Person3 = require("../../assets/images/quotes3.jpg");
const Person4 = require("../../assets/images/quotes4.jpg");
const Person5 = require("../../assets/images/quotes5.jpg");
const Person6 = require("../../assets/images/quotes6.jpg");

type QuotesHome = {
  id: number;
  name: string;
  content: string;
  location: string;
  image: string;
};

const Quotes: QuotesHome[] = [
  {
    id: 1,
    name: "Angela Nelson",
    location: "South Africa",
    content:
      "Ever since we started using this service, our productivity has increased significantly. It’s truly a game-changer.",
    image: Person1,
  },
  {
    id: 2,
    name: "Everlee Perkins",
    location: "Sweden",
    content:
      "The customer service is exceptional. They’re always there when we need them. We feel valued as a client.",
    image: Person2,
  },
  {
    id: 3,
    name: "Bentley Tyler",
    location: "United State",
    content:
      "Their service is reliable and efficient. It has become an integral part of our daily operations.",
    image: Person3,
  },
  {
    id: 4,
    name: "Martin Fuller",
    location: "Africa",
    content:
      "What sets this service apart is its ease of use. It’s user-friendly and requires minimal training.",
    image: Person4,
  },
  {
    id: 5,
    name: "Ruth Cabrera",
    location: "Venezuela",
    content:
      "We’ve seen a substantial return on investment since integrating this service into our workflow.",
    image: Person5,
  },
  {
    id: 6,
    name: "Ryder Hall",
    location: "North Korea",
    content:
      "This service has not only met but exceeded our expectations. We couldn’t be happier with the results.",
    image: Person6,
  },
];

export default Quotes;
