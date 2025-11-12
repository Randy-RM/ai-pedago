import { useState, FormEvent } from "react";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-white flex items-center justify-center py-12">
      <Container maxWidth="7xl" paddingX="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Illustration */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-gray-600 mb-6">
                Bienvenue sur IA Pedago
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Connectez-vous pour accéder à votre assistant IA de conception
                pédagogique.
              </p>
              <div className="space-y-4">
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
                      Création rapide
                    </h3>
                    <p className="text-gray-600">
                      Créez vos contenus pédagogiques en quelques minutes
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
                      Qualité garantie
                    </h3>
                    <p className="text-gray-600">
                      IA formée aux meilleures pratiques pédagogiques
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
                      Collaboration facile
                    </h3>
                    <p className="text-gray-600">
                      Partagez et collaborez avec votre équipe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-600 mb-2">
                Connexion
              </h1>
              <p className="text-gray-600">
                Accédez à votre espace de création pédagogique
              </p>
            </div>

            {/* SSO Buttons */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="font-medium text-gray-600">
                  Continuer avec Google
                </span>
              </button>

              <button className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 21 21">
                  <path
                    fill="#5E5E5E"
                    d="M0 0h11.377v11.372H0V0zm9.75 9.75V1.625H1.625v8.125h8.125zm-8.125 9.75h8.125v-8.125H1.625v8.125zm9.75-9.75h8.125V1.625h-8.125v8.125zM21 21h-9.375v-9.375H21V21zm-1.625-7.75h-6.125v6.125h6.125v-6.125z"
                  />
                </svg>
                <span className="font-medium text-gray-600">
                  Continuer avec Microsoft
                </span>
              </button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Ou continuer avec
                </span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="votre@email.com"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Se souvenir de moi
                  </label>
                </div>
                <a
                  href="/forgot-password"
                  className="text-sm text-primary hover:text-primary/80"
                >
                  Mot de passe oublié ?
                </a>
              </div>

              <Button type="submit" variant="secondary" size="lg" className="w-full">
                Se connecter
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Pas encore de compte ?{" "}
                <a href="/signup" className="text-primary font-medium hover:text-primary/80">
                  S'inscrire gratuitement
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
