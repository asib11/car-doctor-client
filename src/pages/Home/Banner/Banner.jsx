import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full rounded-xl h-[600px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full " />
                <div className="absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                    <div className='text-white space-y-7 pl-24 w-1/3'>
                        <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn rounded-none w-36 bg-[#FF3811] border-none mr-3 text-white'>discover more</button>
                            <button className='btn rounded-none w-36 btn-outline text-white'>latest price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-4 opacity-[0.6]">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                    <div className='text-white space-y-7 pl-24 w-1/3'>
                        <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn rounded-none w-36 bg-[#FF3811] border-none mr-3 text-white'>discover more</button>
                            <button className='btn rounded-none w-36 btn-outline text-white'>latest price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-2 opacity-[0.6]">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                    <div className='text-white space-y-7 pl-24 w-1/3'>
                        <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn rounded-none w-36 bg-[#FF3811] border-none mr-3 text-white'>discover more</button>
                            <button className='btn rounded-none w-36 btn-outline text-white'>latest price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-2 opacity-[0.6]">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                    <div className='text-white space-y-7 pl-24 w-1/3'>
                        <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn rounded-none w-36 bg-[#FF3811] border-none mr-3 text-white'>discover more</button>
                            <button className='btn rounded-none w-36 btn-outline text-white'>latest price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-2 opacity-[0.6]">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div className="absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                    <div className='text-white space-y-7 pl-24 w-1/3'>
                        <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn rounded-none w-36 bg-[#FF3811] border-none mr-3 text-white'>discover more</button>
                            <button className='btn rounded-none w-36 btn-outline text-white'>latest price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-2 opacity-[0.6]">❮</a>
                    <a href="#slide6" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full" />
                <div className="absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                    <div className='text-white space-y-7 pl-24 w-1/3'>
                        <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn rounded-none w-36 bg-[#FF3811] border-none mr-3 text-white'>discover more</button>
                            <button className='btn rounded-none w-36 btn-outline text-white'>latest price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-2 opacity-[0.6]">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;