import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });
const features = [
  { name: "Name", description: "Nattaphon Wongphumee" },
  {
    name: "Now",
    description: "Front end developer. Back end developer.",
  },
  {
    name: "Language",
    description: "JavaScript | PHP | Python ",
  },
  {
    name: "Framework",
    description: "NextJs as React | Laravel | Angular | NodeJs",
  },
];
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}
    >
      <AnimatePresence>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.5 }}
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                Natty | Web Developer
              </h2>
              <p className="mt-4 text-gray-300">
                Welcome to my website! I'm thrilled to have you here. Allow me
                to introduce myself—I am a passionate and dedicated full-stack
                web developer ready to bring your digital dreams to life. With
                expertise in both front-end and back-end development, I have
                honed my skills to create seamless and immersive web
                experiences. Whether it's crafting beautiful and intuitive user
                interfaces or building robust and efficient server-side systems,
                I strive to deliver top-notch solutions that exceed
                expectations.
              </p>

              <dl className="relative mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div key={feature.name} className="pt-4">
                    <dt className="font-medium text-gray-300 border-b pb-3 border-gray-200">
                      {feature.name}
                    </dt>
                    <dd className="absolute z-1 mt-2 text-sm text-gray-500 hover:font-bold hover:text-gray-400">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <div className="grid grid-cols-1 sm:gap-6 lg:gap-8">
              <img
                src="./profile.jpg"
                alt="Profile"
                className="rounded-lg bg-gray-100"
              />
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </main>
  );
}
