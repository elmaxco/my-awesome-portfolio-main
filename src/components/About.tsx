import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">01. About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm Max! I started my programming career in 2024 at Nackademin 
                with a focus on .NET development. What began as a fascination with 
                how software works has grown into a passion for building modern web 
                applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently an intern at Webbkompaniet, where I work with CMS 
                systems and gain hands-on experience in web development. I enjoy 
                learning new technologies and applying them to create practical 
                solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always eager to take on new challenges and expand my skill set. 
                Whether it's working with .NET, exploring CMS platforms, or diving 
                into new frameworks, I'm committed to growing as a developer.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            {/* Animated Coding SVG */}
            <div className="relative w-full max-w-md aspect-square">
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-3xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.svg
                viewBox="0 0 400 400"
                className="relative w-full h-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {/* Monitor */}
                <motion.rect
                  x="60"
                  y="60"
                  width="280"
                  height="200"
                  rx="12"
                  fill="hsl(222 47% 12%)"
                  stroke="hsl(174 72% 56%)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
                
                {/* Screen */}
                <rect
                  x="75"
                  y="75"
                  width="250"
                  height="170"
                  rx="6"
                  fill="hsl(222 47% 8%)"
                />
                
                {/* Code lines */}
                <motion.g>
                  {/* Line 1 */}
                  <motion.rect
                    x="90"
                    y="95"
                    width="60"
                    height="8"
                    rx="4"
                    fill="hsl(270 70% 60%)"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                  <motion.rect
                    x="160"
                    y="95"
                    width="80"
                    height="8"
                    rx="4"
                    fill="hsl(174 72% 56%)"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                  
                  {/* Line 2 */}
                  <motion.rect
                    x="105"
                    y="115"
                    width="45"
                    height="8"
                    rx="4"
                    fill="hsl(215 20% 65%)"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  />
                  <motion.rect
                    x="160"
                    y="115"
                    width="100"
                    height="8"
                    rx="4"
                    fill="hsl(174 72% 56%)"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  />
                  
                  {/* Line 3 */}
                  <motion.rect
                    x="105"
                    y="135"
                    width="70"
                    height="8"
                    rx="4"
                    fill="hsl(270 70% 60%)"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  />
                  <motion.rect
                    x="185"
                    y="135"
                    width="55"
                    height="8"
                    rx="4"
                    fill="hsl(215 20% 65%)"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  />
                  
                  {/* Line 4 */}
                  <motion.rect
                    x="90"
                    y="155"
                    width="50"
                    height="8"
                    rx="4"
                    fill="hsl(174 72% 56%)"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  />
                  
                  {/* Line 5 - blinking cursor */}
                  <motion.rect
                    x="90"
                    y="175"
                    width="40"
                    height="8"
                    rx="4"
                    fill="hsl(270 70% 60%)"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  />
                  <motion.rect
                    x="140"
                    y="175"
                    width="8"
                    height="8"
                    rx="2"
                    fill="hsl(174 72% 56%)"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  
                  {/* Line 6 */}
                  <motion.rect
                    x="105"
                    y="195"
                    width="90"
                    height="8"
                    rx="4"
                    fill="hsl(215 20% 65%)"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  />
                  <motion.rect
                    x="205"
                    y="195"
                    width="60"
                    height="8"
                    rx="4"
                    fill="hsl(174 72% 56%)"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                  />
                  
                  {/* Line 7 */}
                  <motion.rect
                    x="90"
                    y="215"
                    width="55"
                    height="8"
                    rx="4"
                    fill="hsl(270 70% 60%)"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  />
                </motion.g>
                
                {/* Monitor Stand */}
                <motion.path
                  d="M180 260 L220 260 L230 300 L170 300 Z"
                  fill="hsl(222 47% 12%)"
                  stroke="hsl(174 72% 56%)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
                
                {/* Stand Base */}
                <motion.rect
                  x="140"
                  y="300"
                  width="120"
                  height="12"
                  rx="6"
                  fill="hsl(222 47% 12%)"
                  stroke="hsl(174 72% 56%)"
                  strokeWidth="2"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />
                
                {/* Floating elements */}
                <motion.circle
                  cx="320"
                  cy="100"
                  r="8"
                  fill="hsl(174 72% 56%)"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx="80"
                  cy="150"
                  r="6"
                  fill="hsl(270 70% 60%)"
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.rect
                  x="300"
                  y="200"
                  width="12"
                  height="12"
                  rx="2"
                  fill="hsl(174 72% 56%)"
                  animate={{
                    rotate: [0, 180, 360],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
