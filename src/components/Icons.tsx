import React from "react";
import "../css/icons.css";

interface Benefit {
    icon: string;
    title: string;
}

const benefits: Benefit[] = [
    {
        icon: "",
        title: "FaceBook  ",
    },
     {
        icon: "",
        title: "Instargram  ",
    },
     {
        icon: "",
        title: "Tiktok  ",
    },
     {
        icon: "",
        title: "Whatsapp Channel  ",
    },
];
const Icons: React.FC = () => {


  return (
    <>
      <h3 className="title">Follow Us On </h3>

      <div className="list">
        {benefits.map((benefit, index)=> (
            <div className="IconsList"
            key={index}
            style={{ animationDelay: `${index * 0.15}s`}}
            >
                    <div className="Icons-benefit" role="img" aria-label={benefit.title}>
                        {benefit.icon}
                    </div>
                    <h5 className="benefit">{benefit.title}</h5>
            </div>
        ))}
      </div>
    </>
  );
};

export default Icons;
