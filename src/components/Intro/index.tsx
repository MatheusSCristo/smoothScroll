import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import styles from "./style.module.scss";

const Intro = () => {

  const backgroundImageRef=useRef(null);
  const introImageRef=useRef(null);

  useLayoutEffect(()=>{ 
    gsap.registerPlugin(ScrollTrigger);
    let ctx=gsap.context(()=>{

      
      
      const timeline=gsap.timeline({
        scrollTrigger:{
          trigger:document.documentElement,
          start:"top",
          end:"+=500px",
          scrub:true,
        }
      });
      timeline
      .from(backgroundImageRef.current,{clipPath:"inset(15%)"})
      .to(introImageRef.current,{height:"200px"},0)
    })
    return()=>ctx.revert();
  },[])



  return (
    <div className={styles.intro}>
      <div className={styles.backgroundImage} ref={backgroundImageRef}>
        <Image
          src={"/images/background.jpeg"}
          fill={true}
          alt="Background image"
        />
      </div>
      <div className={styles.introContainer }>
        <div data-scroll data-scroll-speed="0.3" className={styles.introImage} ref={introImageRef}>
          <Image src={"/images/intro.png"} fill={true} alt="Intro image" />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">Smooth Scroll</h1>
      </div>
    </div>
  );
};

export default Intro;
