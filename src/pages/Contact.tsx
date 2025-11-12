import { useState, FormEvent } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact form:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      detail: "contact@ia-pedago.fr",
      description: "Réponse sous 24h",
    },
    {
      icon: "📞",
      title: "Téléphone",
      detail: "+33 1 23 45 67 89",
      description: "Lun-Ven 9h-18h",
    },
    {
      icon: "💬",
      title: "Chat en direct",
      detail: "Assistance immédiate",
      description: "Disponible 24/7",
    },
  ];

  const faqs = [
    {
      question: "Comment démarrer avec IA Pedago ?",
      answer:
        "Créez simplement un compte gratuit et commencez votre essai de 14 jours. Notre équipe vous accompagne dans la prise en main.",
    },
    {
      question: "Proposez-vous des démonstrations ?",
      answer:
        "Oui ! Réservez une démo personnalisée avec notre équipe pour découvrir toutes les fonctionnalités.",
    },
    {
      question: "Quel est le délai de réponse du support ?",
      answer:
        "Support email : 24h • Support prioritaire (plans payants) : 4h • Chat : immédiat",
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
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-600 mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Notre équipe est là pour répondre à toutes vos questions. Nous
              vous répondons généralement sous 24 heures.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-600 mb-2">
                  {method.title}
                </h3>
                <p className="text-primary font-semibold mb-2">
                  {method.detail}
                </p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-600 mb-6">
                Envoyez-nous un message
              </h2>

              {submitted ? (
                <div className="bg-primary/10 text-primary p-6 rounded-lg text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
                  <p>Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-600 mb-2"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-600 mb-2"
                    >
                      Adresse email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="jean.dupont@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-600 mb-2"
                    >
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="demo">Demande de démonstration</option>
                      <option value="support">Support technique</option>
                      <option value="sales">Question commerciale</option>
                      <option value="partnership">Partenariat</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-600 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Décrivez votre demande..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="w-full"
                  >
                    Envoyer le message
                  </Button>
                </form>
              )}
            </Card>
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
              Consultez notre FAQ avant de nous contacter
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

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              D'autres questions ? Consultez notre FAQ complète
            </p>
            <Button variant="outline" size="md">
              Voir toutes les FAQ
            </Button>
          </div>
        </Container>
      </section>

      {/* Support Hours */}
      <section className="py-20 bg-white">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-600 mb-6 text-center">
                Horaires de support
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Support Standard
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Lundi - Vendredi : 9h00 - 18h00</p>
                    <p>Samedi : 10h00 - 16h00</p>
                    <p>Dimanche : Fermé</p>
                    <p className="text-sm text-gray-500 mt-4">
                      Réponse sous 24h (jours ouvrés)
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Support Prioritaire
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Disponible 24/7</p>
                    <p>Chat en direct</p>
                    <p>Téléphone prioritaire</p>
                    <p className="text-sm text-gray-500 mt-4">
                      Réponse sous 4h garantie
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
