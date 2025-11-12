import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const Formation = () => {
  const formations = [
    {
      level: "Débutant",
      title: "Découverte d'IA Pedago",
      duration: "3 heures",
      price: "Gratuit",
      description:
        "Apprenez les bases de l'utilisation d'IA Pedago pour créer vos premiers contenus pédagogiques.",
      modules: [
        "Introduction à l'IA pédagogique",
        "Prise en main de l'interface",
        "Créer son premier contenu",
        "Exercices pratiques guidés",
      ],
      popular: false,
      cta: "Commencer gratuitement",
    },
    {
      level: "Avancé",
      title: "Maîtrise de l'IA pédagogique",
      duration: "6 heures",
      price: "Inclus dans le plan Formateur",
      description:
        "Devenez expert en scénarisation et création pédagogique assistée par IA.",
      modules: [
        "Scénarisation avancée",
        "Personnalisation des contenus",
        "Création d'évaluations complexes",
        "Intégration LMS",
        "Optimisation du workflow",
        "Cas pratiques réels",
      ],
      popular: true,
      cta: "Accéder à la formation",
    },
    {
      level: "Administrateur",
      title: "Gestion d'établissement",
      duration: "4 heures",
      price: "Inclus dans le plan Établissement",
      description:
        "Administrez IA Pedago pour votre organisation et formez vos équipes.",
      modules: [
        "Configuration multi-utilisateurs",
        "Gestion des droits et rôles",
        "Intégration entreprise",
        "Formation des formateurs",
        "Suivi et analytics",
      ],
      popular: false,
      cta: "Nous contacter",
    },
  ];

  const learningModules = [
    {
      icon: "🎓",
      title: "Introduction à l'IA pédagogique",
      description:
        "Comprenez les principes de l'intelligence artificielle appliquée à la pédagogie.",
      duration: "45 min",
    },
    {
      icon: "🚀",
      title: "Créer son premier cours avec IA Pedago",
      description: "Guidé pas à pas, créez un cours complet du début à la fin.",
      duration: "1h30",
    },
    {
      icon: "🎬",
      title: "Scénariser avec l'IA",
      description:
        "Maîtrisez l'art de la scénarisation pédagogique assistée par IA.",
      duration: "2h",
    },
    {
      icon: "🔗",
      title: "Intégrer avec votre LMS",
      description: "Connectez IA Pedago à Moodle, Canvas ou votre LMS préféré.",
      duration: "1h",
    },
    {
      icon: "💡",
      title: "Bonnes pratiques et cas d'usage",
      description:
        "Découvrez les meilleures façons d'utiliser IA Pedago au quotidien.",
      duration: "1h15",
    },
    {
      icon: "⚡",
      title: "Fonctionnalités avancées",
      description:
        "Exploitez tout le potentiel d'IA Pedago avec les fonctions expertes.",
      duration: "2h",
    },
  ];

  const upcomingWebinars = [
    {
      date: "15 Nov 2025",
      time: "14h00 - 15h30",
      title: "Créer des évaluations efficaces avec l'IA",
      speaker: "Dr. Marie Dubois",
      attendees: 45,
      spots: 100,
    },
    {
      date: "22 Nov 2025",
      time: "10h00 - 11h00",
      title: "Intégration Moodle : retour d'expérience",
      speaker: "Thomas Martin",
      attendees: 38,
      spots: 50,
    },
    {
      date: "29 Nov 2025",
      time: "16h00 - 17h30",
      title: "L'IA au service de la différenciation pédagogique",
      speaker: "Sophie Laurent",
      attendees: 52,
      spots: 75,
    },
  ];

  const resources = [
    {
      type: "PDF",
      title: "Guide de démarrage rapide",
      description: "Les essentiels pour bien commencer",
      size: "2.5 MB",
      icon: "📄",
    },
    {
      type: "Template",
      title: "Modèles de scénarios pédagogiques",
      description: "15 templates prêts à l'emploi",
      size: "1.8 MB",
      icon: "📋",
    },
    {
      type: "Checklist",
      title: "Checklist qualité pédagogique",
      description: "Validez vos contenus avec cette grille",
      size: "850 KB",
      icon: "✅",
    },
    {
      type: "Guide",
      title: "Guide d'intégration LMS",
      description: "Documentation technique complète",
      size: "4.2 MB",
      icon: "🔧",
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
              Formation et accompagnement
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-600 mb-6">
              Maîtrisez l'IA pédagogique en quelques heures
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Formations complètes, webinaires en direct et ressources pour
              exploiter pleinement le potentiel d'IA Pedago.
            </p>
            <Button variant="secondary" size="lg">
              Explorer les formations
            </Button>
          </div>
        </Container>
      </section>

      {/* Formation Catalog */}
      <section className="py-20 bg-white">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Nos parcours de formation
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le parcours adapté à votre niveau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {formations.map((formation, index) => (
              <Card
                key={index}
                className={`relative ${
                  formation.popular
                    ? "bg-primary text-white scale-105 shadow-2xl"
                    : "bg-white"
                } p-8`}
              >
                {formation.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-primary px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      Le plus populaire
                    </span>
                  </div>
                )}

                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    formation.popular
                      ? "bg-white/20 text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {formation.level}
                </div>

                <h3
                  className={`text-2xl font-bold mb-2 ${
                    formation.popular ? "text-white" : "text-gray-600"
                  }`}
                >
                  {formation.title}
                </h3>

                <div
                  className={`flex items-center gap-2 mb-4 ${
                    formation.popular ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">{formation.duration}</span>
                </div>

                <p
                  className={`text-2xl font-bold mb-4 ${
                    formation.popular ? "text-white" : "text-primary"
                  }`}
                >
                  {formation.price}
                </p>

                <p
                  className={`mb-6 ${
                    formation.popular ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {formation.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {formation.modules.map((module, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                          formation.popular ? "text-white" : "text-primary"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          formation.popular ? "text-white" : "text-gray-600"
                        }`}
                      >
                        {module}
                      </span>
                    </li>
                  ))}
                </ul>

                {formation.popular ? (
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full !bg-white !text-gray-600 !border-white hover:!bg-primary hover:!text-white hover:!border-white transition-all"
                  >
                    {formation.cta}
                  </Button>
                ) : (
                  <Button variant="outline" size="lg" className="w-full">
                    {formation.cta}
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Learning Modules */}
      <section className="py-20 bg-gray-50">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Modules d'apprentissage
            </h2>
            <p className="text-xl text-gray-600">
              Des contenus structurés pour progresser à votre rythme
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningModules.map((module, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{module.icon}</div>
                <h3 className="text-xl font-bold text-gray-600 mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <div className="flex items-center text-primary text-sm font-medium">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {module.duration}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-white">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Webinaires à venir
            </h2>
            <p className="text-xl text-gray-600">
              Participez à nos sessions en direct avec des experts
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {webinar.date}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {webinar.time}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-600 mb-2">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600">Animé par {webinar.speaker}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      {webinar.attendees}/{webinar.spots} inscrits
                    </div>
                  </div>
                  <Button variant="secondary" size="md">
                    S'inscrire
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-gray-50">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Ressources téléchargeables
            </h2>
            <p className="text-xl text-gray-600">
              Guides, templates et documents pour vous accompagner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{resource.icon}</div>
                <div className="text-xs text-primary font-medium mb-2">
                  {resource.type}
                </div>
                <h3 className="text-lg font-bold text-gray-600 mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{resource.size}</span>
                  <Button variant="outline" size="sm">
                    Télécharger
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Besoin d'une formation sur mesure ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Nous créons des programmes de formation adaptés aux besoins
              spécifiques de votre établissement.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="!bg-white !text-gray-600 !border-white hover:!bg-primary hover:!text-white hover:!border-white transition-all"
            >
              Contactez-nous
            </Button>
          </div>
        </Container>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Formation;
