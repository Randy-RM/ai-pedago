import { useState, FormEvent } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would normally send the email to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
      <Container maxWidth="7xl" paddingX="lg">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Commencez votre essai gratuit dès aujourd'hui !
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Découvrez comment l'IA peut révolutionner votre enseignement. Aucune
            carte de crédit requise.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
              className="w-full px-6 py-3 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              type="submit"
              variant="outline"
              size="md"
              className="!bg-white !text-gray-600 !border-white hover:!bg-primary hover:!text-white hover:!border-white whitespace-nowrap transition-all"
            >
              Démarrer
            </Button>
          </form>

          {submitted && (
            <p className="text-white font-medium animate-pulse">
              Merci pour votre inscription !
            </p>
          )}

          <p className="text-sm text-white/80 mt-4">
            Rejoignez plus de 1000 formateurs qui utilisent déjà IA Pedago
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
