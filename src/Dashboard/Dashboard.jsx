import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    const container1 = scrollRef1.current;
    const container2 = scrollRef2.current;

    const scroll = (container) => {
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      const scrollFunc = () => {
        if (container.scrollTop + clientHeight >= scrollHeight) {
          container.scrollTop = 0;
        } else {
          container.scrollTop += 1;
        }
      };

      const interval = setInterval(scrollFunc, 50); 

      return () => {
        clearInterval(interval);
      };
    };

    
    const clearScroll1 = scroll(container1);
  
    const clearScroll2 = scroll(container2);

    return () => {
      clearScroll1();
      clearScroll2();
    };
  }, []);

  return (
    <div className='mb-9 m-5 scrollbar-hide'>
      <nav className='border flex rounded-xl shadow-black/50 shadow-lg p-1'>
        <a className='flex focus:shadow-sm ml-3' href='https://www.ritrjpm.ac.in/'>
          <img src="/ramcologo.jpg" alt="" className='h-9' />
          <span className='font-semibold mt-1 ml-2 text-xl'>RIT</span>
        </a>
        <h1 className='font-semibold mt-1 lg:ml-[490px] text-xl   md:ml-[550px]'>Co-Curricular</h1>
       <button className='mt-1 p-1 rounded-lg bg-slate-400 font-bold px-2 border  lg:ml-[450px] md:ml-[300px] '> <Link to='/Login'>login</Link></button>
        <Link to='/Signup'><button className='mt-1 p-1 rounded-lg text-white bg-violet-950 ml-[10px]  '>Sign Up</button></Link>
      </nav>

      <div className='flex mt-7'>
        <div className='w-1/2 '>
          <span className='flex justify-center font-serif font-extralight'>Upcoming Events</span>
          <div className='border shadow-lg shadow-black/25 rounded-lg p-5   h-[330px] m-4 overflow-auto scrollbar-hide' ref={scrollRef1}>
           
            <div className='p-5 border border-purple-400 h-[250px]'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque atque esse adipisci,
                quaerat iusto obcaecati illo cum temporibus aliquam ex assumenda omnis ab ipsam sint veritatis?
                Distinctio, consectetur quos.
              </span>
            </div>
            <div className='p-5 border border-purple-400 h-[250px]'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque atque esse adipisci,
                quaerat iusto obcaecati illo cum temporibus aliquam ex assumenda omnis ab ipsam sint veritatis?
                Distinctio, consectetur quos.
              </span>
            </div>
            <div className='p-5 border border-purple-400 h-[250px]'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque atque esse adipisci,
                quaerat iusto obcaecati illo cum temporibus aliquam ex assumenda omnis ab ipsam sint veritatis?
                Distinctio, consectetur quos.
              </span>
            </div>
          </div>
          <div className='border shadow-lg shadow-black/25 rounded-lg p-5 mx-3 mt-6'>
            Content 2
          </div>
          <div className='border shadow-lg shadow-black/25 rounded-lg p-5 m-5'>
            Content 5
          </div>
        </div>

        <div className='w-1/2'>
          <span className='flex justify-center font-serif font-extralight'>Events Reports</span>
          <div className='border shadow-inner shadow-black/25 rounded-lg p-5 h-[430px] m-3 overflow-auto scrollbar-hide' ref={scrollRef2}>
           
            <div className='p-5 border border-purple-400 h-[250px]'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque atque esse adipisci,
                quaerat iusto obcaecati illo cum temporibus aliquam ex assumenda omnis ab ipsam sint veritatis?
                Distinctio, consectetur quos.
              </span>
            </div>
            <div className='p-5 border border-purple-400 h-[250px]'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque atque esse adipisci,
                quaerat iusto obcaecati illo cum temporibus aliquam ex assumenda omnis ab ipsam sint veritatis?
                Distinctio, consectetur quos.
              </span>
            </div>
            <div className='p-5 border border-purple-400 h-[250px]'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque atque esse adipisci,
                quaerat iusto obcaecati illo cum temporibus aliquam ex assumenda omnis ab ipsam sint veritatis?
                Distinctio, consectetur quos.
              </span>
            </div>
          </div>
          <div className='border shadow-lg shadow-black/25 rounded-lg p-5 m-2'>
            Content 4
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
