import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { StatsBanner } from "./sections/StatsBanner";
import { WhatWeDo } from "./sections/WhatWeDo";
import { Mission } from "./sections/Mission";
import { Team } from "./sections/Team";
import { GetInvolved } from "./sections/GetInvolved";
import { Membership } from "./sections/Membership";
import { Sponsorship } from "./sections/Sponsorship";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <StatsBanner />
        <WhatWeDo />
        <Mission />
        <Team />
        <GetInvolved />
        <Membership />
        <Sponsorship />
      </main>
      <Footer />
    </div>
  );
}
