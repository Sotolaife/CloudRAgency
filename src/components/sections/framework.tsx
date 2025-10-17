import { frameworkSteps } from '@/lib/data';

export default function FrameworkSection() {
  return (
    <section id="framework" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-semibold text-primary uppercase">Our Framework</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mt-2">
            The Blueprint for Your Digital Dominance
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            Our proven 4-step process ensures every project is a resounding success, delivering measurable results and a significant return on investment.
          </p>
        </div>
        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-neutral-800" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frameworkSteps.map((step, index) => (
              <div key={step.title} className="relative text-center md:text-left">
                <div className="flex justify-center md:justify-start">
                    <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-background border-2 border-neutral-700">
                        <step.icon className="w-8 h-8 text-primary" />
                    </div>
                </div>
                <h3 className="font-headline text-xl font-bold mt-6">{step.title}</h3>
                <p className="mt-2 text-neutral-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
