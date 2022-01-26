import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row w-full justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>{icon}</div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Servicios que nos
          <br />
          hacen mejor
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          La mejor opción para comprar y vender sus criptomonedas, con los diversos servicios súper
          amigables que ofrecemos
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Garantía de seguridad"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="La seguridad está garantizada. Siempre mantenemos la privacidad y mantenemos la calidad de nuestros productos."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Mejores tipos de cambio"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Here you will find the best types of exchanges"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Transacciones más rápidas"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="We have the fastest transaction system with smart contracts"
        />
      </div>
    </div>
  </div>
);

export default Services;
