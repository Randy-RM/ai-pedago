import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const Integration = () => {
  const lmsPartners = [
    { name: "Moodle", logo: "🎓", color: "bg-orange-500" },
    { name: "Canvas", logo: "🎨", color: "bg-red-500" },
    { name: "Blackboard", logo: "📚", color: "bg-black" },
    { name: "360Learning", logo: "🔄", color: "bg-purple-500" },
    { name: "Rise Up", logo: "📈", color: "bg-blue-500" },
    { name: "Teams", logo: "💬", color: "bg-indigo-500" },
  ];

  const integrationFeatures = [
    {
      icon: "📦",
      title: "Export SCORM/xAPI",
      description:
        "Exportez vos contenus aux standards SCORM 1.2, 2004 et xAPI (Tin Can) pour une compatibilité universelle.",
      techDetails: [
        "SCORM 1.2 & 2004",
        "xAPI (Tin Can API)",
        "cmi5 compatible",
        "Suivi des progrès",
      ],
    },
    {
      icon: "🔐",
      title: "Authentification SSO",
      description:
        "Synchronisez vos utilisateurs automatiquement via SAML, OAuth 2.0 ou votre annuaire LDAP/Active Directory.",
      techDetails: [
        "SAML 2.0",
        "OAuth 2.0 / OpenID Connect",
        "LDAP / Active Directory",
        "Provisioning automatique",
      ],
    },
    {
      icon: "🔄",
      title: "Import/Export de contenus",
      description:
        "Importez vos contenus existants et exportez dans les formats compatibles avec votre LMS.",
      techDetails: [
        "Format Common Cartridge",
        "QTI pour les quiz",
        "Import bulk CSV",
        "Migration assistée",
      ],
    },
    {
      icon: "⚡",
      title: "API REST complète",
      description:
        "Intégrez IA Pedago à vos systèmes existants via notre API REST documentée et nos webhooks.",
      techDetails: [
        "API REST complète",
        "Documentation OpenAPI",
        "Webhooks temps réel",
        "Rate limiting adaptatif",
      ],
    },
    {
      icon: "🔔",
      title: "Webhooks personnalisés",
      description:
        "Recevez des notifications en temps réel pour tous les événements importants de votre plateforme.",
      techDetails: [
        "Événements personnalisables",
        "Retry automatique",
        "Signature HMAC",
        "Logs détaillés",
      ],
    },
    {
      icon: "📊",
      title: "Reporting unifié",
      description:
        "Consolidez les données de progression et de performance dans votre système de reporting.",
      techDetails: [
        "Exports CSV/Excel",
        "Connecteurs BI",
        "Analytics en temps réel",
        "Tableaux de bord personnalisés",
      ],
    },
  ];

  const integrationSteps = {
    moodle: [
      {
        step: "1",
        title: "Installation du plugin",
        description:
          "Téléchargez et installez le plugin IA Pedago pour Moodle depuis le répertoire officiel.",
      },
      {
        step: "2",
        title: "Configuration de l'API",
        description:
          "Générez une clé API dans votre compte IA Pedago et configurez la connexion.",
      },
      {
        step: "3",
        title: "Synchronisation",
        description:
          "Synchronisez vos cours, utilisateurs et catégories en un clic.",
      },
      {
        step: "4",
        title: "Activation",
        description:
          "Activez les fonctionnalités IA directement dans l'éditeur Moodle.",
      },
    ],
    canvas: [
      {
        step: "1",
        title: "Ajout de l'application",
        description: "Ajoutez IA Pedago depuis le Canvas App Center.",
      },
      {
        step: "2",
        title: "Autorisation OAuth",
        description:
          "Autorisez IA Pedago à accéder à votre instance Canvas via OAuth 2.0.",
      },
      {
        step: "3",
        title: "Configuration des permissions",
        description:
          "Définissez les permissions d'accès pour vos formateurs et apprenants.",
      },
      {
        step: "4",
        title: "Lancement",
        description: "Utilisez IA Pedago directement depuis vos cours Canvas.",
      },
    ],
    teams: [
      {
        step: "1",
        title: "Installation depuis Teams",
        description:
          "Ajoutez l'application IA Pedago depuis le store Microsoft Teams.",
      },
      {
        step: "2",
        title: "Connexion au compte",
        description:
          "Liez votre compte IA Pedago avec Microsoft Teams via SSO.",
      },
      {
        step: "3",
        title: "Configuration des équipes",
        description: "Sélectionnez les équipes et canaux pour l'intégration.",
      },
      {
        step: "4",
        title: "Collaboration",
        description: "Créez et partagez vos contenus directement dans Teams.",
      },
    ],
  };

  const [selectedLMS, setSelectedLMS] =
    useState<keyof typeof integrationSteps>("moodle");

  const successStories = [
    {
      institution: "Université Paris-Dauphine",
      lms: "Moodle",
      results: "500+ formateurs équipés",
      testimonial:
        "L'intégration avec Moodle s'est faite en moins de 2 heures. Nos formateurs créent maintenant leurs cours 3 fois plus rapidement.",
      author: "Dr. Laurent Dupont",
      role: "Directeur Digital Learning",
    },
    {
      institution: "Groupe ESC Toulouse",
      lms: "Canvas",
      results: "2000+ contenus créés",
      testimonial:
        "La synchronisation avec Canvas est transparente. Les étudiants accèdent aux contenus IA directement depuis leur environnement habituel.",
      author: "Sophie Martin",
      role: "Responsable Innovation Pédagogique",
    },
    {
      institution: "Formation Pro Digital",
      lms: "360Learning",
      results: "95% de satisfaction",
      testimonial:
        "L'export SCORM fonctionne parfaitement. Nous avons migré tous nos contenus en quelques jours seulement.",
      author: "Marc Lefebvre",
      role: "CEO",
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
              Intégrations LMS
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-600 mb-6">
              Intégrez IA Pedago à votre écosystème existant
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Compatible avec les principales plateformes LMS du marché. Export
              SCORM, API REST et synchronisation automatique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Voir la documentation
              </Button>
              <Button variant="outline" size="lg">
                Demander une démo
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* LMS Partners Logo Grid */}
      <section className="py-20 bg-white">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Compatible avec vos outils
            </h2>
            <p className="text-xl text-gray-600">
              Intégration native avec les principales plateformes LMS
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
            {lmsPartners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div
                  className={`text-6xl mb-4 ${partner.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white`}
                >
                  {partner.logo}
                </div>
                <span className="text-sm font-semibold text-gray-600">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Integration Features Grid */}
      <section className="py-20 bg-gray-50">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Fonctionnalités d'intégration
            </h2>
            <p className="text-xl text-gray-600">
              Tous les outils pour une intégration réussie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-600 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.techDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-primary mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {detail}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Step by Step Integration Guide */}
      <section className="py-20 bg-white">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Guide d'intégration étape par étape
            </h2>
            <p className="text-xl text-gray-600">
              Suivez notre guide pour intégrer IA Pedago à votre LMS
            </p>
          </div>

          {/* LMS Selector Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setSelectedLMS("moodle")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedLMS === "moodle"
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Moodle
            </button>
            <button
              onClick={() => setSelectedLMS("canvas")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedLMS === "canvas"
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Canvas
            </button>
            <button
              onClick={() => setSelectedLMS("teams")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedLMS === "teams"
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Microsoft Teams
            </button>
          </div>

          {/* Integration Steps */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {integrationSteps[selectedLMS].map((step, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-600 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg">
              Accéder à la documentation complète
            </Button>
          </div>
        </Container>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Ils ont réussi leur intégration
            </h2>
            <p className="text-xl text-gray-600">
              Retours d'expérience de nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-600">
                    {story.institution}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {story.lms}
                    </span>
                    <span className="text-primary font-semibold text-sm">
                      {story.results}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{story.testimonial}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-600">{story.author}</p>
                  <p className="text-sm text-gray-500">{story.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Technical Documentation CTA */}
      <section className="py-20 bg-white">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-600 mb-4">
                Documentation technique complète
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Accédez à notre documentation API, exemples de code et guides
                d'intégration détaillés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Documentation API
                </Button>
                <Button variant="outline" size="lg">
                  Exemples de code
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Besoin d'aide pour votre intégration ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Notre équipe technique vous accompagne dans votre projet
              d'intégration. Support dédié et assistance personnalisée.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="!bg-white !text-gray-600 !border-white hover:!bg-primary hover:!text-white hover:!border-white transition-all"
            >
              Demander un accompagnement
            </Button>
          </div>
        </Container>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Integration;
