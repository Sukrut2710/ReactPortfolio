'use client';

import { contactsData } from "@/utils/data/contactsData";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12 mt-20">
      <div className="absolute -top-[98px] -z-10 w-full">
        <Image
          src="/hero.svg"
          alt="Hero"
          width={1572}
          height={795}
          priority={true}
          style={{
            maxWidth: "100%",
            height: "auto"
          }}
        />
      </div>

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8 px-4 md:px-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-5xl font-bold leading-tight text-white">
            Hello,
            <br />
            This is <span className="text-pink-500">SUKRUT DANI</span>, I'm a
            <br />
            Professional <span className="text-[#16f2b3]">Software<br />Developer</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            {contactsData.github && (
              <Link
                href={contactsData.github}
                target='_blank'
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsGithub size={30} />
              </Link>
            )}
            {contactsData.linkedIn && (
              <Link
                href={contactsData.linkedIn}
                target='_blank'
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsLinkedin size={30} />
              </Link>
            )}
            {contactsData.facebook && (
              <Link
                href={contactsData.facebook}
                target='_blank'
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <FaFacebook size={30} />
              </Link>
            )}
            {contactsData.instagram && (
              <Link
                href={contactsData.instagram}
                target='_blank'
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <FaInstagram size={30} />
              </Link>
            )}
            {contactsData.youtube && (
              <Link
                href={contactsData.youtube}
                target='_blank'
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <FaYoutube size={30} />
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact">
              <button className="bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-1.5 text-white flex items-center gap-1 rounded-lg text-base hover:scale-105 duration-200">
                <RiContactsFill size={18} />
                <span>Contact Me</span>
              </button>
            </Link>
            {contactsData.resume && (
              <Link href={contactsData.resume} target="_blank">
                <button className="bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-1.5 text-white flex items-center gap-1 rounded-lg text-base hover:scale-105 duration-200">
                  <MdDownload size={18} />
                  <span>Resume</span>
                </button>
              </Link>
            )}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="w-full rounded-xl bg-[#1a1f2d] p-6 shadow-xl">
            <div className="flex gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <code className="text-sm sm:text-base">
              <div className="text-[#e6f1ff]">
                <span className="text-[#c792ea]">const</span>{" "}
                <span className="text-[#82aaff]">developer</span>{" "}
                <span className="text-[#89ddff]">=</span>{" "}
                <span className="text-[#89ddff]">{"{"}</span>
              </div>
              <div className="ml-4 text-[#e6f1ff]">
                <span className="text-[#82aaff]">name:</span>{" "}
                <span className="text-[#c3e88d]">'Sukrut Dani'</span>
                <span className="text-[#89ddff]">,</span>
              </div>
              <div className="ml-4 text-[#e6f1ff]">
                <span className="text-[#82aaff]">skills:</span>{" "}
                <span className="text-[#89ddff]">[</span>
                <span className="text-[#c3e88d]">'Java'</span>
                <span className="text-[#89ddff]">,</span>{" "}
                <span className="text-[#c3e88d]">'Python'</span>
                <span className="text-[#89ddff]">,</span>{" "}
                <span className="text-[#c3e88d]">'Node.js'</span>
                <span className="text-[#89ddff]">,</span>{" "}
                <span className="text-[#c3e88d]">'SQL'</span>
                <span className="text-[#89ddff]">,</span>{" "}
                <span className="text-[#c3e88d]">'MongoDB'</span>
                <span className="text-[#89ddff]">]</span>
                <span className="text-[#89ddff]">,</span>
              </div>
              <div className="ml-4 text-[#e6f1ff]">
                <span className="text-[#82aaff]">hardWorker:</span>{" "}
                <span className="text-[#ff5874]">true</span>
                <span className="text-[#89ddff]">,</span>
              </div>
              <div className="ml-4 text-[#e6f1ff]">
                <span className="text-[#82aaff]">problemSolver:</span>{" "}
                <span className="text-[#ff5874]">true</span>
                <span className="text-[#89ddff]">,</span>
              </div>
              <div className="ml-4 text-[#e6f1ff]">
                <span className="text-[#82aaff]">hireable:</span>{" "}
                <span className="text-[#c792ea]">function</span>
                <span className="text-[#89ddff]">()</span>{" "}
                <span className="text-[#89ddff]">{"{"}</span>
              </div>
              <div className="ml-8 text-[#e6f1ff]">
                <span className="text-[#c792ea]">return</span>{" "}
                <span className="text-[#89ddff]">)</span>
              </div>
              <div className="ml-12 text-[#e6f1ff]">
                <span className="text-[#82aaff]">this</span>
                <span className="text-[#89ddff]">.</span>
                <span className="text-[#82aaff]">hardWorker</span>{" "}
                <span className="text-[#89ddff]">&&</span>
              </div>
              <div className="ml-12 text-[#e6f1ff]">
                <span className="text-[#82aaff]">this</span>
                <span className="text-[#89ddff]">.</span>
                <span className="text-[#82aaff]">problemSolver</span>{" "}
                <span className="text-[#89ddff]">&&</span>
              </div>
              <div className="ml-12 text-[#e6f1ff]">
                <span className="text-[#82aaff]">this</span>
                <span className="text-[#89ddff]">.</span>
                <span className="text-[#82aaff]">skills</span>
                <span className="text-[#89ddff]">.</span>
                <span className="text-[#82aaff]">length</span>{" "}
                <span className="text-[#89ddff]">{'>='}</span>{" "}
                <span className="text-[#f78c6c]">5</span>
              </div>
              <div className="ml-8 text-[#e6f1ff]">
                <span className="text-[#89ddff]">);</span>
              </div>
              <div className="ml-4 text-[#e6f1ff]">
                <span className="text-[#89ddff]">{"}"}</span>
              </div>
              <div className="text-[#e6f1ff]">
                <span className="text-[#89ddff]">{"}"}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;