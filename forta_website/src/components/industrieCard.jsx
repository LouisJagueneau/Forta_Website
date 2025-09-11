function IndustrieCard({title, description, Icon}) {
    return(
            <div className='bg-[#f7f7f7] p-5 rounded-lg border-gray-200 border-[1px] shadow-md'>
              <div className='flex justify-between items-center mb-5'>
                <div className='flex flex-col items-start'>
                  <p className='font-poppins font-semibold text-black'>{title}</p>
                  <span className="border-1 border-[#ec1c24] block rounded-full w-[100%]"></span>
                </div>
                <Icon className='text-[#ef1c24] text-[1.8rem]' />
              </div>
              <p className='text-[#777777] font-poppins text-[0.8rem] text-justify'>{description}</p>
            </div>
    )
}

export default IndustrieCard