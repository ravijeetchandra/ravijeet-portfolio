"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ArrowRight } from "lucide-react";


const CompanyLogo = ({ name }: { name: string }) => {
  const logos: Record<string, string> = {
    "Dr. Martens plc": "/ravijeet-portfolio/dr-martens.png",
    "Fractal Analytics": "/ravijeet-portfolio/fractal.png",
    "Accenture": "/ravijeet-portfolio/accenture.png",
    "Secure Meters Limited": "/ravijeet-portfolio/secure-meters.png",
  };
  const logoSrc = logos[name];
  if (logoSrc) {
    return (
      <img
        src={logoSrc}
        alt={name}
        className="w-8 h-8 object-contain"
      />
    );
  }
  return <Briefcase size={20} className="text-primary" />;
};

const experiences = [
  {
    company: "Dr. Martens plc",
    role: "Lead Data Scientist",
    location: "Bengaluru, Karnataka, India",
    period: "Jan 2026 - Present",
    description:
      "Leading Global data initiatives at Dr. Martens. Driving enterprise AI strategy, customer intelligence, and advanced analytics for business impact.",
    achievements: [
      "Enterprise AI Strategy & Implementation",
      "Global Data Initiatives Leadership",
      "Customer Intelligence & Analytics",
      "Intelligent Automation Systems",
    ],
  },
  {
    company: "Fractal Analytics",
    role: "Data Scientist",
    location: "Bengaluru, Karnataka, India",
    period: "Jun 2022 - Jan 2026",
    description:
      "Led end-to-end AI solution delivery for global enterprise clients across retail, CPG, and financial sectors.",
    achievements: [
      "Recommendation Engine: Drove 4-5% monthly sales growth across retail chains in Philippines through Test and Control mechanism",
      "Successfully expanded recommendation engine to Vietnam and Indonesia markets",
      "Developed automated insights engine with GenAI (RAG, prompt engineering) for financial chatbot and decision-making",
      "Led pan India business for CPG client with 12+ lakh stores handling product recommendation model",
      "Client communication, data understanding, business problem formulation, and model deployment",
    ],
  },
  {
    company: "Accenture",
    role: "Machine Learning Engineer",
    location: "India",
    period: "Aug 2021 - Jun 2022",
    description:
      "Developed and deployed NLP-based pipeline for leading cab service provider, automating ticketing process.",
    achievements: [
      "NLP Pipeline: Automated crucial ticketing process, reducing human effort",
      "Led client communication and formulated data-driven solutions",
      "Improved base model performance by 8-9% through live trials over a month",
    ],
  },
  {
    company: "Secure Meters Limited",
    role: "Data Scientist",
    location: "Rajasthan, India",
    period: "Jul 2019 - Jul 2021",
    description:
      "Data collection, processing, building, and tuning forecasting models using ML and statistical concepts.",
    achievements: [
      "Energy Demand Forecasting: Reduced prediction errors from 7% to 1.8% using Ensemble techniques",
      "Interactive Data Visualization: Built dashboard using Plotly and Dash",
      "Classification Model: 97% accuracy on field test dataset using CNN, YOLO, TensorFlow",
      "Proficiency in Python, SQL, Plotly, Dash, FastAPI, Pandas, Scikit, TensorFlow",
    ],
  },
  {
    company: "Secure Meters Limited",
    role: "Software Developer",
    location: "Rajasthan, India",
    period: "Jul 2018 - Jul 2019",
    description:
      "Developed mobile apps and web services for field operations.",
    achievements: [
      "Android App: Commissioning of heat meters with REST APIs, JSON parsing, SQLite",
      "iOS App: Replica of Android app using CoreData, camera integration",
      "Web Service: Backoffice database interaction, database structure, procedures",
    ],
  },
  {
    company: "Secure Meters Limited",
    role: "Graduate Engineer Trainee",
    location: "Rajasthan, India",
    period: "Jan 2018 - Jun 2018",
    description:
      "Developed hybrid Xamarin app for meter installers.",
    achievements: [
      "Hybrid Xamarin App: Field operations for meter installation",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Career Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Building enterprise-grade AI solutions that make real business impact
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent-purple to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10" />

                <div className="ml-16 md:ml-0 md:w-1/2">
                  <div className="gradient-border p-6 hover:bg-white/5 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white dark:bg-white/10 flex items-center justify-center">
                        <CompanyLogo name={exp.company} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-primary dark:text-primary">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <ArrowRight
                            size={14}
                            className="text-accent-purple mt-1 flex-shrink-0"
                          />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}