import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import { toast } from 'react-toastify';
function ContactUs() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contacts = [
    {
      icon: <FaPhoneAlt />,
      name: 'phone',
      label: t('contactPage.contacts.phone.label'),
      value: t('contactPage.contacts.phone.value')
    },
    {
      icon: <FaLocationDot />,
      name: 'address',
      label: t('contactPage.contacts.address.label'),
      value: t('contactPage.contacts.address.value')
    },
    {
      icon: <IoIosMail />,
      name: 'email',
      label: t('contactPage.contacts.email.label'),
      value: t('contactPage.contacts.email.value')
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("contact.php", {
        method: "POST",
        body: new URLSearchParams(formData),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent!")
        setFormData({ name: "", email: "", subject: "", message: "" }); // reset form
      } else {
        toast.error("A error occcured! Please retry later.")
      }
    } catch (err) {
      toast.error("The server is not accessible! Retry Later")
    }
  };

  return (
    <div>
      <div className='bg-white'>
        <div className="z-10 flex py-[120px] min-h-screen justify-center">
          <div className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50 ">
            <div className="flex flex-col-reverse gap-10 lg:flex-row">

              {/* FORMULAIRE */}
              <section className="lg:w-3/5">
                <div className=" bg-[#f7f7f7] px-10 py-6 rounded-sm">
                  <h2 className="text-black font-light font-poppins text-[2.0rem] lg:text-[2.4rem] xl:text-[2.8rem] mb-8">
                    {t('contactPage.heroTitle')}
                  </h2>

                  <form onSubmit={handleSubmit} className="text-black placeholder-black/20 font-poppins font-light flex flex-col gap-y-5">
                    <input
                      type="text"
                      name="name"
                      placeholder={t('contactPage.form.namePlaceholder')}
                      value={formData.name}
                      onChange={handleChange}
                      className="px-4 py-5 h-[48px] border border-black/10 focus:border-[#ec1c24] outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder={t('contactPage.form.emailPlaceholder')}
                      value={formData.email}
                      onChange={handleChange}
                      className="px-4 py-5 h-[48px] border border-black/10 focus:border-[#ec1c24] outline-none"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder={t('contactPage.form.subjectPlaceholder')}
                      value={formData.subject}
                      onChange={handleChange}
                      className="px-4 py-5 h-[48px] border border-black/10 focus:border-[#ec1c24] outline-none"
                    />
                    <textarea
                      name="message"
                      placeholder={t('contactPage.form.messagePlaceholder')}
                      value={formData.message}
                      onChange={handleChange}
                      className="px-4 py-5 min-h-[150px] border border-black/10 focus:border-[#ec1c24] outline-none">
                    </textarea>
                    <input
                      type="submit"
                      value={t('contactPage.form.submitButton')}
                      className="bg-[#ec1c24] text-white font-medium rounded-sm py-2"
                    />
                  </form>
                </div>
              </section>

              {/* INFOS DE CONTACT */}
              <section className=" lg:w-2/5 lg:flex lg:items-center lg:justify-center">
                <div>
                  {contacts.map((contact) => (
                    <div key={contact.name} className="flex items-stretch gap-5 mb-8 lg:mb-16">
                      <div className="text-[#ec1c24] bg-[#f7f7f7] p-4 rounded-sm">
                        <span className="text-[28px]">{contact.icon}</span>
                      </div>
                      <div className="font-poppins flex flex-col justify-center">
                        <span className="text-black/60 capitalize">{contact.label}</span>
                        <p className="text-black/90 text-[1.1rem]">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
