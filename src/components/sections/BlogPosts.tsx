import Card from "../ui/Card";
import Container from "../ui/Container";

const BlogPosts = () => {
  // Fonction pour générer un dégradé aléatoire
  const getRandomGradient = (index: number) => {
    const gradients = [
      "bg-gradient-to-br from-primary to-primary/60",
      "bg-gradient-to-br from-blue-500 to-blue-300",
      "bg-gradient-to-br from-purple-500 to-pink-400",
      "bg-gradient-to-br from-orange-500 to-yellow-400",
      "bg-gradient-to-br from-green-500 to-teal-400",
      "bg-gradient-to-br from-red-500 to-pink-500",
      "bg-gradient-to-br from-indigo-500 to-purple-400",
      "bg-gradient-to-br from-cyan-500 to-blue-400",
    ];
    return gradients[index % gradients.length];
  };

  // Fonction pour obtenir les initiales
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const posts = [
    {
      image: "",
      date: "22 Oct 2024",
      category: "Pédagogie",
      title: "Comment l'IA révolutionne la création de contenus pédagogiques",
      excerpt:
        "Découvrez comment les formateurs gagnent jusqu'à 70% de temps dans la création de leurs cours grâce à l'IA.",
      author: {
        name: "Marie Dubois",
        avatar: "",
      },
    },
    {
      image: "",
      date: "20 Oct 2024",
      category: "Formation",
      title: "Les meilleures pratiques pour scénariser un MOOC avec l'IA",
      excerpt:
        "Guide complet pour créer des parcours d'apprentissage engageants avec l'assistance de l'intelligence artificielle.",
      author: {
        name: "Thomas Martin",
        avatar: "",
      },
    },
    {
      image: "",
      date: "18 Oct 2024",
      category: "Tutoriel",
      title: "Intégrer un chatbot tuteur dans votre LMS en 5 étapes",
      excerpt:
        "Suivez notre tutoriel pas à pas pour déployer un assistant IA dans votre plateforme de formation.",
      author: {
        name: "Sophie Laurent",
        avatar: "",
      },
    },
    {
      image: "",
      date: "15 Oct 2024",
      category: "Innovation",
      title: "L'avenir de l'évaluation pédagogique assistée par IA",
      excerpt:
        "Comment l'IA transforme la création et la correction d'évaluations pour un apprentissage plus personnalisé.",
      author: {
        name: "Lucas Bernard",
        avatar: "",
      },
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container maxWidth="7xl" paddingX="lg">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-600">
            Nos derniers articles
          </h2>
          <a
            href="/blog"
            className="text-primary font-medium hover:underline inline-flex items-center"
          >
            Voir tous
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <Card key={index} hover className="overflow-hidden p-0">
              <div className="relative h-48 overflow-hidden">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                ) : (
                  <div
                    className={`w-full h-full ${getRandomGradient(
                      index
                    )} flex items-center justify-center`}
                  >
                    <span className="text-white text-6xl font-bold opacity-20">
                      {/* {post.category.charAt(0)} */}
                      Article
                    </span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-primary">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {post.date}
                </div>
                <h3 className="font-semibold text-gray-600 mb-2 line-clamp-2 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center pt-4 border-t border-gray-100">
                  {post.author.avatar ? (
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                  ) : (
                    <div
                      className={`w-8 h-8 rounded-full mr-3 ${getRandomGradient(
                        index + 100
                      )} flex items-center justify-center`}
                    >
                      <span className="text-white text-xs font-bold">
                        {getInitials(post.author.name)}
                      </span>
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {post.author.name}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogPosts;
