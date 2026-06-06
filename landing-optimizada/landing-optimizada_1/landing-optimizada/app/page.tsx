import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PainPoints } from "@/components/pain-points";
import { Benefits } from "@/components/benefits";
import { HowItWorks } from "@/components/how-it-works";
import { WhyTrustUs } from "@/components/why-trust-us";
import { Testimonials } from "@/components/testimonials";
import { SavingsFaq } from "@/components/savings-faq";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <PainPoints />
        <Benefits />
        <HowItWorks />
        <WhyTrustUs />
        <Testimonials />
        <SavingsFaq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
