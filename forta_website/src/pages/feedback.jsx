import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Feedback() {

    const { t } = useTranslation()

    const [rating, setRating] = useState(0)
    const [ hover, setHover] = useState(0)

    return (
        <div className="bg-[#0e171e] pb-20">
            <div className="z-10 flex pt-[100px] min-h-screen">
                <div className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50 ">
                    <div className="max-w-xl mx-auto bg-[#1c1f24] p-8 rounded-lg shadow-md text-white">
                        <h2 className="text-white font-poppins mb-6 text-3xl font-semibold">{t('feedback_form_title')}</h2>
                        <form action="/react/feedback.php" method="POST" className="space-y-8 placeholder-[#a9a9ab]">
                            <div className="">
                                <label className="block text-[#ededed] font-poppins text-sm font-medium mb-1">{t('feedback_form_name')}</label>
                                <input type="text" name="name" placeholder={t('feedback_form_name_placeholder')} className="w-full px-4 py-5  h-[48px] border border-white/10 focus:border-[#ec1c24]"></input>
                            </div>
                            <div>
                                <label className="block text-[#ededed] font-poppins text-sm font-medium mb-1">{t('feedback_form_rating')}</label>
                                <div className="flex items-center gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setRating(star)}
                                            onMouseEnter={() => setHover(star)}
                                            onMouseLeave={() => setHover(0)}
                                        >
                                            <FaStar
                                                size={28}
                                                className={`cursor-pointer transition-colors ${star <= (hover || rating) ? "text-[#ec1c24]" : "text-[#444]"
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                    <input type="hidden" name="rating" value={rating} />
                                </div>
                            </div>
                            <div className="">
                                <label className="block text-[#ededed] font-poppins text-sm font-medium mb-1">{t('feedback_form_message')}</label>
                                <textarea type="text" name="message" placeholder={t('feedback_form_placeholder')} className="w-full px-4 py-5  min-h-[125px] border border-white/10 focus:border-[#ec1c24]"></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-[#ec1c24] hover:bg-[#c91920] transition px-6 py-3 rounded text-white font-semibold"
                            >
                                {t('feedback_form_button')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;