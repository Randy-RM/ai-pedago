import { useState, FormEvent } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
    plan: "formateur",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle final signup
      console.log("Signup:", formData);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gradient-to-br from-primary/10 to-white flex items-center justify-center py-12">
        <Container maxWidth="7xl" paddingX="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Benefits */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-gray-600 mb-6">
                Rejoignez 1000+ formateurs
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Créez des formations exceptionnelles avec l'IA pédagogique.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-600 mb-1">
                      14 jours d'essai gratuit
                    </h3>
                    <p className="text-gray-600">
                      Testez toutes les fonctionnalités sans carte bancaire
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-600 mb-1">
                      Configuration en 5 minutes
                    </h3>
                    <p className="text-gray-600">
                      Commencez à créer vos contenus immédiatement
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-600 mb-1">
                      Support dédié
                    </h3>
                    <p className="text-gray-600">
                      Notre équipe vous accompagne dans vos premiers pas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-600 mb-2">
                Créer un compte
              </h1>
              <p className="text-gray-600">
                Commencez votre essai gratuit de 14 jours
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    step >= 1
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  1
                </div>
                <div className="h-1 w-12 mx-2 bg-gray-200">
                  <div
                    className={`h-full transition-all ${
                      step > 1 ? "bg-primary" : "bg-gray-200"
                    }`}
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    step >= 2
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  2
                </div>
                <div className="h-1 w-12 mx-2 bg-gray-200">
                  <div
                    className={`h-full transition-all ${
                      step > 2 ? "bg-primary" : "bg-gray-200"
                    }`}
                  ></div>
                </div>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  step >= 3
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                3
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-600 mb-2"
                      >
                        Prénom
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Jean"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-600 mb-2"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Dupont"
                      />
                    </div>
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
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-600 mb-2"
                    >
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="••••••••"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Au moins 8 caractères avec majuscules et chiffres
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-600 mb-2"
                    >
                      Confirmer le mot de passe
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                </>
              )}

              {/* Step 2: User Type */}
              {step === 2 && (
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-600 mb-4">
                    Vous êtes :
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="userType"
                        value="formateur"
                        checked={formData.userType === "formateur"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <div className="ml-4">
                        <div className="font-semibold text-gray-600">
                          Formateur indépendant
                        </div>
                        <div className="text-sm text-gray-500">
                          Je crée mes propres formations
                        </div>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="userType"
                        value="enseignant"
                        checked={formData.userType === "enseignant"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <div className="ml-4">
                        <div className="font-semibold text-gray-600">
                          Enseignant
                        </div>
                        <div className="text-sm text-gray-500">
                          J'enseigne dans un établissement
                        </div>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="userType"
                        value="etablissement"
                        checked={formData.userType === "etablissement"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <div className="ml-4">
                        <div className="font-semibold text-gray-600">
                          Établissement
                        </div>
                        <div className="text-sm text-gray-500">
                          Plusieurs formateurs à équiper
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* Step 3: Plan Selection */}
              {step === 3 && (
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-600 mb-4">
                    Choisissez votre plan :
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-start p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="plan"
                        value="decouverte"
                        checked={formData.plan === "decouverte"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary focus:ring-primary mt-1"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-semibold text-gray-600">
                            Découverte
                          </div>
                          <div className="text-xl font-bold text-gray-600">
                            Gratuit
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          2 utilisateurs • 50 crédits/mois • Support email
                        </div>
                      </div>
                    </label>
                    <label className="flex items-start p-4 border-2 border-primary rounded-lg cursor-pointer bg-primary/5 transition-colors">
                      <input
                        type="radio"
                        name="plan"
                        value="formateur"
                        checked={formData.plan === "formateur"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary focus:ring-primary mt-1"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold text-gray-600">
                              Formateur
                            </div>
                            <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                              Recommandé
                            </span>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-primary">
                              25€
                            </div>
                            <div className="text-xs text-gray-500">/mois</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          10 utilisateurs • Illimité • Chatbot • LMS • Support
                          prioritaire
                        </div>
                        <div className="text-xs text-primary font-medium mt-2">
                          ✨ Essai gratuit 14 jours
                        </div>
                      </div>
                    </label>
                    <label className="flex items-start p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="plan"
                        value="etablissement"
                        checked={formData.plan === "etablissement"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary focus:ring-primary mt-1"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-semibold text-gray-600">
                            Établissement
                          </div>
                          <div>
                            <div className="text-xl font-bold text-gray-600">
                              89€
                            </div>
                            <div className="text-xs text-gray-500">/mois</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          Illimité • API • Manager dédié • SLA • Formation
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={() => setStep(step - 1)}
                  >
                    Précédent
                  </Button>
                )}
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="flex-1"
                >
                  {step === 3 ? "Créer mon compte" : "Continuer"}
                </Button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                En créant un compte, vous acceptez nos{" "}
                <a href="/terms" className="text-primary hover:text-primary/80">
                  conditions d'utilisation
                </a>{" "}
                et notre{" "}
                <a
                  href="/privacy"
                  className="text-primary hover:text-primary/80"
                >
                  politique de confidentialité
                </a>
                .
              </p>
              <p className="text-gray-600 mt-4">
                Vous avez déjà un compte ?{" "}
                <a
                  href="/login"
                  className="text-primary font-medium hover:text-primary/80"
                >
                  Se connecter
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
