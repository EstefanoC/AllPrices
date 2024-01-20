// Ts
import { IconType } from "react-icons";

// Icon
import { FaTrophy } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";

type StepsHome = {
  id: number;
  label: string;
  content: string;
  Icon: IconType;
};

const Steps: StepsHome[] = [
  {
    id: 1,
    label: "Just Search",
    content: "Use our search engine to find your product",
    Icon: FaSearchDollar,
  },
  {
    id: 2,
    label: "Compare",
    content: "Compare prices of all matches",
    Icon: IoGridOutline,
  },
  {
    id: 3,
    label: "Choose one",
    content: "Select between the ones that best suit you",
    Icon: FaTrophy,
  },
];

export default Steps;
