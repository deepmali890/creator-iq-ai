import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import State from "@/components/State";
import Testimonial from "@/components/Testimonial";
import WorkFlow from "@/components/WorkFlow";

export default function Home() {
  return (
    <>
      {/* Background grid layer */}
      <div className="grid-background" />

      {/* Scrollable content outside the fixed background */}
      <main>
        <HeroSection />
        {/* More content here so you can scroll */}
        {/* <div style={{ height: "150vh" }}></div> just to test scroll */}
        <Features/>
        <State/>
        <WorkFlow/>
        <Testimonial/>


        
      </main>
    </>
  );
}
