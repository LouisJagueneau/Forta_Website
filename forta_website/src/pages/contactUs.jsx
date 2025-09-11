import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function ContactUs() {

    const contacts = [
        {
            icon: <FaPhoneAlt />,
            name: 'phone',
            value: '+385 98 679 664',
        },
        {
            icon: <FaLocationDot />,
            name: 'address',
            value: 'Dubrova 105, 52220 Labin, Croatia',
        },
        {
            icon: <IoIosMail />,
            name: 'email',
            value: 'info@forta.hr',
        }
    ]

    return (
        <div>
            <div className='bg-[#0e171e] pb-20'>
                <div className="z-10 flex pt-[100px] min-h-screen justify-center">
                    <div className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50 ">
                        <div className="flex flex-col-reverse gap-10 
                                        lg:flex-row">
                            <section className="
                             lg:w-1/2">
                                <div className=" bg-[#1d262d] px-10 py-6 rounded-sm">
                                    <h2 className="text-white font-light font-poppins text-[2.0rem] lg:text-[2.4rem] xl:text-[2.8rem] mb-8">Contact us</h2>
                                    <form method='POST' action="/react/contact.php" className="text-white placeholder-[#a9a9ab] font-poppins font-light flex flex-col gap-y-5">
                                        <input type="text" name="name" placeholder="Name" className="px-4 py-5  h-[48px] border border-white/10 focus:border-[#ec1c24] outline-none" />
                                        <input type="email" name="email" placeholder="Email" className="px-4 py-5  h-[48px] border border-white/10 focus:border-[#ec1c24] outline-none" />
                                        <input type="text" name="subject" placeholder="Subject" className="px-4 py-5  h-[48px] border border-white/10 focus:border-[#ec1c24] outline-none" />
                                        <textarea name="message" id="" placeholder="Type your message here ..." className="px-4 py-5  min-h-[150px] border border-white/10 focus:border-[#ec1c24] outline-none"></textarea>
                                        <input type="submit" value='Send' className="bg-[#ec1c24] rounded-sm py-2" />
                                    </form>
                                </div>
                            </section>
                            <section className=" lg:w-1/2 lg:flex lg:items-center lg:justify-center">
                                <div>
                                    {contacts.map((contact) => (
                                        <div key={contact.name} className="flex items-stretch gap-5 mb-8 lg:mb-16">
                                            <div className="text-[#ec1c24] bg-[#1d262d] p-4 rounded-sm">
                                                <span className="text-[28px]">{contact.icon}</span>
                                            </div>
                                            <div className="font-poppins flex flex-col justify-center">
                                                <span className="text-white/60 capitalize">{contact.name}</span>
                                                <p className="text-white/90 text-[1.1rem]">{contact.value}</p>
                                            </div>
                                        </div>
                                    ))

                                    }
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactUs