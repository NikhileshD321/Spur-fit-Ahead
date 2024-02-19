'use client';
import { motion } from 'framer-motion';
import styles from '../styles';

const About2 = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      initial="hidden"
      animate="show"
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <div className="about2-container">
        <h2 className="about-heading">Be the best you with EQ</h2>

        <div className="about-content">
  
          <p className="about2-para text-2xl mb-4 md:mb-0">
            Not having your own emotions under control might be holding you back.
          </p>

          <p className="about2-para2 text-2xl">
            Additionaly Not understanding those of others stops you from being parent, friend you can be.
          </p>
        </div>
      </div>

    </motion.div>
  </section>
);

export default About2;
