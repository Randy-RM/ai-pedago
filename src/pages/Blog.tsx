import { useState } from "react";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Tous", "Pédagogie", "Formation", "Tutoriel", "Innovation"];

  const getRandomGradient = (index: number) => {
    const gradients = [
      "bg-gradient-to-br from-blue-400 to-blue-600",
      "bg-gradient-to-br from-purple-400 to-purple-600",
      "bg-gradient-to-br from-pink-400 to-pink-600",
      "bg-gradient-to-br from-green-400 to-green-600",
      "bg-gradient-to-br from-yellow-400 to-yellow-600",
      "bg-gradient-to-br from-red-400 to-red-600",
      "bg-gradient-to-br from-indigo-400 to-indigo-600",
      "bg-gradient-to-br from-teal-400 to-teal-600",
    ];
    return gradients[index % gradients.length];
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const blogPosts = [
    {
      title: "10 bonnes pratiques pour créer des quiz efficaces avec l'IA",
      excerpt:
        "Découvrez comment utiliser l'IA pour générer des évaluations pertinentes qui mesurent réellement les compétences de vos apprenants.",
      category: "Pédagogie",
      author: "Marie Dubois",
      authorImage: "",
      date: "15 Nov 2025",
      readTime: "5 min",
      image: "",
      featured: true,
    },
    {
      title: "Intégrer IA Pedago à Moodle en 10 minutes",
      excerpt:
        "Guide pas à pas pour connecter IA Pedago à votre plateforme Moodle et commencer à créer des contenus enrichis.",
      category: "Tutoriel",
      author: "Thomas Martin",
      authorImage: "",
      date: "12 Nov 2025",
      readTime: "8 min",
      image: "",
      featured: false,
    },
    {
      title: "L'IA au service de la différenciation pédagogique",
      excerpt:
        "Comment adapter automatiquement vos contenus à différents niveaux d'apprenants grâce à l'intelligence artificielle.",
      category: "Pédagogie",
      author: "Sophie Laurent",
      authorImage: "",
      date: "10 Nov 2025",
      readTime: "6 min",
      image: "",
      featured: false,
    },
    {
      title: "Formation : Maîtriser la scénarisation pédagogique avec l'IA",
      excerpt:
        "Apprenez à créer des parcours d'apprentissage cohérents et engageants en combinant expertise pédagogique et IA.",
      category: "Formation",
      author: "Lucas Bernard",
      authorImage: "",
      date: "8 Nov 2025",
      readTime: "10 min",
      image: "",
      featured: false,
    },
    {
      title: "Les tendances 2025 de l'IA en éducation",
      excerpt:
        "Quelles sont les innovations qui vont transformer l'enseignement cette année ? Notre analyse des grandes tendances.",
      category: "Innovation",
      author: "Marie Dubois",
      authorImage: "",
      date: "5 Nov 2025",
      readTime: "7 min",
      image: "",
      featured: true,
    },
    {
      title: "Créer des activités interactives en un clic",
      excerpt:
        "Tutoriel complet pour générer des activités engageantes : études de cas, jeux de rôle, simulations et plus encore.",
      category: "Tutoriel",
      author: "Thomas Martin",
      authorImage: "",
      date: "3 Nov 2025",
      readTime: "12 min",
      image: "",
      featured: false,
    },
    {
      title: "Comment l'IA améliore le feedback pédagogique",
      excerpt:
        "L'intelligence artificielle peut générer des retours personnalisés et constructifs pour chaque apprenant.",
      category: "Pédagogie",
      author: "Sophie Laurent",
      authorImage: "",
      date: "1 Nov 2025",
      readTime: "5 min",
      image: "",
      featured: false,
    },
    {
      title: "Retour d'expérience : 6 mois avec IA Pedago",
      excerpt:
        "Un formateur partage son expérience et les résultats obtenus après avoir adopté IA Pedago dans sa pratique quotidienne.",
      category: "Innovation",
      author: "Lucas Bernard",
      authorImage: "",
      date: "28 Oct 2025",
      readTime: "9 min",
      image: "",
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "Tous" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-white py-20">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-600 mb-6">
              Blog IA Pedago
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Conseils, tutoriels et actualités sur l'IA pédagogique
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "Tous" && !searchQuery && (
        <section className="py-12 bg-white">
          <Container maxWidth="7xl" paddingX="lg">
            <div className="mb-6">
              <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                À la une
              </span>
            </div>
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className={`${getRandomGradient(0)} h-64 lg:h-full flex items-center justify-center`}>
                  <span className="text-8xl font-bold text-white opacity-20">
                    {featuredPost.category[0]}
                  </span>
                </div>
                <div className="p-8 lg:p-12">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-600 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 ${getRandomGradient(0)} rounded-full flex items-center justify-center`}>
                      <span className="text-lg font-bold text-white">
                        {getInitials(featuredPost.author)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-600">
                        {featuredPost.author}
                      </p>
                      <p className="text-sm text-gray-500">
                        {featuredPost.date} • {featuredPost.readTime} de lecture
                      </p>
                    </div>
                  </div>
                  <Button variant="secondary" size="md">
                    Lire l'article
                  </Button>
                </div>
              </div>
            </Card>
          </Container>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <Container maxWidth="7xl" paddingX="lg">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Aucun article trouvé pour cette recherche.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
                >
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div
                      className={`w-full h-48 ${getRandomGradient(
                        index
                      )} flex items-center justify-center`}
                    >
                      <span className="text-6xl font-bold text-white opacity-30">
                        {post.category[0]}
                      </span>
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3 self-start">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-600 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      {post.authorImage ? (
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-10 h-10 rounded-full"
                        />
                      ) : (
                        <div
                          className={`w-10 h-10 ${getRandomGradient(
                            index + 1
                          )} rounded-full flex items-center justify-center`}
                        >
                          <span className="text-sm font-bold text-white">
                            {getInitials(post.author)}
                          </span>
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-gray-600 text-sm">
                          {post.author}
                        </p>
                        <p className="text-xs text-gray-500">
                          {post.date} • {post.readTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <Container maxWidth="7xl" paddingX="lg">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Recevez nos derniers articles
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Inscrivez-vous à notre newsletter pour ne rien manquer de l'actualité de l'IA pédagogique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button
                variant="outline"
                size="md"
                className="!bg-white !text-gray-600 !border-white hover:!bg-primary hover:!text-white hover:!border-white transition-all whitespace-nowrap"
              >
                S'abonner
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
