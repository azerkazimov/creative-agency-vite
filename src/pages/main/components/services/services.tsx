import SectionHeader from "@/components/section-header/section-header";
import { Monitor, PenTool, Settings, Tv } from "lucide-react";
import type { ReactNode } from "react";
import ServiceCard from "./components/service-card";
import "./services.css";

interface ServicesProps {
  icon: ReactNode;
  title: string;
  background: string;
}

const services: ServicesProps[] = [
  {
    icon: <Monitor size={42} />,
    title: "Social Media Management",
    background: "#e2e2e2",
  },
  {
    icon: <Settings size={42} />,
    title: "Search Engine Optimization",
    background: "#FF4646",
  },
  {
    icon: <PenTool size={42} />,
    title: "Design",
    background: "#8EEA77",
  },
  {
    icon: <Tv size={42} />,
    title: "Ads",
    background: "#FFB21A",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 ">
            <div className="service-description">
              <SectionHeader
                highlight="Our Services"
                content="Perfect and Fast Movement"
                description="We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business"
                position="start"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 services-cards">
            <div className="services-list">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  background={service.background}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
