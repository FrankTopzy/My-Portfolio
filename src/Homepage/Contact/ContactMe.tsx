import { useState, type KeyboardEvent } from 'react'
import Title from '../../components/Title'

function ContactMe() {
  const [message, setMessage] = useState<string>('');

  const handleChange = (text: string) => {
    setMessage(text)
  }

  const handleSubmit = (e: KeyboardEvent) => {
    e.preventDefault();
  }

  return (
    <div className="bg-black text-white flex min-h-[70vh] pt-[100px] pb-[40px] justify-center" id="contact">
      <section className='max-w-[900px] flex-1'>
        <Title title="Contact Me"/>

        <form action="" className='flex gap-3 flex-col'>
          <div className='flex flex-col gap-3'>
            <div className='flex justify-between'>
              <input type="text" placeholder='Enter Your First Name...' className='w-[49%] px-3 py-1.5 bg-amber-300' required/>
              <input type="text" placeholder='Enter Your Last Name...' className='px-3 py-1.5 w-[49%] bg-green-600' required/>
            </div>

            <div className='flex justify-between'>
              <input type="text" placeholder='Enter Your Mobile/Whatsapp Number....' className='w-[49%] px-3 py-1.5 bg-amber-200' required/>
              <input type="text" placeholder='Enter Your Email Address...' className='px-3 py-1.5 w-[49%] bg-amber-950' required/>
            </div>
          </div>

          <div className=''>
            <textarea name="" onChange={(e) => handleChange(e.target.value)} id="" placeholder='Your Message...' className='px-3 py-1.5 h-[300px] w-full bg-amber-500'></textarea>
          </div>

          <button className='bg-[var(--navbar-bg)] self-center px-7 py-2 rounded-xl'>Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default ContactMe
