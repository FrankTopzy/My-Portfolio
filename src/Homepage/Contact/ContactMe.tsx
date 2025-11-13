import { useState, useEffect } from 'react'
import Title from '../../components/Title'
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

function ContactMe() {
  const [message, setMessage] = useState<string>('');

  const handleChange = (text: string) => {
    setMessage(text)
  }

  /*useEffect(() => {
    console.log(message);
  }, [message]);*/

  const {register, reset, handleSubmit} = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState('');

  const accessKey = "74fbda5c-ec04-4c4c-954a-029a2d682f90";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Portfolio Website",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div className="bg-black text-white flex min-h-[70vh] pt-[100px] pb-[40px] justify-center" id="contact">
      <section className='max-w-[900px] flex-1'>
        <Title title="Contact Me"/>

        <form onSubmit={handleSubmit(onSubmit)} className='flex gap-3 flex-col'>
          <input type="hidden" name="access_key" value="74fbda5c-ec04-4c4c-954a-029a2d682f90"></input>
          <div className='flex flex-col gap-3'>
            <div className='flex justify-between'>
              <input type="text" {...register("first_name", { required: true })} placeholder='Enter Your First Name...' className='w-[49%] px-3 py-1.5 bg-amber-300' required/>
              <input type="text" {...register("last_name", { required: true })} placeholder='Enter Your Last Name...' className='px-3 py-1.5 w-[49%] bg-green-600' required/>
            </div>

            <div className='flex justify-between'>
              <input type="text" {...register("number", { required: true })} placeholder='Enter Your Mobile/Whatsapp Number....' className='w-[49%] px-3 py-1.5 bg-amber-200' required/>
              <input type="email" {...register("email", { required: true })} placeholder='Enter Your Email Address...' className='px-3 py-1.5 w-[49%] bg-amber-950' required/>
            </div>
          </div>

          <div className=''>
            <textarea value={message} {...register("message", { required: true })} onChange={(e) => handleChange(e.target.value)} id="" placeholder='Your Message...' className='px-3 py-1.5 h-[300px] w-full bg-amber-500'></textarea>
          </div>

          <button className='bg-[var(--navbar-bg)] self-center px-7 py-2 rounded-xl'>Send Message</button>

          <div>{result}</div>
        </form>
      </section>
    </div>
  )
}

export default ContactMe
