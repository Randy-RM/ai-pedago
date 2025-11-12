import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const About = () => {
  const team = [
    {
      name: "Dr. Sophie Martin",
      role: "CEO & Fondatrice",
      description: "Docteure en sciences de l'éducation, 15 ans d'expérience en ingénierie pédagogique",
      initials: "SM",
      gradient: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      name: "Thomas Dubois",
      role: "CTO",
      description: "Expert IA et Machine Learning, ancien chercheur en NLP",
      initials: "TD",
      gradient: "bg-gradient-to-br from-purple-400 to-purple-600",
    },
    {
      name: "Marie Lefebvre",
      role: "Directrice Pédagogique",
      description: "Spécialiste en digital learning et innovation pédagogique",
      initials: "ML",
      gradient: "bg-gradient-to-br from-pink-400 to-pink-600",
    },
    {
      name: "Lucas Bernard",
      role: "Head of Product",
      description: "Design thinking et UX pour l'éducation",
      initials: "LB",
      gradient: "bg-gradient-to-br from-green-400 to-green-600",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Excellence pédagogique",
      description: "Nous plaçons la qualité de l'enseignement au cœur de notre mission.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Nous croyons en la force du travail d'équipe et du partage de connaissances.",
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Nous explorons constamment de nouvelles façons d'améliorer l'apprentissage.",
    },
    {
      icon: "🌍",
      title: "Accessibilité",
      description: "Nous rendons l'enseignement de qualité accessible à tous.",
    },
  ];

  const milestones = [
    { year: "2023", event: "Lancement d'IA Pedago", detail: "Début de l'aventure avec 50 utilisateurs pilotes" },
    { year: "2024", event: "1000 formateurs", detail: "Dépassement du cap des 1000 utilisateurs actifs" },
    { year: "2024", event: "Partenariats LMS", detail: "Intégrations avec Moodle, Canvas et Teams" },
    { year: "2025", event: "Levée de fonds", detail: "2M€ pour accélérer le développement" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-white py-20">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-600 mb-6">
              Notre mission : révolutionner l'enseignement
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Nous croyons que chaque formateur mérite les meilleurs outils pour
              créer des expériences d'apprentissage exceptionnelles.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-600 mb-6 text-center">
              Notre histoire
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                IA Pedago est née d'un constat simple : créer des contenus
                pédagogiques de qualité prend énormément de temps. Les formateurs
                et enseignants passent des heures à concevoir, rédiger et adapter
                leurs cours alors qu'ils pourraient se concentrer sur ce qui
                compte vraiment : l'accompagnement de leurs apprenants.
              </p>
              <p className="mb-4">
                En 2023, une équipe de pédagogues et d'experts en intelligence
                artificielle s'est réunie avec une vision : utiliser l'IA pour
                libérer le temps des formateurs tout en garantissant une qualité
                pédagogique irréprochable.
              </p>
              <p>
                Aujourd'hui, IA Pedago accompagne plus de 1000 formateurs et
                établissements dans leur transformation digitale, en France et à
                l'international.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              L'équipe
            </h2>
            <p className="text-xl text-gray-600">
              Des experts passionnés par l'éducation et la technologie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center">
                <div className={`w-32 h-32 ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-4xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-600 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-600 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Notre parcours
            </h2>
            <p className="text-xl text-gray-600">
              Les grandes étapes de notre aventure
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative mb-8 ${
                    index % 2 === 0 ? "text-right pr-1/2" : "text-left pl-1/2"
                  }`}
                >
                  <Card className="inline-block p-6 max-w-md">
                    <div className="text-primary font-bold text-lg mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-600 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-gray-600">{milestone.detail}</p>
                  </Card>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Rejoignez l'aventure
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Nous recherchons des talents passionnés pour nous aider à
              transformer l'éducation. Consultez nos offres d'emploi.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="!bg-white !text-gray-600 !border-white hover:!bg-primary hover:!text-white hover:!border-white transition-all"
            >
              Voir les opportunités
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
