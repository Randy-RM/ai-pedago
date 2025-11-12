import { useState } from "react";
import Container from "../ui/Container";

const Testimonials = () => {
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

  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Formatrice Digital Learning, Université Lyon 2",
      image: "",
      rating: 5,
      text: "IA Pedago a transformé ma façon de créer mes cours. En quelques minutes, je génère des activités pédagogiques pertinentes et adaptées au niveau de mes étudiants. Un gain de temps considérable !",
    },
    {
      id: 2,
      name: "Thomas Martin",
      role: "Responsable Formation, Groupe EdTech",
      image: "",
      rating: 5,
      text: "L'intégration du chatbot tuteur dans notre LMS a révolutionné l'accompagnement de nos apprenants. Ils obtiennent des réponses instantanées et personnalisées 24/7.",
    },
    {
      id: 3,
      name: "Sophie Laurent",
      role: "Ingénieure pédagogique, Centre de formation",
      image: "",
      rating: 5,
      text: "Le module de formation aux IA génératives est excellent. Mes collègues formateurs ont rapidement adopté l'outil et créent maintenant des contenus de qualité professionnelle.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-white">
      <Container maxWidth="7xl" paddingX="lg">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-600 mb-4">
            Ils utilisent déjà IA Pedago
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 relative">
            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  {testimonials[currentIndex].image ? (
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                    />
                  ) : (
                    <div
                      className={`w-32 h-32 rounded-full border-4 border-primary/20 ${getRandomGradient(
                        currentIndex
                      )} flex items-center justify-center`}
                    >
                      <span className="text-white text-4xl font-bold">
                        {getInitials(testimonials[currentIndex].name)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      )
                    )}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 text-lg mb-6">
                    {testimonials[currentIndex].text}
                  </p>

                  {/* Author */}
                  <div>
                    <h4 className="font-semibold text-gray-600 text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
