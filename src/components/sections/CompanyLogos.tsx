import Container from "../ui/Container";

const CompanyLogos = () => {
  const companies = ["ORACLE", "Morpheus", "SAMSUNG", "monday", "Segment"];

  return (
    <section className="py-16 bg-white">
      <Container maxWidth="7xl" paddingX="lg">
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium">
            Over 32K+ software businesses growing with AR Shakir
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors"
            >
              {company}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CompanyLogos;
