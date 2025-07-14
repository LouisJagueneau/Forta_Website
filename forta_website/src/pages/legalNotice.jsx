function LegalNotice() {
    return (
        <div>
            <div className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50">
                <div className="flex flex-col">
                    {/* Company information */}
                    <div className="mb-20">
                        <h2 className="font-Stock_No_Bills text-[2.6rem] font-semibold relative inline-block mb-8">Company information <span className="absolute h-[2px] left-0 bottom-[-8px] bg-[#ec1c24] w-full rounded-full"></span></h2>
                        <div className="font-poppins text-[1.0rem] flex flex-col gap-2">
                            <p><span className="font-semibold">Company Name:{' '}</span>Forta ltd</p>
                            <p><span className="font-semibold">Registered office:{' '}</span>[ Insert full address ]</p>
                            <p><span className="font-semibold">Company registration number:{' '}</span>[Insert OIB or company ID]</p>
                            <p><span className="font-semibold">Court of registration:{' '}</span>[ Insert court of registration ]</p>
                            <p><span className="font-semibold">VAT number:{' '}</span>[Your VAT ID]</p>
                            <p><span className="font-semibold">Legal representative:{' '}</span>[Name of director or CEO]</p>
                        </div>
                    </div>
                    <div className="mb-20">
                        <h2 className="font-Stock_No_Bills text-[2.6rem] font-semibold relative inline-block mb-8">Hosting Provider <span className="absolute h-[2px] left-0 bottom-[-8px] bg-[#ec1c24] w-full rounded-full"></span></h2>
                        <div className="font-poppins text-[1.0rem] flex flex-col gap-2">
                            <p><span className="font-semibold">Publication manager:{' '}</span>[ Insert ]</p>
                            <p className="mb-6"><span className="font-semibold">Website Creator:{' '}</span>Louis Jagueneau{' '} <a href='https://www.louisjagueneau.com/' className="italic text-blue-500 hover:text-blue-600">(louisjagueneau.com)</a></p>
                            <p className="text-justify leading-7 mb-6"><span className="font-semibold">Intellectual property :<br/></span>All content on this website, including texts, images, graphics, logos, and design elements, is the intellectual property of Forta Ltd. or its partners, and may not be copied, modified, or reused without written permission.</p>
                            <p className="mb-6"><span className="font-semibold">Limitation of Liability : <br/></span>Forta Ltd. strives to keep all website content accurate and up to date, but cannot be held liable for any errors, omissions, or consequences arising from the use of this website.</p>
                            <p>For any questions regarding this legal notice or website usage, you can contact us at:</p>
                            <p><span className="font-semibold">Email:{' '}</span>[info@forta.hr]</p>
                            <p><span className="font-semibold">Phone:{' '}</span>[+385 xx xxx xxxx]</p>
                        </div>
                    </div>
                    
                    {/* Hosting Provider */}
                    <div>

                    </div>
                </div>
            
            
            </div>            
        </div>
    )
}

export default LegalNotice