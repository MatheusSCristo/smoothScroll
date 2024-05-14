"use client";
import Description from "@/components/Description";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import { useEffect } from "react";
import styles from "./style.module.scss";
export default function Home() {
  useEffect(() => {
   ( async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })()
  },[]);

  return (
    <main className={styles.main}>
      <Intro/>
      <Description/>
      <Projects/>
    </main>
  );
}
