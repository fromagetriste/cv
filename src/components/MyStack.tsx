import { motion } from "motion/react";

const MyStack = () => {
  return (
    <section className="section-container" id="StackIdForScroll">
      <motion.div
        className="title"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Ensures animation happens only once
      >
        My <span id="Stack-Gradient">Tech Stack</span>
      </motion.div>

      <motion.div
        className="sub-title"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }} // Slight delay for a staggered effect
        viewport={{ once: true }}
      >
        I am more focused on React
      </motion.div>

      <div className="flex-container">
        <div className="gauche">
          <div className="title" id="stack-sub-sub">
            Non-React tools :
          </div>
          <div className="items">
            <div className="gauche-items">
              <div className="glass">
                <img
                  className="gauche-logo"
                  src={`${import.meta.env.BASE_URL}/icons/stack/python.svg`}
                  alt="python logo"
                />
                Python
              </div>
              <div className="glass">
                <img
                  className="gauche-logo"
                  src={`${import.meta.env.BASE_URL}/icons/stack/django.svg`}
                  alt="django logo"
                />
                Django
              </div>
              <div className="glass">
                <img
                  className="gauche-logo"
                  src={`${import.meta.env.BASE_URL}/icons/stack/panda.svg`}
                  alt="panda logo"
                />
                Panda
              </div>
            </div>
            <div className="right-items">
              <div className="glass">
                <img
                  className="gauche-logo"
                  src={`${import.meta.env.BASE_URL}/icons/stack/tailwind.svg`}
                  alt="sass logo"
                />
                Tailwind / SASS
              </div>
              <div className="glass" id="typescript-shadow">
                <img
                  className="gauche-logo"
                  src={`${import.meta.env.BASE_URL}/icons/stack/typescript.svg`}
                  alt="typescript logo"
                />
                TypeScript
              </div>
              <div className="glass">
                <img
                  className="gauche-logo"
                  src={`${import.meta.env.BASE_URL}/icons/stack/github.svg`}
                  alt="github logo"
                />
                GitHub
              </div>
            </div>
          </div>
        </div>

        <div className="droite">
          <div className="glass-card-react">
            <div className="logo-react-container">
              <img
                src={`${
                  import.meta.env.BASE_URL
                }/icons/stack/react-logo-pink.svg`}
                alt="logo react"
                className="card-logo-react"
              />
            </div>
            <ul className="skills-react-container">
              <li className="skill-react">Hooks</li>
              <li className="skill-react">Zustand</li>
              <li className="skill-react">API Fetching</li>
              <li className="skill-react">Forms</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStack;
