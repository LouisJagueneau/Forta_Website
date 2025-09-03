function IndustrieCard({title, description, Icon}) {
    return(
            <div className='bg-[#272f35] p-5 rounded-lg border-[#ffffff3b] border-[1px]'>
              <div className='flex justify-between items-center mb-5'>
                <div className='flex flex-col items-start'>
                  <p className='font-poppins font-semibold text-white'>{title}</p>
                  <span className="border-1 border-[#ec1c24] block rounded-full w-[100%]"></span>
                </div>
                <Icon className='text-[#ef1c24] text-[1.8rem]' />
              </div>
              <p className='text-[#B9B9B9] font-poppins text-[0.8rem] text-justify'>{description}</p>
            </div>
    )
}

export default IndustrieCard