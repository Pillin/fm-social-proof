import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ReviewCard from "./../../components/ReviewCard";

export default {
  title: "Project/ReviewCard",
  component: ReviewCard
} as ComponentMeta<typeof ReviewCard>;

const Template: ComponentStory<typeof ReviewCard> = (args) => (
  <ReviewCard {...args} />
);

export const ReviewCardOne = Template.bind({});

ReviewCardOne.args = {
  img: {
    mobile: "/images/image-colton.jpg",
    desktop: "/images/image-colton.jpg",
    alt: "colton photo"
  },
  name: "Colton Smith",
  title: "Verified Buyer",
  description:
    "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
};
