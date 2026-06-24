import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();

    // 1. Validation: Prevent submission if the message field is completely empty
    if (!form.message || form.message.trim() === "") {
      alert("Please enter a message before sending.");
      return;
    }

    setLoading(true);

    // 2. Check if the user has omitted either their Name or Email
    const isAnonymous = !form.name || form.name.trim() === "" || !form.email || form.email.trim() === "";

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name && form.name.trim() !== "" ? form.name : "Anonymous User",
          to_name: config.html.fullName,
          from_email: form.email && form.email.trim() !== "" ? form.email : "anonymous@portfolio.com",
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          
          // 3. Dynamic Alerts based on contact information submission
          if (isAnonymous) {
            alert("Your message has been submitted anonymously as no contact details were provided.");
          } else {
            alert("Thank you. Your message has been successfully delivered to Faran Ahmed.");
          }

          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please check your .env configuration.");
        }
      );
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      {/* LEFT SIDE: FORM SECTION */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* RIGHT SIDE: EARTH CANVAS & SOCIAL LINKS */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-auto md:h-[550px] xl:h-auto xl:flex-1 flex flex-col justify-between gap-6"
      >
        {/* Earth Container */}
        <div className="h-[350px] md:h-[450px] xl:h-[500px]">
          <EarthCanvas />
        </div>

        {/* Social Media Links Bar */}
        <div className="flex justify-center items-center gap-8 p-4 bg-black-100 rounded-2xl border border-white/5 shadow-lg">
          
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/faran-ahmed-0ba60a360/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-[#0077B5] transition-all duration-300 scale-100 hover:scale-120">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .58 1 1.42v4.7zM6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.13H5V18.5z"/></svg>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com/faran.ahmed.swati" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-[#E1306C] transition-all duration-300 scale-100 hover:scale-120">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>

          {/* Facebook */}
          <a href="https://facebook.com/faran.ahmed.swati" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-[#1877F2] transition-all duration-300 scale-100 hover:scale-120">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/+923101555997" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-[#25D366] transition-all duration-300 scale-100 hover:scale-120">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457zm6.575-3.322l.393.233c1.524.905 3.392 1.383 5.297 1.384 5.568 0 10.105-4.534 10.108-10.107.002-2.699-1.047-5.234-2.956-7.145C17.466 3.132 14.935 2.081 12.24 2.08 6.671 2.08 2.13 6.62 2.128 12.19c-.001 1.905.498 3.766 1.446 5.394l.26.452-1.063 3.886zm12.516-6.842c-.303-.151-1.793-.883-2.074-.984-.281-.102-.485-.152-.689.151-.204.304-.792.984-.972 1.187-.18.203-.361.228-.664.077-3.111-1.558-4.14-2.228-5.787-5.06-.151-.26-.015-.4.122-.536.123-.122.303-.355.455-.533.151-.178.203-.304.304-.507.102-.203.051-.38-.025-.533-.076-.152-.689-1.66-.944-2.274-.249-.599-.503-.518-.689-.527-.179-.008-.383-.01-.587-.01s-.536.076-.816.38c-.28.304-1.071 1.046-1.071 2.553s1.097 2.96 1.25 3.163c.153.203 2.158 3.296 5.228 4.619.73.315 1.3.504 1.743.645.733.233 1.399.2 1.925.122.587-.088 1.793-.734 2.048-1.443.256-.709.256-1.317.18-1.442-.077-.127-.282-.228-.585-.379z"/></svg>
          </a>

        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");