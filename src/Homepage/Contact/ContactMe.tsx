import Title from '../../components/Title'

function ContactMe() {
  return (
    <div className="bg-black text-white flex justify-center min-h-[70vh] pt-[100px] pb-[40px]" id="contact">
      <section className='max-w-[1350px] bg-yellow-600'>
        <Title title="Contact Me"/>

        <form action="" className='flex flex-col gap-3 bg-red-500'>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-3 flex-1'>
              <input type="text" placeholder='Enter Your First Name...' className='px-3 py-1.5 bg-amber-300'/>
              <input type="text" placeholder='Enter Your Last Name...' className='px-3 py-1.5 flex-1 bg-green-600'/>
            </div>

            <div className='flex gap-3'>
              <input type="text" placeholder='Enter Your Mobile/Whatsapp Number....' className='px-3 py-1.5 bg-amber-200'/>
              <input type="text" placeholder='Enter Your Email Address...' className='px-3 py-1.5 bg-amber-950'/>
            </div>
          </div>

          <div className='flex w-full'>
            <input type="text" placeholder='Your Message...' className='px-3 py-1.5 w-full bg-amber-500'/>
          </div>
        </form>
      </section>
    </div>
  )
}

export default ContactMe
