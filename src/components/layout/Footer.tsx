import { Link } from "react-router-dom";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container maxWidth="7xl" paddingX="lg" paddingY="xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IP</span>
              </div>
              <span className="text-xl font-semibold text-white">
                IA Pedago
              </span>
            </div>
            <p className="text-sm mb-4">
              L'assistant IA qui révolutionne la conception pédagogique. Créez,
              scénarisez et évaluez avec l'intelligence artificielle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
              </a>
            </div>
          </div>

          {/* All Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Fonctionnalités</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/features"
                  className="hover:text-primary transition-colors"
                >
                  Aide à la rédaction
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="hover:text-primary transition-colors"
                >
                  Création d'activités
                </Link>
              </li>
              <li>
                <Link
                  to="/integrations"
                  className="hover:text-primary transition-colors"
                >
                  Intégration LMS
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-primary transition-colors"
                >
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Formation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/formation"
                  className="hover:text-primary transition-colors"
                >
                  Module IA génératives
                </Link>
              </li>
              <li>
                <Link
                  to="/formation"
                  className="hover:text-primary transition-colors"
                >
                  Pour formateurs
                </Link>
              </li>
              <li>
                <Link
                  to="/formation"
                  className="hover:text-primary transition-colors"
                >
                  Pour apprenants
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-primary transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="hover:text-primary transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} IA Pedago. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
