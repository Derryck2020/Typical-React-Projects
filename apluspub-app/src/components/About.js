import aboutImg from '../images/logo/CEO.jpg';

import { Title } from './Title';

export const About = () => {
   return (
      <section className="section" id="about">
         <Title firstText="About" secondText="us" />
         {/* <!-- section-title end --> */}
         <div className="section-center about-center">
            {/* <!-- about img wrapper--> */}
            <article className="about-img">
               <img
                  src={aboutImg}
                  className="about-photo"
                  alt="Intro picture"
               />
            </article>
            {/* <!-- about info --> */}
            <article className="about-info">
               <h3>explore the difference</h3>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  tenetur dolores officia modi, deleniti saepe eligendi
                  architecto velit laboriosam in?
               </p>
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                  est, et neque suscipit minus voluptas nihil harum placeat sint
                  mollitia.
               </p>
               <a href="#" className="btn">
                  read more
               </a>
            </article>
         </div>
      </section>
   );
};
