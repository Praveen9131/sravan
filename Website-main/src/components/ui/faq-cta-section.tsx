"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiQuestionMarkCircle, HiPlus, HiMinus, HiUserGroup } from "react-icons/hi2";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What do I need to get started?",
    answer: "Getting started is simple! All you need is a clear vision of your project goals and basic information about your business needs. Our team will guide you through the entire process, from initial consultation to implementation. No technical expertise required on your end."
  },
  {
    question: "What kind of customization is available?",
    answer: "We offer extensive customization options tailored to your specific requirements. From AI model configurations to UI/UX design, integration capabilities, and feature sets - we work with you to create a solution that perfectly fits your business needs and brand identity."
  },
  {
    question: "How easy is it to edit for beginners?",
    answer: "Our platform is designed with user-friendliness in mind. We provide intuitive interfaces, comprehensive documentation, and dedicated support to ensure even beginners can easily manage and customize their solutions. Training sessions are also available to help you get comfortable quickly."
  },
  {
    question: "Let me know more about moneyback guarantee?",
    answer: "We stand behind our work with confidence. If you're not satisfied with our services within the first 30 days, we offer a full money-back guarantee. This ensures you can invest in our solutions with complete peace of mind, knowing your investment is protected."
  },
  {
    question: "Do I need to know how to code?",
    answer: "Not at all! Our solutions are designed to be accessible to everyone, regardless of technical background. Our user-friendly interfaces and drag-and-drop tools make it easy to manage your AI solutions without any coding knowledge. However, if you have technical expertise, we also provide advanced customization options."
  },
  {
    question: "What will I get after purchasing the template?",
    answer: "After purchasing, you'll receive complete access to your customized solution, including all source code, documentation, setup guides, and ongoing support. You'll also get access to our resource library, regular updates, and priority customer support to ensure your success."
  }
];

export const FAQCTASection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* FAQ Section */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Title and Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* FAQ Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#780606]/10 dark:bg-[#ff6b6b]/10 border border-[#780606]/20 dark:border-[#ff6b6b]/20"
              >
                <HiQuestionMarkCircle className="w-4 h-4 text-[#780606] dark:text-[#ff6b6b]" />
                <span className="text-sm font-medium text-[#780606] dark:text-[#ff6b6b]">FAQ</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
              </p>
            </motion.div>

            {/* Right Side - FAQ Items */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 overflow-hidden transition-all duration-300 hover:border-[#780606]/30 dark:hover:border-[#ff6b6b]/30"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left group"
                  >
                    <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white pr-4">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-[#780606]/10 dark:bg-[#ff6b6b]/10 flex items-center justify-center group-hover:bg-[#780606]/20 dark:group-hover:bg-[#ff6b6b]/20 transition-colors"
                    >
                      {openIndex === index ? (
                        <HiMinus className="w-5 h-5 text-[#780606] dark:text-[#ff6b6b]" />
                      ) : (
                        <HiPlus className="w-5 h-5 text-[#780606] dark:text-[#ff6b6b]" />
                      )}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#780606] via-[#5c0404] to-[#3d0202] dark:from-[#ff6b6b] dark:via-[#ff4444] dark:to-[#cc0000] opacity-90" />
          
          {/* Glow Effect */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)'
            }}
          />
          
          {/* Content */}
          <div className="relative px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 text-center">
            {/* CTA Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/20 dark:bg-white/10 border border-white/30 backdrop-blur-sm mb-6"
            >
              <HiUserGroup className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Become a Part of Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Ready to Elevate Your Brand with Next-Gen Innovation?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Ready to take the next step? Join us now and start transforming your vision into reality with expert support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#780606] dark:text-[#ff6b6b] rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Book an Appointment
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQCTASection;

