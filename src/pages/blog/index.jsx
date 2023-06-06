import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });
const features = [
  { name: "Name", description: "Nattaphon Wongphumee" },
  {
    name: "Now",
    description: "Now study at KhonKaen University",
  },
  {
    name: "Language",
    description: "JavaScript | NodeJs | PHP | Python | Go | C# | C++",
  },
  {
    name: "Framework",
    description: "NextJs as React | Laravel | Angular",
  },
];
const social = [
  {
    title: "Facebook",
    path: "https://www.facebook.com/nattapon.wongpoomee",
    icon: "/facebook.png",
  },
  {
    title: "Discord",
    path: "https://discord.gg/t5vGaxeGSS",
    icon: "/discord.png",
  },
];
const project = [
  {
    title: "ChatApp",
    language: "Dart",
    path: "https://github.com/MeanSoNat/flutter_project_chat.git",
  },
  {
    title: "KNN",
    language: "Python",
    path: "https://github.com/MeanSoNat/KNN.git",
  },
  { title: "Pokedex", language: "TypeScript", path: "" },
];

export default function profile() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}
    >
      <nav className="w-full border-b md:border-0 md:static">
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <p className="text-white text-3xl">Social</p>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0`}
          >
            <ul className="justify-end items-center space-y-8 pr-5 md:flex md:space-x-6 md:space-y-0">
              {social.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-center align-center text-xl text-white pl-3 border-l hover:font-bold text-grow"
                  >
                    <Link href={item.path}>{item.title}</Link>
                    <Image
                      className="fill-white ml-2"
                      src={item.icon}
                      width={30}
                      height={100}
                    ></Image>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
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
                About me
              </h2>
              <p className="mt-4 text-gray-300">
                What sets me apart is my commitment to understanding your unique
                requirements and translating them into functional and elegant
                solutions. I believe in open communication and collaboration,
                ensuring that your vision is at the forefront of every decision
                I make throughout the development process. Whether you're a
                small business looking to establish an online presence, an
                entrepreneur with a groundbreaking idea, or an organization
                seeking to streamline operations, I am here to help. My goal is
                to empower you with digital solutions that elevate your brand,
                engage your audience, and drive success. So, take a look around,
                explore my portfolio, and get in touch to discuss how we can
                turn your ideas into reality. Together, let's build a digital
                presence that leaves a lasting impression.
              </p>

              <dl className="relative mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div key={feature.name} className="pt-4">
                    <dt className="font-medium text-gray-300 border-b pb-3 border-gray-200">
                      {feature.name}
                    </dt>
                    <dd className="absolute w-72 z-1 mt-2 text-sm text-gray-500 hover:font-bold hover:text-gray-400">
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
          <div className="mt-6 flex flex-col justify-start w-full">
            <p className="text-white text-3xl border-b border-lg py-2 font-bold">
              My Project
            </p>
            <ul className="mt-2 w-fit">
              {project.map((prop) => {
                return (
                  <li className="ml-5 row-span-2 text-white font-thin text-xl list-disc hover:font-bold">
                    <Link href={prop.path}>
                      <p className="mt-2 p-2">{prop.title}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}
