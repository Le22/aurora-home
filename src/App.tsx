import "./index.css";
import Header from "./components/header";
import { Features } from "./components/features";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { TextHoverEffect } from "./components/ui/text-hover-effect";
import { Sensors } from "./components/sensors";
import { motion, useScroll, useTransform } from "framer-motion";
import Slogan from "./components/slogan";

function App() {
  const { scrollYProgress } = useScroll();

  const translateY = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  const translateYMini = useTransform(scrollYProgress, [0, 1], [0, -2000]);

  return (
    <main className="bg-black">
      <Header />
      <div className="relative flex flex-col gap-10 items-center justify-center w-full h-screen">
        <motion.div
          style={{
            translateY,
          }}
          className="w-full h-screen absolute top-0 -z-0"
        >
          <img src="presentation.jpg" alt="Aurora" className="w-full h-full" />
        </motion.div>
        <motion.div
          style={{
            translateY: translateYMini,
          }}
        >
          <TextGenerateEffect
            duration={2}
            words={"Une maison en bonne santé"}
          />
        </motion.div>
        <a className="py-3 px-8 rounded-full bg-slate-900 text-white uppercase">
          Découvrir
        </a>
        <div className="absolute bottom-0 right-0 flex flex-col space-y-10 text-white p-10">
          <p className="text-4xl uppercase">
            Tout les données de votre
            <br /> maison à un seul endroit
          </p>
          <a href="#aurora-text" className="underline uppercase cursor-pointer">
            En apprendre plus
          </a>
        </div>
        <div className="absolute bottom-0 left-0 flex flex-col space-y-10 text-white p-10">
          <p className="text-4xl uppercase">
            Une solution <br /> 100% open-source
          </p>
          <p className="uppercase cursor-pointer">
            Concevez vous même votre Aurora{" "}
          </p>
        </div>
      </div>
      <div className="h-screen bg-black flex items-center justify-center">
        <TextHoverEffect text="AURORA" />
      </div>
      <Sensors />
      <Features />
      <Slogan />
    </main>
  );
}

export default App;
