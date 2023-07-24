export const Title = ({ firstText, secondText }) => {
   return (
      <div className="section-title">
         <h2>
            {firstText} <span>{secondText}</span>
         </h2>
      </div>
   );
};
