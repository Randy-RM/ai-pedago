import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Pricing from "../components/sections/Pricing";
import Card from "../components/ui/Card";

const PricingPage = () => {
  const comparison = [
    {
      feature: "Utilisateurs",
      decouverte: "2",
      formateur: "10",
      etablissement: "Illimité",
    },
    {
      feature: "Génération de contenu",
      decouverte: "Basique",
      formateur: "Illimitée",
      etablissement: "Illimitée",
    },
    {
      feature: "Crédits IA / mois",
      decouverte: "50",
      formateur: "Illimité",
      etablissement: "Illimité",
    },
    {
      feature: "Chatbot tuteur",
      decouverte: "❌",
      formateur: "✅",
      etablissement: "✅",
    },
    {
      feature: "Module de formation IA",
      decouverte: "❌",
      formateur: "✅",
      etablissement: "✅",
    },
    {
      feature: "Intégration LMS",
      decouverte: "❌",
      formateur: "Complète",
      etablissement: "Complète + API",
    },
    {
      feature: "Export SCORM/xAPI",
      decouverte: "❌",
      formateur: "✅",
      etablissement: "✅",
    },
    {
      feature: "Personnalisation",
      decouverte: "❌",
      formateur: "Basique",
      etablissement: "Avancée",
    },
    {
      feature: "API d'intégration",
      decouverte: "❌",
      formateur: "❌",
      etablissement: "✅",
    },
    {
      feature: "Gestionnaire de compte",
      decouverte: "❌",
      formateur: "❌",
      etablissement: "Dédié",
    },
    {
      feature: "Support",
      decouverte: "Email",
      formateur: "Prioritaire",
      etablissement: "24/7 + SLA",
    },
    {
      feature: "Formation sur mesure",
      decouverte: "❌",
      formateur: "❌",
      etablissement: "✅",
    },
  ];

  const faqs = [
    {
      question: "Puis-je changer de plan à tout moment ?",
      answer:
        "Oui, vous pouvez passer à un plan supérieur à tout moment. Le changement est immédiat et vous ne payez que la différence au prorata.",
    },
    {
      question: "Comment fonctionne l'essai gratuit ?",
      answer:
        "L'essai gratuit de 14 jours vous donne accès à toutes les fonctionnalités du plan Formateur. Aucune carte bancaire n'est requise pour commencer.",
    },
    {
      question: "Que se passe-t-il si je dépasse mon quota d'utilisateurs ?",
      answer:
        "Vous recevrez une notification et pourrez facilement upgrader votre plan. Aucune interruption de service n'aura lieu.",
    },
    {
      question: "Les tarifs incluent-ils la TVA ?",
      answer:
        "Les prix affichés sont HT. La TVA applicable sera ajoutée selon votre pays de résidence.",
    },
    {
      question: "Proposez-vous des réductions pour les établissements ?",
      answer:
        "Oui, nous proposons des tarifs préférentiels pour les établissements d'enseignement. Contactez-nous pour une offre personnalisée.",
    },
    {
      question: "Puis-je obtenir un remboursement ?",
      answer:
        "Oui, nous offrons une garantie satisfait ou remboursé de 30 jours sur tous nos plans payants.",
    },
  ];

  const paymentMethods = [
    { name: "Carte bancaire", icon: "💳" },
    { name: "Virement bancaire", icon: "🏦" },
    { name: "PayPal", icon: "🅿️" },
    { name: "Facturation", icon: "📄" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-white py-20">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Tarification transparente
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-600 mb-6">
              Choisissez le plan qui vous correspond
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Des tarifs clairs et adaptés à vos besoins. Essai gratuit de 14
              jours, sans engagement.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards Section */}
      <Pricing />

      {/* Detailed Comparison Table */}
      <section className="py-20 bg-white">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Comparaison détaillée des fonctionnalités
            </h2>
            <p className="text-xl text-gray-600">
              Trouvez le plan qui correspond exactement à vos besoins
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-gray-600 font-semibold">
                    Fonctionnalité
                  </th>
                  <th className="text-center py-4 px-6 text-gray-600 font-semibold">
                    Découverte
                  </th>
                  <th className="text-center py-4 px-6 text-primary font-semibold">
                    Formateur
                  </th>
                  <th className="text-center py-4 px-6 text-gray-600 font-semibold">
                    Établissement
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-gray-600">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-600">
                      {item.decouverte}
                    </td>
                    <td className="py-4 px-6 text-center text-primary font-semibold">
                      {item.formateur}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-600">
                      {item.etablissement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gray-50">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Calculez votre retour sur investissement
            </h2>
            <p className="text-xl text-gray-600">
              Économisez du temps et de l'argent avec IA Pedago
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-600 mb-4">
                    Sans IA Pedago
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        Temps de création moyen
                      </span>
                      <span className="font-bold text-gray-600">12h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Modules par mois</span>
                      <span className="font-bold text-gray-600">10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Heures totales</span>
                      <span className="font-bold text-gray-600">120h</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-gray-600">
                        Coût (40€/h formateur)
                      </span>
                      <span className="font-bold text-xl text-gray-600">
                        4 800€
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Avec IA Pedago
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        Temps de création moyen
                      </span>
                      <span className="font-bold text-primary">2h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Modules par mois</span>
                      <span className="font-bold text-primary">10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Heures totales</span>
                      <span className="font-bold text-primary">20h</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-primary/20">
                      <span className="text-gray-600">Coût total</span>
                      <span className="font-bold text-xl text-primary">
                        829€
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary to-primary/80 rounded-xl text-white text-center">
                <p className="text-xl mb-2">Économies mensuelles</p>
                <p className="text-5xl font-bold mb-2">3 971€</p>
                <p className="text-white/90">
                  Soit 83% de réduction des coûts de création
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Free Trial Benefits */}
      <section className="py-20 bg-white">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-600 mb-4">
                  Essai gratuit de 14 jours
                </h2>
                <p className="text-xl text-gray-600">
                  Découvrez toutes les fonctionnalités sans engagement
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold text-gray-600 mb-1">
                      Aucune carte bancaire requise
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Commencez immédiatement sans engagement
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold text-gray-600 mb-1">
                      Accès complet
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Toutes les fonctionnalités du plan Formateur
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold text-gray-600 mb-1">
                      Support prioritaire
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Notre équipe vous accompagne pendant l'essai
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold text-gray-600 mb-1">
                      Annulation facile
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Résiliez à tout moment en un clic
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button variant="secondary" size="lg">
                  Démarrer l'essai gratuit
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur nos tarifs
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold text-gray-600 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Moyens de paiement acceptés
            </h2>
            <p className="text-xl text-gray-600">
              Payez en toute sécurité avec votre méthode préférée
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="text-5xl mb-3">{method.icon}</div>
                <span className="text-sm font-medium text-gray-600 text-center">
                  {method.name}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Paiements sécurisés • Garantie satisfait ou remboursé 30 jours
            </p>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Besoin d'un devis personnalisé ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Pour les établissements et les besoins spécifiques, contactez
              notre équipe commerciale pour une offre sur mesure.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="!bg-white !text-gray-600 !border-white hover:!bg-primary hover:!text-white hover:!border-white transition-all"
            >
              Demander un devis
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PricingPage;
