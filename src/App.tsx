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
        provider: "Report Guru",
        rating: 3.3
      },
      {
        provider: "Report Guru",
        rating: 3.3
      },
      {
        provider: "Report Guru",
        rating: 3.3
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
          mobile: "/images/image-colton.jpg",
          desktop: "/images/image-colton.jpg",
          alt: "colton photo"
        },
        name: "Colton Smith",
        title: "Verified Buyer",
        description:
          "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
      }
    ]
  };
  return <Home {...data} />;
}
