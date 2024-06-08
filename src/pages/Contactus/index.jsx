import{ useState } from 'react';
import { faqs } from '../../assets/FAQS';

function Contactus() {
  // State to track the active FAQ item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active FAQ item
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }; 

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8 relative" style={{ backgroundImage: `url('/images/contactBackground.png')`, height: "400px", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className='py-[120px]'>
        <h1 className="text-3xl font-bold text-black relative z-10">Contact Us</h1>
        <p className="text-lg text-gray-700 relative z-10">We'd love to hear from you!</p>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {/* FAQ items */}
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                {/* Render '+' or '-' button based on active state */}
                <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {/* Render answer only if activeIndex matches current index */}
              {activeIndex === index && (
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <div className="md:w-1/2">
          <form className="w-full max-w-lg p-[50px]">
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                  Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="John Doe" />
              </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                  Email
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="example@example.com" />
              </div>
            </div>
            <div className="w-full">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                Message
              </label>
              <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" rows="6" placeholder="Your message"></textarea>
            </div>
            <div className="w-full">
              <button className="bg-gray-900 hover:bg-black text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 text-center">
          <img src="/images/contactPage01.png" alt="Contact Us" className="mx-auto rounded-[0px] shadow-md h-[430px]" />
        </div>
      </div>
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 mb-4">For further assistance, you can also reach out to us through phone or email.</p>
        <p className="text-gray-700"><strong>Phone:</strong> [Your Phone Number]</p>
        <p className="text-gray-700"><strong>Email:</strong> [Your Email Address]</p>
        <p className="text-gray-700"><strong>Location:</strong> [Your Address]</p>
      </div>
    </div>
  );
}


export default Contactus;
