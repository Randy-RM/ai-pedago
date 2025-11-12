import Card from "../ui/Card";
import Container from "../ui/Container";

const Features = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      title: "Aide à la rédaction",
      description:
        "Générez et reformulez vos contenus pédagogiques grâce à l'IA. Créez des cours, supports et activités en quelques clics.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      title: "Création d'activités et d'évaluations",
      description:
        "Générez automatiquement des exercices, quiz et évaluations adaptés à vos objectifs pédagogiques et au niveau de vos apprenants.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Formation IA génératives",
      description:
        "Module complet de formation à l'usage des IA génératives pour formateurs et apprenants. Maîtrisez les outils de demain.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container maxWidth="7xl" paddingX="lg">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-600 mb-4">
            Tout ce dont vous avez besoin <br /> pour enseigner avec l'IA
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un assistant complet qui transforme votre façon de concevoir et
            délivrer vos formations. Gagnez du temps et améliorez l'engagement
            de vos apprenants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a
                href="#"
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                En savoir plus
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
