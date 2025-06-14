"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_aslx4aa", // from emailjs dashboard
        "template_vcx3w3d", // from emailjs dashboard
        form.current,
        "Qby2CGdxkEm6Ooxpx" // from emailjs dashboard
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          setStatus("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-900">
      <h2 className="text-3xl font-semibold mb-10 text-purple-400">Get in Touch</h2>
      <p className="text-sm text-gray-400 mb-6">
        Feel free to reach out for collaborations, questions, or a coffee chat.
      </p>
      <form ref={form} onSubmit={sendEmail} className="grid gap-4 max-w-xl">
        <input name="name" type="text" required placeholder="Your Name" className="bg-gray-800 p-3 rounded-md text-sm" />
        <input name="email" type="email" required placeholder="Your Email" className="bg-gray-800 p-3 rounded-md text-sm" />
        <textarea name="message" rows={4} required placeholder="Message" className="bg-gray-800 p-3 rounded-md text-sm" />
        <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md">
          Send Message
        </button>
        {status && <p className="text-sm mt-2 text-purple-300">{status}</p>}
      </form>
      <div className="flex items-center justify-left mt-10 space-x-4">
        <a href="https://www.linkedin.com/in/gannonsmith/" target="_blank">
          <div className="bg-gray-800 text-gray-200 flex space-x-1 px-2 py-1 rounded shadow-2xl justify-center items-center hover:cursor-pointer hover:bg-gray-700 transition">
            <FontAwesomeIcon icon={faLinkedin} />
            <p>LinkedIn</p>
          </div>
        </a>
        <a href="https://github.com/gannonsmith" target="_blank">
          <div className="bg-gray-800 text-gray-200 flex space-x-1 px-2 py-1 rounded shadow-2xl justify-center items-center hover:cursor-pointer hover:bg-gray-700 transition">
            <FontAwesomeIcon icon={faGithub} />
            <p>Github</p>
          </div>
        </a>
        <a href="mailto:gannonsmithr@gmail.com">
          <div className="bg-gray-800 text-gray-200 flex space-x-1 px-2 py-1 rounded shadow-2xl justify-center items-center hover:cursor-pointer hover:bg-gray-700 transition">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>Email</p>
          </div>
        </a>
      </div>
    </section>
  );
}
