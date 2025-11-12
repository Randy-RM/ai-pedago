import Button from "../ui/Button";
import Container from "../ui/Container";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-15">
      <Container maxWidth="7xl" paddingX="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Assistant IA pour la Conception Pédagogique
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-600 mb-6 leading-tight">
              Révolutionnez l'enseignement
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Créez, scénarisez et évaluez vos contenus pédagogiques en un temps
              record grâce à notre assistant IA dédié aux formateurs et
              enseignants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="secondary" size="lg">
                Commencer
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="inline-flex items-center gap-2 !bg-transparent !border-0 !text-primary hover:!bg-transparent"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
                Découvrir
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Essai gratuit
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Formation incluse
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            {/* <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="">
                <div className="">
                  <div className="rounded-xl overflow-hidden min-h-[300px] flex items-center justify-center">
                    <img
                      src="/images/ai-pedago-mooc-img.png"
                      alt="Dashboard Preview"
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement!.innerHTML =
                          '<div class="text-center p-8"><p class="text-gray-500 font-medium">📊 Veuillez ajouter l\'image ai-pedago-mooc-img.png dans public/images/</p></div>';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div> */}
            <div className="rounded-xl overflow-hidden min-h-[300px] flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/ai-pedago-mooc-img.png`}
                alt="Dashboard Preview"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.innerHTML =
                    '<div class="text-center p-8"><p class="text-gray-500 font-medium">📊 Veuillez ajouter l\'image ai-pedago-mooc-img.png dans public/images/</p></div>';
                }}
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
