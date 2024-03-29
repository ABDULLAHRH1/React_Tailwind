import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import web8 from "../public/web8.png";
import web9 from "../public/web9.png";
import web10 from "../public/web10.png";
import web11 from "../public/web11.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>PORTFOLIO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <a href="#">
              <h1 className="font-burtons text-xl cursor-pointer">
                developedbyabdullah
              </h1>
            </a>{" "}
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 font-burtons text-xl"
                  href="https://drive.google.com/file/d/1Hv7XSRnoSySuFjGhbUn1LGX9kOIqzTJf/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl font-burtons ">
              Abdullah
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl font-burtons ">
              Front End developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Are you looking for professional programming and design services?
              Your search ends here! As an experienced freelance front-end
              developer, I&apos;m equipped to meet all your development needs.
              Whether you require top-notch web development, expert front-end
              programming, exceptional UI/UX design, or any other related tasks,
              I&apos;m here to help. Let&apos;s join forces and transform your
              ideas into reality!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="mailto:abdullahrh64@gmail.com">
                <AiFillMail />
              </a>
              <a href="www.linkedin.com/in/abdullah-rh-aaa217287">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/ABDULLAHRH1">
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="avatar" />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-12 rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500">
            <h3 className="text-5xl font-black text-white mb-6 tracking-tight leading-tight relative z-10">
              Services I Offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-100 relative z-10">
              Are you seeking professional front-end development services? Look
              no further! As a front-end developer, I&apos;m here to provide you
              with top-notch solutions. Whether you need web development,
              front-end programming, UI/UX design, or any other
              development-related tasks, I&apos;ve got you covered. Let&apos;s
              work together to bring your ideas to life!
            </p>
            <p className="text-md py-2 leading-8 text-gray-100 relative z-10">
              I offer a comprehensive array of services that are specifically
              tailored to front-end development, including
            </p>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="text-center bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
                alt="Web 4"
              />
              <h3 className="font-medium pt-6 pb-2 font-burtons text-xl text-gray-900 hover:text-gray-700 transition-colors duration-300">
                Web Developer at Your Service!
              </h3>
              <p className="py-2 text-gray-700">
                Creating elegant designs suited to your needs, following core
                design theory.
              </p>
              <h4 className="py-4 text-gray-900 font-burtons text-xl">
                Skills
              </h4>
              <ul className="text-left list-disc ml-4 text-gray-800">
                <li className="py-1">HTML5</li>
                <li className="py-1">CSS3</li>
                <li className="py-1">JavaScript</li>
                <li className="py-1">React.js</li>
              </ul>
            </div>
            <div className="text-center bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Image
                src={code}
                width={100}
                height={100}
                className="mx-auto"
                alt="Web 4"
              />
              <h3 className="font-medium pt-6 pb-2 font-burtons text-xl text-gray-900 hover:text-gray-700 transition-colors duration-300">
                Experienced Web Developer Available!
              </h3>
              <p className="py-2 text-gray-700">
                Do you have an idea for your next great website? Let&apos;s make
                it a reality.
              </p>
              <h4 className="py-4 text-gray-900 font-burtons text-xl">
                Services
              </h4>
              <ul className="text-left list-disc ml-4 text-gray-800">
                <li className="py-1">Custom website development</li>
                <li className="py-1">Responsive Design</li>
                <li className="py-1">User-friendly interfaces</li>
                <li className="py-1">Website Optimization</li>
              </ul>
            </div>
            <div className="text-center bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
                alt="Web 4"
              />
              <h3 className=" font-medium pt-6 pb-2 font-burtons text-xl text-gray-900 hover:text-gray-700 transition-colors duration-300">
                Efficient Web Development
              </h3>
              <p className="py-2 text-gray-700">
                Let&apos;s explore how Tailwind CSS, Bootstrap, and Sass can
                elevate your web development projects.
              </p>
              <h4 className="py-4 text-gray-900 font-burtons text-xl">
                efficiency benefits
              </h4>
              <ul className="text-left list-disc ml-4 text-gray-800">
                <li className="py-1">Rapid Development</li>
                <li className="py-1">Consistency and Maintainability</li>
                <li className="py-1">Responsiveness</li>
                <li className="py-1">Customizability</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div class="relative bg-gradient-to-r from-purple-500 to-pink-500 p-12 rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500">
            <h3 class="text-5xl font-black text-white mb-6 tracking-tight leading-tight relative z-10">
              Portfolio
            </h3>
            <p class="text-lg text-gray-100 mb-8 relative z-10">
              I am proficient in HTML, CSS, and JavaScript, and have experience
              working with popular frameworks such as React. these technologies,
              I build interactive and dynamic websites that provide a seamless
              user experience. I stay up-to-date with the latest industry trends
              and best practices to ensure my code is clean, maintainable, and
              scalable.
            </p>
            <p class="text-lg text-gray-100 relative z-10">
              I create websites that adapt beautifully across various platforms.
            </p>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500">
              <h3 class="text-7xl font-extrabold text-white tracking-tight leading-tight animate-bounce">
                Super Portfolio
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 relative transition duration-500 transform hover:-translate-y-2">
              <a
                href="https://abdullahrh1.github.io/HTML_And_CSS_Template_One/"
                className="block w-full h-full rounded-lg overflow-hidden"
              >
                <Image
                  className="object-cover w-full h-full transition-opacity duration-500 hover:opacity-75"
                  src={web4}
                  alt="Web 1"
                  layout="responsive"
                  width={600}
                  height={400}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-500">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white text-center text-lg font-bold">
                      HTML - CSS
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative transition duration-500 transform hover:-translate-y-2">
              <a
                href="https://abdullahrh1.github.io/HTML_And_CSS_Template_Two/"
                className="block w-full h-full rounded-lg overflow-hidden"
              >
                <Image
                  className="object-cover w-full h-full transition-opacity duration-500 hover:opacity-75"
                  src={web2}
                  alt="Web 2"
                  layout="responsive"
                  width={600}
                  height={400}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-500">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white text-center text-lg font-bold">
                      HTML - CSS
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative transition duration-500 transform hover:-translate-y-2">
              <a
                href="https://abdullahrh1.github.io/HTML_And_CSS_Template_Three/"
                className="block w-full h-full rounded-lg overflow-hidden"
              >
                <Image
                  className="object-cover w-full h-full transition-opacity duration-500 hover:opacity-75"
                  src={web3}
                  alt="Web 3"
                  layout="responsive"
                  width={600}
                  height={400}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-500">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white text-center text-lg font-bold">
                      HTML - CSS
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative transition duration-500 transform hover:-translate-y-2">
              <a
                href="https://abdullahrh1.github.io/HTML_CSS_JS_Template_Four/"
                className="block w-full h-full rounded-lg overflow-hidden"
              >
                <Image
                  className="object-cover w-full h-full transition-opacity duration-500 hover:opacity-75"
                  src={web1}
                  alt="Web 4"
                  layout="responsive"
                  width={600}
                  height={400}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-500">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white text-center text-lg font-bold">
                      HTML - CSS - JavaScript
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative transition duration-500 transform hover:-translate-y-2">
              <a
                href="https://abdullahrh1.github.io/Abdullah_dashboard/"
                className="block w-full h-full rounded-lg overflow-hidden"
              >
                <Image
                  className="object-cover w-full h-full transition-opacity duration-500 hover:opacity-75"
                  src={web5}
                  alt="Web 5"
                  layout="responsive"
                  width={600}
                  height={400}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-500">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white text-center text-lg font-bold">
                      HTML - CSS - JavaScript
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative transition duration-500 transform hover:-translate-y-2">
              <a
                href="https://abdullahrh1.github.io/React-Weather3/"
                className="block w-full h-full rounded-lg overflow-hidden"
              >
                <Image
                  className="object-cover w-full h-full transition-opacity duration-500 hover:opacity-75"
                  src={web6}
                  alt="Web 6"
                  layout="responsive"
                  width={600}
                  height={400}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-500">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white text-center text-lg font-bold">
                      React - API - Axios
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative transition duration-500 transform hover:-translate-y-2">
              <a
                href="https://abdullahrh1.github.io/crypto/"
                className="block w-full h-full rounded-lg overflow-hidden"
              >
                <Image
                  className="object-cover w-full h-full transition-opacity duration-500 hover:opacity-75"
                  src={web7}
                  alt="Web 7"
                  layout="responsive"
                  width={600}
                  height={400}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-500">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white text-center text-lg font-bold">
                      React - API - Axios - React-Router-Dom
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative transition duration-500 transform hover:-translate-y-2">
              <a
                href="https://abdullahrh1.github.io/React-Tailwind-Nike/"
                className="block w-full h-full rounded-lg overflow-hidden"
              >
                <Image
                  className="object-cover w-full h-full transition-opacity duration-500 hover:opacity-75"
                  src={web8}
                  alt="Web 8"
                  layout="responsive"
                  width={600}
                  height={400}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-500">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white text-center text-lg font-bold">
                      React - Tailwind
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative transition duration-500 transform hover:-translate-y-2">
              <a
                href="https://abdullahrh1.github.io/React-Weather2"
                className="block w-full h-full rounded-lg overflow-hidden"
              >
                <Image
                  className="object-cover w-full h-full transition-opacity duration-500 hover:opacity-75"
                  src={web9}
                  alt="Web 9"
                  layout="responsive"
                  width={600}
                  height={400}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-500">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white text-center text-lg font-bold">
                      React - MUI - Axios - Redux - React-i18next
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative transition duration-500 transform hover:-translate-y-2">
              <a
                href="https://abdullahrh1.github.io/PrayerTimes"
                className="block w-full h-full rounded-lg overflow-hidden"
              >
                <Image
                  className="object-cover w-full h-full transition-opacity duration-500 hover:opacity-75"
                  src={web10}
                  alt="Web 10"
                  layout="responsive"
                  width={600}
                  height={400}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-500">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white text-center text-lg font-bold">
                      React - MUI - Axios - Moment
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 relative transition duration-500 transform hover:-translate-y-2">
              <a
                href="https://abdullahrh1.github.io/OUTER-FOAM-FACTORY"
                className="block w-full h-full rounded-lg overflow-hidden"
              >
                <Image
                  className="object-cover w-full h-full transition-opacity duration-500 hover:opacity-75"
                  src={web11}
                  alt="Web 11"
                  layout="responsive"
                  width={600}
                  height={400}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-500">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white text-center text-lg font-bold">
                      HTML - CSS - JavaScript
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
