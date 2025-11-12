import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container maxWidth="7xl" paddingX="xl" paddingY="sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">IP</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">
              IA Pedago
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Accueil
            </Link>
            <Link
              to="/products"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Produits
            </Link>
            <Link
              to="/features"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Fonctionnalités
            </Link>
            <Link
              to="/blog"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/pricing"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Tarifs
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Connexion
            </Link>
            <Button variant="secondary" size="sm">
              S'inscrire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/products"
                className="text-gray-600 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Produits
              </Link>
              <Link
                to="/features"
                className="text-gray-600 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link
                to="/blog"
                className="text-gray-600 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/pricing"
                className="text-gray-600 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tarifs
              </Link>
              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-primary transition-colors font-medium text-center py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connexion
                </Link>
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  S'inscrire
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
