import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ReviewStar from "./../../components/ReviewStar";

export default {
  title: "Project/ReviewStar",
  component: ReviewStar
} as ComponentMeta<typeof ReviewStar>;

const Template: ComponentStory<typeof ReviewStar> = (args) => (
  <ReviewStar {...args} />
);

const ReviewStarOne = Template.bind({});
ReviewStarOne.args = {
  provider: "Report Guru",
  rating: 3.3
};

export { ReviewStarOne };
