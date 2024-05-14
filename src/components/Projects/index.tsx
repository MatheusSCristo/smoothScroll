import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

const projects = [
  {
    title: "Salar de Atacama",
    src: "salar_de_atacama.jpg",
  },
  {
    title: "Valle de la luna",
    src: "valle_de_la_muerte.jpeg",
  },
  {
    title: "Miscanti Lake",
    src: "miscani_lake.jpeg",
  },
  {
    title: "Miniques Lagoons",
    src: "miniques_lagoon.jpg",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(1);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: imageContainer.current,
        start: "-=100px",
        end: document.body.offsetHeight,
        pin: true,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.projects}>
      <div className={styles.projectDescription}>
        <div className={styles.imageContainer} ref={imageContainer}>
          <Image
            src={`/images/${projects[selectedProject].src}`}
            fill
            alt="image"
          />
        </div>
        <div className={styles.column}>
          <p>
            The flora is characterized by the presence of high elevation
            wetland,as well as yellow straw,broom sedge,tola de agua and tola
            amaia
          </p>
        </div>
        <div className={styles.column}>
          <p>
            Some, like the southern viscacha, vicuña and Darwins rhea, are
            classified as endangered species. Others, such as Andean goose,
            horned coot, Andean gull, puna tinamou and the three flamingo
            species inhabiting in Chile (Andean flamingo, Chilean flamingo, and
            Jamess flamingo) are considered vulnerable.
          </p>
        </div>
      </div>
      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              className={styles.projectEl}
              key={`p_${index}`}
              onMouseOver={() => setSelectedProject(index)}
            >
              <p>{project.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
