import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const ContainerExamples = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Exemple 1: Container basique centré */}
      <Container
        maxWidth="4xl"
        paddingX="md"
        paddingY="lg"
        className="bg-white mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">
          Exemple 1: Container basique centré
        </h2>
        <p className="text-gray-600">
          Ce container utilise les paramètres par défaut avec une largeur max de
          4xl, padding horizontal md et vertical lg.
        </p>
      </Container>

      {/* Exemple 2: Container pleine largeur */}
      <Container maxWidth="full" padding="xl" className="bg-primary/10 mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Exemple 2: Container pleine largeur
        </h2>
        <p className="text-gray-600">
          Ce container s'étend sur toute la largeur avec un padding xl de tous
          les côtés.
        </p>
      </Container>

      {/* Exemple 3: Container avec marges personnalisées */}
      <Container
        maxWidth="2xl"
        paddingX="lg"
        paddingY="md"
        marginX="auto"
        marginY="lg"
        className="bg-white shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">
          Exemple 3: Marges personnalisées
        </h2>
        <p className="text-gray-600 mb-4">
          Container avec marges horizontales auto (centré) et verticales lg.
        </p>
        <Button variant="primary">En savoir plus</Button>
      </Container>

      {/* Exemple 4: Container semantic (section) */}
      <Container
        as="section"
        maxWidth="3xl"
        padding="2xl"
        className="bg-gradient-to-r from-primary/20 to-primary/10 mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">
          Exemple 4: Semantic HTML (section)
        </h2>
        <p className="text-gray-600">
          Ce container utilise une balise &lt;section&gt; au lieu de &lt;div&gt;
          pour une meilleure sémantique HTML.
        </p>
      </Container>

      {/* Exemple 5: Container sans centrage */}
      <Container
        maxWidth="lg"
        paddingX="md"
        paddingY="sm"
        center={false}
        className="bg-white border-l-4 border-primary mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Exemple 5: Non centré</h2>
        <p className="text-gray-600">
          Ce container n'est pas centré automatiquement (center=false).
        </p>
      </Container>

      {/* Exemple 6: Grid de containers */}
      <Container maxWidth="6xl" paddingX="md">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Exemple 6: Grid de containers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Container
            maxWidth="none"
            padding="lg"
            className="bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-2">Card 1</h3>
            <p className="text-gray-600 text-sm">
              Container utilisé comme carte dans une grille.
            </p>
          </Container>
          <Container
            maxWidth="none"
            padding="lg"
            className="bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-2">Card 2</h3>
            <p className="text-gray-600 text-sm">
              Container utilisé comme carte dans une grille.
            </p>
          </Container>
          <Container
            maxWidth="none"
            padding="lg"
            className="bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-2">Card 3</h3>
            <p className="text-gray-600 text-sm">
              Container utilisé comme carte dans une grille.
            </p>
          </Container>
        </div>
      </Container>

      {/* Exemple 7: Container imbriqués */}
      <Container
        maxWidth="5xl"
        padding="xl"
        className="bg-gray-800 text-white mt-8"
      >
        <h2 className="text-2xl font-bold mb-6">
          Exemple 7: Containers imbriqués
        </h2>
        <Container
          maxWidth="3xl"
          padding="lg"
          className="bg-white text-gray-600"
        >
          <h3 className="font-semibold mb-2">Container enfant</h3>
          <p className="text-gray-600">
            Vous pouvez imbriquer des containers pour créer des layouts
            complexes.
          </p>
        </Container>
      </Container>
    </div>
  );
};

export default ContainerExamples;
