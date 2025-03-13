import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backhomepage from '../assets/backhomepage.jpg';
import newpngsmile from '../assets/newpngsmile.png';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${backhomepage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-screen px-24 -mt-20">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-8xl font-['Licorice'] font-bold mb-8 text-white"
        >
          Yada's Space
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-['Licorice'] italic mb-12 text-white max-w-3xl"
        >
          A space for my ideas and creativity
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="/about" className="btn bg-[#FFF0F5] text-[#000000] text-xl px-8 py-4 hover:bg-[#FFF0F5]/90">
            Explore More
          </Link>
        </motion.div>
      </div>

      {/* Animated PNG Image */}
      <motion.div
        className="absolute bottom-[-250px] right-[-400px] z-20"
      >
        <motion.img 
          src={newpngsmile} 
          alt="Smile" 
          className="w-[1900px] h-auto"
          whileHover={{ y: -15 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default Home;