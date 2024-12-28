'use client';

import { contactsData } from '@/utils/data/contactsData';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
            <p className="text-gray-400">Feel free to reach out to me for any inquiries or opportunities</p>
          </div>
          <div className="flex flex-col gap-6 items-center">
            {contactsData.email && (
              <Link 
                href={`mailto:${contactsData.email}`}
                className="w-full max-w-md text-lg flex items-center gap-4 p-4 rounded-lg bg-[#1a1443] hover:bg-[#2a2453] transition-all duration-300"
              >
                <MdAlternateEmail
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800"
                  size={36}
                />
                <span>{contactsData.email}</span>
              </Link>
            )}
            {contactsData.phone && (
              <Link 
                href={`tel:${contactsData.phone}`}
                className="w-full max-w-md text-lg flex items-center gap-4 p-4 rounded-lg bg-[#1a1443] hover:bg-[#2a2453] transition-all duration-300"
              >
                <IoMdCall
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800"
                  size={36}
                />
                <span>{contactsData.phone}</span>
              </Link>
            )}
            {contactsData.address && (
              <div className="w-full max-w-md text-lg flex items-center gap-4 p-4 rounded-lg bg-[#1a1443]">
                <CiLocationOn
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800"
                  size={36}
                />
                <span>{contactsData.address}</span>
              </div>
            )}
          </div>
          <div className="mt-8 flex justify-center gap-6">
            {contactsData.github && (
              <Link 
                href={contactsData.github}
                target="_blank"
                className="hover:scale-110 transition-all duration-300"
              >
                <IoLogoGithub
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] text-gray-800"
                  size={48}
                />
              </Link>
            )}
            {contactsData.linkedIn && (
              <Link 
                href={contactsData.linkedIn}
                target="_blank"
                className="hover:scale-110 transition-all duration-300"
              >
                <BiLogoLinkedin
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] text-gray-800"
                  size={48}
                />
              </Link>
            )}
            {contactsData.facebook && (
              <Link 
                href={contactsData.facebook}
                target="_blank"
                className="hover:scale-110 transition-all duration-300"
              >
                <FaFacebook
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] text-gray-800"
                  size={48}
                />
              </Link>
            )}
            {contactsData.instagram && (
              <Link 
                href={contactsData.instagram}
                target="_blank"
                className="hover:scale-110 transition-all duration-300"
              >
                <FaInstagram
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] text-gray-800"
                  size={48}
                />
              </Link>
            )}
            {contactsData.youtube && (
              <Link 
                href={contactsData.youtube}
                target="_blank"
                className="hover:scale-110 transition-all duration-300"
              >
                <FaYoutube
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] text-gray-800"
                  size={48}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;