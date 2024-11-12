import { GlareCard } from "./ui/glare-card";

const Slogan = () => {
  return (
    <div className="h-screen flex items-center justify-around">
      <div className="flex flex-col gap-8">
        <h2 className="font-medium text-4xl text-white">
          Vous êtes passionné par l'IoT et l'open source ?
        </h2>
        <p className="text-white leading-[150%] text-lg">
          Rejoignez notre projet !
          <br />
          Nous créons un boîtier intelligent équipé de capteurs
          <br />
          (température, humidité, CO2) pour surveiller la santé de votre maison.
          <br />
          Avec un site web intégré, vous pourrez suivre les données et recevoir
          <br />
          des conseils personnalisés. Ensemble, créons un impact réel.
          <br />
          Votre talent peut faire la différence !
        </p>
      </div>

      <GlareCard className="flex flex-col items-center justify-center">
        <p className="text-white font-bold text-xl mt-4">Rejoindre</p>
      </GlareCard>
    </div>
  );
};

export default Slogan;
