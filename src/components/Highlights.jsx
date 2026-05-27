import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = ( () =>{
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purpe">Library</span>?
          </h2>
          <div className="highlight__wrapper">
            <Highlight 
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              para="Instant online access to purchases!"
            />
            <Highlight 
              icon={<FontAwesomeIcon icon="book-open" />}
              title="10,000+ Books"
              para="Your favorite book in every genre!"
            />
            <Highlight 
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Popular books starting at $10 or less!"
            />  
          </div>
        </div>
      </div>
    </section>
  )
});
export default Highlights;
