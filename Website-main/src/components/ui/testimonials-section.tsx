"use client";

import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials: Testimonial[] = [
  {
    text: "cogninode technologioes transformed our workflow with their AI solutions. The seamless integration and intuitive design have revolutionized how we operate daily.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
    name: "Sarah Chen",
    role: "Operations Director",
  },
  {
    text: "Implementing cogninode technologioes's platform was smooth and efficient. The customizable interface made team adoption effortless, and support was exceptional throughout.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
    name: "Michael Rodriguez",
    role: "CTO",
  },
  {
    text: "The support team at cogninode technologioes is outstanding. They guided us through every step, ensuring our success and satisfaction with the platform.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
    name: "Emily Johnson",
    role: "Customer Success Manager",
  },
  {
    text: "cogninode technologioes's AI-powered solutions have significantly enhanced our business operations. The intuitive interface and robust features make it a game-changer.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
    name: "David Kim",
    role: "CEO",
  },
  {
    text: "The powerful features and responsive support have transformed our workflow. We've become significantly more efficient since implementing cogninode technologioes.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces",
    name: "Priya Patel",
    role: "Project Manager",
  },
  {
    text: "The implementation exceeded our expectations. cogninode technologioes streamlined our processes and improved overall business performance dramatically.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces",
    name: "Lisa Anderson",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved significantly with cogninode technologioes's user-friendly design. Customer feedback has been overwhelmingly positive.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces",
    name: "James Wilson",
    role: "Marketing Director",
  },
  {
    text: "cogninode technologioes delivered a solution that exceeded expectations. They truly understood our needs and enhanced our operations in ways we didn't anticipate.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=faces",
    name: "Rachel Martinez",
    role: "Sales Manager",
  },
  {
    text: "Using cogninode technologioes, our online presence and conversions improved dramatically. The platform has been instrumental in boosting our business performance.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
    name: "Alex Thompson",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-black mt-0 mb-10 relative pt-2 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="container z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto space-y-3"
        >
          <div className="flex justify-center">
            <div className="border border-[#780606] dark:border-[#ff6b6b] py-1 px-4 rounded-lg text-[#780606] dark:text-[#ff6b6b] text-sm font-medium">
              Testimonials
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-gray-900 dark:text-white">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75 text-gray-600 dark:text-gray-400">
            See what our customers have to say about us.
          </p>
        </motion.div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
