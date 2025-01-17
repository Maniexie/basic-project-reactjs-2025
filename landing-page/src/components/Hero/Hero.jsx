import React from 'react'
import Image from "next/image";
import Nurdian from "../../../public/assets/img/nurdian.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useTypewriter } from 'react-simple-typewriter'


const Hero = () => {
  const [text] = useTypewriter({
    words: ['Nurdian Aprilianto', 'From', 'Pekanbaru', 'Indonesia'],
    loop: 0,
    typeSpeed: 200,
    deleteSpeed: 20
  })
  const [tech] = useTypewriter({
    words: ['Tailwind CSS', 'Bootstrap', 'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Redis'],
    loop: 0,
    typeSpeed: 200,
    deleteSpeed: 20
  })

  return (
    <div className="flex justify-between h-screen">
      {/* <div className="container banner-column"> */}
      <div className="container mx-auto grid grid-cols-2 max-md:grid-cols-1">
        <Image
          className="flex max-md:items-center max:md;justify-center max-md:p-2 max-md:rounded-sm mt-10 "
          src={Nurdian}
          width={500}
          height={500}
          alt="Picture of the author"
        // layout="intrinsic" // layout yang lebih sesuai jika ingin gambar responsif
        />
        <div className="banner-inner md:*:mt-10">
          <h1 className="heading-xl">Experience Media Like Never Before {tech}

          </h1>
          <p className="paragraph">
            Enjoy award-winning stereo beats with wireless listening freedom
            and sleek, streamlined with premium padded and delivering
            first-rate playback.
            <span className='text-2xl'>{text}</span>
          </p>
          {/* <button className="btn btn-darken btn-inline "> */}
          <button className="flex bg-cyan-500 hover:bg-slate-400 rounded-md px-2 py-1">
            Download CV <FaArrowAltCircleRight className="mt-1 ml-1" />
          </button>
          <button>
          </button>
        </div>
        <div className="banner-links">
          <a href="#" title="">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" title="">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" title="">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" title="">
            <i className="bx bxl-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
