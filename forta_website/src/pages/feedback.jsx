function Feedback() {
    return (
        <div className="bg-[#0e171e] pb-20">
            <div className="z-10 flex pt-[100px] min-h-screen">
                <div className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50 ">
                    <div className="bg-[#1d262d] px-10 py-6">
                        <h2 className="text-white font-light font-poppins text-[2.0rem] lg:text-[2.4rem] xl:text-[2.8rem] mb-8">Feedback</h2>
                        <form action="/react/feedback.php" method="POST">
                            <div>
                                <label className="text-white">Name:</label>
                                <input type="text"></input>
                            </div>
                            <div>
                                <label className="text-white">Rate your experience:</label>
                                <div className="rating">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ec1c24]" aria-label="1 star" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ec1c24]" aria-label="2 star" defaultChecked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ec1c24]" aria-label="3 star" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ec1c24]" aria-label="4 star" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#ec1c24]" aria-label="5 star" />
                                </div>
                            </div>
                             <div>
                                <label>Your feedback:</label>
                                <input type="text"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;