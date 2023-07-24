import { gallery } from '../data';

export const Gallery = () => {
   return (
      <section id="gallery">
         <div className="gallery-center">
            {gallery.map((item) => {
               const { id, href, image } = item;
               return (
                  <article className="gallery-img-container" key={id}>
                     <img src={image} className="gallery-img" alt="" />
                     <a href={href} className="gallery-icon">
                        <i className="fas fa-search"></i>
                     </a>
                  </article>
               );
            })}
         </div>
      </section>
   );
};
