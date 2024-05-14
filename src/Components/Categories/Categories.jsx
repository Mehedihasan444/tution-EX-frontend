import UI from '../../assets/categories/UI.svg'
import data from '../../assets/categories/data.svg'
import finance from '../../assets/categories/finance.svg'
import graphic from '../../assets/categories/graphic.svg'
import development from '../../assets/categories/development.svg'
import ice from '../../assets/categories/ice.svg'
import sales from '../../assets/categories/sales.svg'
import photography from '../../assets/categories/photography.svg'
const Categories=()=>{
    return(
        <section className='mt-10 space-y-3'>
            <h1 className='text-6xl font-bold text-center'>Our Featured Categories</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a cupiditate <br /> excepturi eos deserunt id natus fuga odio qui aut.</p>
            <div className="grid grid-cols-4 mx-auto bg-[#F7F5FA] p-16 gap-5">

                <div className='bg-white p-7 flex flex-col justify-center items-center rounded-lg cursor-pointer hover:scale-105'>
                    <div className='p-5 rounded-full bg-[#FFF0EE] py-6'><img src={UI} alt="" /></div>
                    <h1 className='text-2xl font-bold'>UX/UI Design</h1>
                    <p className='font-bold'>12 Course</p>
                </div>
                <div className='bg-white p-7 flex flex-col justify-center items-center rounded-lg cursor-pointer hover:scale-105'>
                    <div className='p-5 rounded-full bg-[#FFF0EE] py-6'><img src={development} alt="" /></div>
                    <h1 className='text-2xl font-bold'>Development</h1>
                    <p className='font-bold'>12 Course</p>
                </div>
                <div className='bg-white p-7 flex flex-col justify-center items-center rounded-lg cursor-pointer hover:scale-105'>
                    <div className='p-5 rounded-full bg-[#FFF0EE] py-6'><img src={data} alt="" /></div>
                    <h1 className='text-2xl font-bold'>Data Science</h1>
                    <p className='font-bold'>12 Course</p>
                </div>
                <div className='bg-white p-7 flex flex-col justify-center items-center rounded-lg cursor-pointer hover:scale-105'>
                    <div className='p-5 rounded-full bg-[#FFF0EE] py-6'><img src={photography} alt="" /></div>
                    <h1 className='text-2xl font-bold'>Photography</h1>
                    <p className='font-bold'>11 Course</p>
                </div>
                <div className='bg-white p-7 flex flex-col justify-center items-center rounded-lg cursor-pointer hover:scale-105'>
                    <div className='p-5 rounded-full bg-[#FFF0EE] py-6'><img src={ice} alt="" /></div>
                    <h1 className='text-2xl font-bold'>Information Tech</h1>
                    <p className='font-bold'>2 Course</p>
                </div>
                <div className='bg-white p-7 flex flex-col justify-center items-center rounded-lg cursor-pointer hover:scale-105'>
                    <div className='p-5 rounded-full bg-[#FFF0EE] py-6'><img src={graphic} alt="" /></div>
                    <h1 className='text-2xl font-bold'>Graphic Design</h1>
                    <p className='font-bold'>8 Course</p>
                </div>
                <div className='bg-white p-7 flex flex-col justify-center items-center rounded-lg cursor-pointer hover:scale-105'>
                    <div className='p-5 rounded-full bg-[#FFF0EE] py-6'><img src={sales} alt="" /></div>
                    <h1 className='text-2xl font-bold'>Sales & marketing</h1>
                    <p className='font-bold'>12 Course</p>
                </div>
                <div className='bg-white p-7 flex flex-col justify-center items-center rounded-lg cursor-pointer hover:scale-105'>
                    <div className='p-5 rounded-full bg-[#FFF0EE] py-6'><img src={finance} alt="" /></div>
                    <h1 className='text-2xl font-bold'>Finance</h1>
                    <p className='font-bold'>6 Course</p>
                </div>
            </div>
        </section>
    );
};
export default Categories