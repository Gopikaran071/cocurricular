import React, { useState } from 'react';


const Form = () => {
  const [selectedForum, setSelectedForum] = useState('');
  const [i, setI] = useState([]);

  const handleChange = (event) => {
    const selectedForum = event.target.value;
    setSelectedForum(selectedForum);

    switch (selectedForum) {
      case 'Technebiz':
        setI(['President', 'Faculty Advisor', 'Secretary', 'Joint Secretary', 'Treasurer', 'Joint-Treasurer', 'Magazine Preparation', 'Poster Designer', 'Event Organizer', 'Social Media Activities']);
        break;
      case 'CSI':
        setI(['President', 'Faculty Advisor', 'Secretary', 'Joint Secretary', 'Treasurer', 'Joint-Treasurer', 'Magazine Preparation', 'Poster Designer', 'Event Organizer', 'Social Media Activities']);
        break;
      case 'ACM':
        setI(['Chairman', 'Vice Chairman', 'Joint Secretary', 'Treasurer', 'Joint-Treasurer', 'Magazine Preparation', 'Poster Designer', 'Event Organizer', 'Social Media Activities']);
        break;
      case 'IECI':
        setI(['Chairman', 'Vice Chairman', 'Joint Secretary', 'Treasurer', 'Joint-Treasurer', 'Magazine Preparation', 'Poster Designer', 'Event Organizer', 'Social Media Activities']);
        break;
      default:
        roles = [];

    }
  };

  return (
    <form action="">
      <div className='border m-5 p-3 mx-[250px] rounded-lg shadow-2xl'>
        {/* header */}
        <div className='p-3 flex justify-center items-center mx-[150px] rounded-sm '>
          <div>
            <img src='/ramco.jpg' alt="ramco" className='h-20 border' />
            <h1></h1>
            <h1 className='text-lg font-bold mt-3 flex justify-center'>
              New Officers Bearers  Registration
            </h1>
          </div>
        </div>

        {/* below heading */}
        <div className='flex '>
          <div className='w-1/2 '>
            <div className='mt-[60px] '>
              <label className='relative '>
                <span className='ml-[200px]'>Choose Forum  </span>
                <br />
                <>
                  {i.map((value, index) => (
                    <React.Fragment key={index}>
                      <div className='mt-[31px]'>
                        <label htmlFor={`${selectedForum}-${value}`} className='ml-[200px] '>{value}</label>
                      </div>
                    </React.Fragment>
                  ))}
                </>
              </label>
            </div>
          </div>

          <div className='w-1/2 '>
            <div className=' ' id='labels'>
              <input
                list='forum'
                className='ml-[175px] h-[35px] mt-[55px] bg-zinc-100 py-1 shadow-inner rounded-md'
                placeholder=''
                onChange={handleChange}
              />
              <datalist id="forum">
                <option value="Technebiz" id="Technebiz" />
                <option value="CSI" id="CSI" />
                <option value="IECI" id="IECI" />
                <option value="ACM" id='ACM' />
              </datalist>

              {i.map((value, index) => (
                <div key={index} className='mt-[25px]'>
                  <input type="text" id={`${selectedForum}-${value}`} required className=' ml-[175px] h-[30px] bg-zinc-100  shadow-inner rounded-md' placeholder={value} />
                </div>
              ))}
              <datalist id="Technebiz-President">
                <option value="Technebiz" id="Technebiz" />
                <option value="CSI" id="CSI" />
                <option value="IECI" id="IECI" />
                <option value="ACM" id='ACM' />
              </datalist>
            </div>
          </div>
        </div>

        {/* signature */}
        <div className='mt-6'></div>
      </div>
    </form>
  );
};

export default Form;
