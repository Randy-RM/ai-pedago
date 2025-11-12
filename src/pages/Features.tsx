import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const Features = () => {
  const detailedFeatures = [
    {
      icon: "🎯",
      title: "Aide à la rédaction",
      description:
        "Générez des contenus pédagogiques de qualité en quelques secondes. Notre IA comprend vos objectifs et adapte le ton et le niveau.",
      benefits: [
        "Rédaction automatique de cours",
        "Adaptation au niveau des apprenants",
        "Support multilingue",
        "Suggestions de contenu enrichi",
      ],
    },
    {
      icon: "📝",
      title: "Scénarisation intelligente",
      description:
        "Créez des parcours pédagogiques cohérents et engageants. L'IA structure votre formation selon les meilleures pratiques.",
      benefits: [
        "Progression pédagogique optimisée",
        "Variété des activités",
        "Alignement objectifs/évaluations",
        "Templates prêts à l'emploi",
      ],
    },
    {
      icon: "🔄",
      title: "Reformulation experte",
      description:
        "Adaptez vos contenus existants à différents publics et contextes. Simplifiez ou enrichissez selon vos besoins.",
      benefits: [
        "Adaptation de niveau (A1 à C2)",
        "Vulgarisation scientifique",
        "Traduction pédagogique",
        "Résumés automatiques",
      ],
    },
    {
      icon: "✏️",
      title: "Activités interactives",
      description:
        "Générez automatiquement des exercices variés et engageants. QCM, études de cas, mises en situation et plus encore.",
      benefits: [
        "12+ types d'activités",
        "Correction automatique",
        "Feedback personnalisé",
        "Gamification intégrée",
      ],
    },
    {
      icon: "📊",
      title: "Évaluations sur mesure",
      description:
        "Créez des évaluations alignées avec vos objectifs pédagogiques. Diagnostiques, formatives ou sommatives.",
      benefits: [
        "Grilles d'évaluation automatiques",
        "Barèmes intelligents",
        "Analytics de performance",
        "Export multi-formats",
      ],
    },
    {
      icon: "🤖",
      title: "Chatbot tuteur",
      description:
        "Un assistant disponible 24/7 pour vos apprenants. Réponses personnalisées et suivi individuel.",
      benefits: [
        "Support conversationnel",
        "Adaptation au profil apprenant",
        "Rappels et notifications",
        "Historique de progression",
      ],
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Définissez vos objectifs",
      description:
        "Indiquez le sujet, le niveau et les compétences visées. L'IA comprend votre contexte pédagogique.",
      icon: "🎯",
    },
    {
      step: "02",
      title: "L'IA génère le contenu",
      description:
        "En quelques secondes, obtenez un contenu structuré, pertinent et prêt à être utilisé.",
      icon: "⚡",
    },
    {
      step: "03",
      title: "Personnalisez et affinez",
      description:
        "Ajustez le contenu selon vos préférences. L'IA apprend de vos modifications.",
      icon: "🎨",
    },
    {
      step: "04",
      title: "Exportez et partagez",
      description:
        "Téléchargez dans le format de votre choix ou intégrez directement à votre LMS.",
      icon: "🚀",
    },
  ];

  const comparison = [
    {
      aspect: "Création d'un module de 2h",
      without: "8-12 heures",
      with: "1-2 heures",
      savings: "85% de temps gagné",
    },
    {
      aspect: "Génération d'exercices",
      without: "30 min par activité",
      with: "2 min par activité",
      savings: "93% plus rapide",
    },
    {
      aspect: "Adaptation de contenu",
      without: "Réécriture complète",
      with: "Reformulation automatique",
      savings: "90% d'effort économisé",
    },
    {
      aspect: "Qualité pédagogique",
      without: "Variable selon l'auteur",
      with: "Basée sur les meilleures pratiques",
      savings: "Constance garantie",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-white py-20">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Fonctionnalités complètes
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-600 mb-6">
              Toutes les fonctionnalités pour créer des formations d'excellence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez comment IA Pedago transforme votre processus de création
              pédagogique avec des outils intelligents et intuitifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Essayer gratuitement
              </Button>
              <Button variant="outline" size="lg">
                Voir la démo
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed Features Grid */}
      <section className="py-20 bg-white">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Fonctionnalités détaillées
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce dont vous avez besoin pour créer, gérer et diffuser vos
              formations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-600 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600">
              Un processus simple et efficace en 4 étapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <div className="text-primary font-bold text-sm mb-2">
                    ÉTAPE {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-600 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg
                      className="w-8 h-8 text-primary/30"
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
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-white">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Avec ou sans IA Pedago ?
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez le gain de temps et d'efficacité
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 text-gray-600 font-semibold">
                      Tâche
                    </th>
                    <th className="text-center py-4 px-6 text-gray-600 font-semibold">
                      Sans IA
                    </th>
                    <th className="text-center py-4 px-6 text-primary font-semibold">
                      Avec IA Pedago
                    </th>
                    <th className="text-center py-4 px-6 text-gray-600 font-semibold">
                      Gain
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-6 font-medium text-gray-600">
                        {item.aspect}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-500">
                        {item.without}
                      </td>
                      <td className="py-4 px-6 text-center text-primary font-semibold">
                        {item.with}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {item.savings}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Prêt à révolutionner votre enseignement ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Commencez votre essai gratuit dès maintenant. Aucune carte de
              crédit requise.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="!bg-white !text-gray-600 !border-white hover:!bg-primary hover:!text-white hover:!border-white transition-all"
            >
              Démarrer l'essai gratuit
            </Button>
          </div>
        </Container>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
