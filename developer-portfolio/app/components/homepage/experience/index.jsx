'use client';

import { experiencesData } from "@/utils/data/experiences-data";
import { motion, AnimatePresence } from "framer-motion";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {experiencesData.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1a1f38] rounded-xl p-6 flex flex-col h-full hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[#16f2b3]/20"
              >
                <div className="flex-none">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#16f2b3] mb-1">
                        {experience.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-white">
                        {experience.company}
                      </h4>
                    </div>
                    <span className="text-sm text-gray-400 whitespace-nowrap">
                      {experience.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {experience.location} • {experience.type}
                  </p>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    {experience.description.map((point, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <span className="text-[#16f2b3] mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex-none mt-4">
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-[#0d1224] text-[#16f2b3] text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Experience;