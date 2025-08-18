import BlackButton from "../../components/BlackButton"

const GetStarted = () => {
  return (
   <div className="bg-white">
    <div className='w-full max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px] py-20 flex items-center justify-center'>
      <div className="bg-secondary rounded-xl shadow-lg w-full overflow-hidden transition-all hover:shadow-xl">
        <div className="flex flex-col items-center text-center px-6 py-10 md:py-12 text-black">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
           Ready to Get Started?
          </h2>
          
          <p className="text-sm md:text-base lg:text-lg max-w-3xl text-black mb-8">
            If you want to keep your car running great or boost your garage business, we’ve got your back—fast, easy, and all in one spot!
          </p>
          
          <div className="flex items-center relative">
            <BlackButton wFull={true} text="Get Started" />
            <div className="hidden md:block absolute -right-36 md:-right-36">
                <svg width="100" height="44" viewBox="0 0 121 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.37092 32.6404C4.63 33.461 7.7485 35.9942 10.3402 38.2476C17.1906
     44.2552 19.4825 45.22 20.7432 42.6707C21.3815 41.3412 19.7754 38.7183 16.607 35.8299C15.8353 35.1418 15.148 34.4311 15.1217 
     34.3328C15.0954 34.2346 18.0909 34.9581 21.7397 35.9276C33.6189 39.1125 44.4265 40.3208 55.6566 39.731C62.3915 39.3991 76.1105 35.6147 82.8125 32.2906C94.5668 26.4007 
     103.521 19.8403 113.941 9.30633C118.995 4.21306 121.022 1.82667 120.977 1.15416C120.88 0.285157 120.656 0.29257 119.318 0.862191C118.429 1.25831 115.535 3.61393 112.849 
     6.07168C101.936 15.9479 89.1533 23.9038 75.3071 29.407C63.2925 34.1558 51.5034 35.5272 36.4775 33.9233C31.3661 33.3987 20.5089 30.9928 17.9404 29.8388C16.8709 29.3886 16.8999 
     29.3282 18.5261 28.3129C21.0853 26.7316 21.8052 25.5382 21.358 23.868C20.5558 20.8716 15.526 20.483 7.50959 22.9487C2.86892 24.3511 2.0651 24.7246 1.24774 25.8915C0.572735
      26.9149 0.432702 27.7422 0.729763 29.1894C1.05042 30.8934 1.39274 31.3281 3.37092 32.6404Z" fill="black"/>
    </svg>

            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
