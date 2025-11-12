import { useState, FormEvent } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would normally send the email to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
      <Container maxWidth="7xl" paddingX="xl">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Download our app and start your free trail to get started today!
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-6 py-3 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              type="submit"
              variant="secondary"
              size="md"
              className="bg-white text-primary hover:bg-gray-100 whitespace-nowrap"
            >
              Get Started
            </Button>
          </form>

          {submitted && (
            <p className="text-white font-medium animate-pulse">
              Thank you for subscribing!
            </p>
          )}

          <div className="flex justify-center gap-4 mt-8">
            <a href="#" className="inline-block">
              <img
                src="https://via.placeholder.com/150x50/1F2937/FFFFFF?text=App+Store"
                alt="App Store"
                className="h-12 rounded-lg"
              />
            </a>
            <a href="#" className="inline-block">
              <img
                src="https://via.placeholder.com/150x50/1F2937/FFFFFF?text=Google+Play"
                alt="Google Play"
                className="h-12 rounded-lg"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
