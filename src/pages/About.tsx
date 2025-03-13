import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, LineChart, Heart, Star, Zap } from 'lucide-react';
import BAbout from '../assets/BAbout.jpg';
import meinabout from '../assets/meinabout.jpg';

function About() {
  const skills = [
    { name: 'Web Design', percentage: 90 },
    { name: 'Branding', percentage: 85 },
    { name: 'UX/UI', percentage: 80 },
  ];

  const values = [
    { icon: <Star className="w-8 h-8" />, name: 'Creativity', description: 'Pushing boundaries with innovative solutions' },
    { icon: <Heart className="w-8 h-8" />, name: 'Integrity', description: 'Building trust through honest communication' },
    { icon: <Zap className="w-8 h-8" />, name: 'Innovation', description: 'Embracing new technologies and ideas' },
  ];

  const milestones = [
    '5+ years of professional experience',
    'Worked with 50+ clients globally',
    'Successfully delivered 100+ projects',
    'Featured in design publications',
  ];

  const hobbies = [
    { title: 'Photography', description: 'Capturing moments and memories through the lens' },
    { title: 'Travel', description: 'Exploring new places and cultures' },
    { title: 'Art', description: 'Expressing creativity through various mediums' },
    { title: 'Reading', description: 'Diving into different worlds through books' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black/80 relative"
      style={{
        backgroundImage: `url(${BAbout})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-7xl md:text-9xl font-['Stalemate'] mb-6 text-white"
            >
              About Me
            </motion.h1>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 border-2 border-[#FFF0F5] transform translate-x-4 translate-y-4 rounded-lg" />
                <img
                  src={meinabout}
                  alt="Profile"
                  className="rounded-lg shadow-xl relative z-10 w-full h-auto"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-['Aileron'] font-bold mb-4 text-white">My Journey</h2>
                <p className="text-lg text-gray-100">
                  As a passionate designer and developer, I've dedicated my career to creating meaningful
                  digital experiences that make a difference. My approach combines creativity with
                  technical expertise to deliver solutions that not only look beautiful but also perform
                  exceptionally.
                </p>
                <ul className="space-y-3">
                  {milestones.map((milestone, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center text-gray-100"
                    >
                      <span className="w-2 h-2 bg-[#FFF0F5] rounded-full mr-3" />
                      {milestone}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-['Aileron'] font-bold mb-12 text-center text-white">Skills & Expertise</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-white">{skill.name}</h3>
                    <span className="text-[#FFF0F5]">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-[#FFF0F5] rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-['Aileron'] font-bold mb-12 text-center text-white">My Hobbies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative overflow-hidden rounded-lg aspect-square"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                  <div className="absolute inset-0 bg-[#FFF0F5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-['Aileron'] font-bold text-white mb-2">{hobby.title}</h3>
                    <p className="text-gray-100 text-sm">{hobby.description}</p>
                  </div>
                  <img
                    src={`https://source.unsplash.com/random/800x800?${hobby.title.toLowerCase()}`}
                    alt={hobby.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-['Aileron'] font-bold mb-12 text-center text-white">Personal Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6 rounded-lg bg-black/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-[#FFF0F5]/20 hover:border-[#FFF0F5]/40"
                >
                  <div className="text-[#FFF0F5] mb-4 transform transition-transform duration-300 hover:scale-110">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-['Aileron'] font-bold mb-2 text-white">{value.name}</h3>
                  <p className="text-gray-100">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default About;