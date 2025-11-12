import { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );

  const plans = [
    {
      name: "Free",
      description: "Have a go and test your superpowers",
      price: { monthly: 0, yearly: 0 },
      features: [
        "2 Users",
        "2 Files",
        "Public Share & Comments",
        "Chat Support",
        "New income apps",
      ],
      cta: "Signup for free",
      ctaVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      description: "Experiment the power of infinite possibilities",
      price: { monthly: 8, yearly: 8 },
      savings: "Save $50 a year",
      features: [
        "4 Users",
        "All apps",
        "Unlimited editable exports",
        "Folders and collaboration",
        "All incoming apps",
      ],
      cta: "Go to pro",
      ctaVariant: "primary" as const,
      popular: true,
    },
    {
      name: "Business",
      description: "Unveil new superpowers and join the Design League",
      price: { monthly: 16, yearly: 16 },
      features: [
        "All the features of pro plan",
        "Account success Manager",
        "Single Sign-On (SSO)",
        "Co-conception program",
        "Collaboration-Soon",
      ],
      cta: "Goto Business",
      ctaVariant: "outline" as const,
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container maxWidth="7xl" paddingX="xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-600 mb-4">
            Choose Plan
            <br />
            That's Right For You
          </h2>
          <p className="text-gray-500 mb-8">
            Choose plan that works best for you, feel free to contact us
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-md transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-gray-600 shadow-sm"
                  : "text-gray-500"
              }`}
            >
              Bil Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-md transition-all ${
                billingCycle === "yearly"
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-500"
              }`}
            >
              Bil Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "bg-primary text-white scale-105 shadow-2xl"
                  : "bg-white"
              } p-8`}
            >
              {/* Plan Name */}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-gray-600"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.popular ? "text-white/90" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span
                    className={`text-sm ${
                      plan.popular ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    $
                  </span>
                  <span
                    className={`text-5xl font-bold ${
                      plan.popular ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {billingCycle === "monthly"
                      ? plan.price.monthly
                      : plan.price.yearly}
                  </span>
                </div>
                {plan.savings && billingCycle === "yearly" && plan.popular && (
                  <span className="inline-block mt-2 bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                    {plan.savings}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-white" : "text-primary"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {plan.popular ? (
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full !bg-white !text-gray-600 !border-white hover:!bg-primary hover:!text-white hover:!border-white transition-all"
                >
                  {plan.cta}
                </Button>
              ) : (
                <Button variant={plan.ctaVariant} size="lg" className="w-full">
                  {plan.cta}
                </Button>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
