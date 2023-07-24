import React from 'react';
import { Title } from './Title';
import { hallmark } from '../data';

export const Hallmark = () => {
   return (
      <section className="section" id="featured">
         <Title firstText="hallmark" secondText="books" />

         <div className="section-center featured-center">
            {hallmark.map((item) => {
               const { id, image, date, title, info, level, price, stock } =
                  item;
               return (
                  <article className="tour-card" key={id}>
                     <div className="tour-img-container">
                        <img
                           src={image}
                           className="tour-img"
                           alt="image of core maths"
                        />
                        <p className="tour-date">{date}</p>
                     </div>
                     <div className="tour-info">
                        <h4>{title}</h4>
                        <p>{info}</p>
                        <div className="tour-footer">
                           <p>{level}</p>
                           <p>{price}</p>
                           <p>{stock}</p>
                        </div>
                     </div>
                  </article>
               );
            })}
         </div>
         <div className="tour-btn">
            <a href="#" className="btn">
               all books
            </a>
         </div>
      </section>
   );
};
