import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";

function FeedbackCard({ name, rating, message }) {
  const { t } = useTranslation();

  const words = (message ?? "").split(" ");
  const shortMessage = words.slice(0, 30).join(" ");
  const isLong = words.length > 30;

  const [showPopUp, setShowPopUp] = useState(false);

  const popup = (
    <div
      onClick={() => setShowPopUp(false)}
      className="fixed inset-0 z-[9999] backdrop-blur-xl bg-black/60 flex items-center justify-center"
    >
      <IoClose
        onClick={() => setShowPopUp(false)}
        className="absolute top-0 right-0 text-[#ef1c24] text-[2.0rem] m-5 cursor-pointer"
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className="border-black/10 bg-white border shadow-sm px-8 py-6 rounded-lg w-[500px] relative"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-black/75 font-poppins font-semibold">{name}</p>
            <span className="flex gap-1 text-[#ef1c24] mt-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <FaStar
                  key={i}
                  className={` ${i <= rating ? "text-[#ef1c24]" : "text-[#444]"}`}
                />
              ))}
            </span>
          </div>
          <div className="text-3xl text-black/35">
            <FaQuoteRight />
          </div>
        </div>
        <div className="mt-6">
          <p className="text-justify text-[0.9rem] text-black/75">{message}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="border-black/10 border shadow-sm px-8 py-6 rounded-lg w-[500px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-black/75 font-poppins font-semibold">{name}</p>
            <span className="flex gap-1 text-[#ef1c24] mt-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <FaStar
                  key={i}
                  className={` ${i <= rating ? "text-[#ef1c24]" : "text-[#444]"}`}
                />
              ))}
            </span>
          </div>
          <div className="text-3xl text-black/35">
            <FaQuoteRight />
          </div>
        </div>
        <div className="mt-6">
          <p className="text-justify text-[0.9rem] text-black/75">
            {isLong ? `${shortMessage}...` : message}
          </p>
          {isLong && (
            <button
              onClick={() => setShowPopUp(true)}
              className="underline text-[0.9rem] font-poppins text-black/50"
            >
              {t("feedback_see_more_button")}
            </button>
          )}
        </div>
      </div>

      {/* Modal en portal */}
      {showPopUp && createPortal(popup, document.body)}
    </div>
  );
}

export default FeedbackCard;
