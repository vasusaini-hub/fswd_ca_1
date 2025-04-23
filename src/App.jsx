import React from "react";
import TestimonialCard from "./components/testimonialCard";

function App(){
  return(
    <div>
      <h1>Testimonial Card</h1>

      <TestimonialCard
      title="EmilyWatson"
      description="This service was amazing! Highly recommended"
      />

      <TestimonialCard
      title="James Willson"
      description="I have never recieved this type of service ever! Try once"
      />
    </div>

  );
}

export default App;