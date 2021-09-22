import React from "react";
import Home from "./Home";
import "./styles.css";

export default function App() {
  const data = {
    title: "10,000+ of our users love our products.",
    description:
      "We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.",
    ratingList: [
      {
        provider: "Reviews",
        rating: 5
      },
      {
        provider: "Report Guru",
        rating: 5
      },
      {
        provider: "BestTech",
        rating: 5
      }
    ],
    reviewList: [
      {
        img: {
          mobile: "/images/image-colton.jpg",
          desktop: "/images/image-colton.jpg",
          alt: "colton photo"
        },
        name: "Colton Smith",
        title: "Verified Buyer",
        description:
          "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
      },
      {
        img: {
          mobile: "/images/image-irene.jpg",
          desktop: "/images/image-irene.jpg",
          alt: "irene photo"
        },
        name: "Irene Roberts",
        title: "Verified Buyer",
        description:
          "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purcharse and the speed of delivery"
      },
      {
        img: {
          mobile: "/images/image-anne.jpg",
          desktop: "/images/image-anne.jpg",
          alt: "Anne photo"
        },
        name: "Anne Wallace",
        title: "Verified Buyer",
        description:
          "Put an order with this company and can only praise them for the very high standard. Will definitely ise them again and recommend them to everyone!"
      }
    ]
  };
  return <Home {...data} />;
}
