import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Home from "../../Home";
import "../../styles.css";

export default {
  title: "Project/Home",
  component: Home
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const HomePage = Template.bind({});
HomePage.args = {
  title: "10,000+ of our users love our products.",
  description:
    "We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.",
  ratingList: [],
  reviewList: []
};
