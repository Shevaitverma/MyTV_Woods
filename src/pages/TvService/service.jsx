import { Link } from 'react-router-dom';

function Service() {
  return (
    <div>
      <header className="bg-gray-900 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="text-white">
            <a href="tel:+1-848-224-7025" className="telephone">Call Us: +1-848-224-7025</a>
          </div>
        </div>
      </header>
      
      <section id="contactusmain" className="py-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Register your compatible TV or devices</h2>
              <p className="text-lg mb-4">Enter the code shown on your TV or device to register it with your Prime account</p>
              <div>
                <label className="block text-lg font-medium text-gray-700">Registration code:</label>
                <input type="text" name="code" placeholder="e.g. HQ2W4Z" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3"/>
                <Link to="/confirmation" className="mt-4 inline-block bg-gray-800 text-white py-2 px-4 rounded-md">Register Device</Link>
              </div>
            </div>
            <img src="/images/tvLogo.png" alt="Logo" className="h-74 w-96 mt-4 md:mt-0" />
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Where's my registration code?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Step 1</h3>
              <p>Open the Prime Video app on your TV or device.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Step 2</h3>
              <p>Select "Register on the Prime website".</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Step 3</h3>
              <p>Your registration code appears on the left of the screen.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-10">
        <div className="container mx-auto">
          
          <div className="mb-6">
            <h5 className="text-2xl font-bold mb-2">Where Can I enter Amazon MYTV code?</h5>
            <p>You are going to receive an amazon code, see Amazon.com/mytv and then type amazon activation code in your smartphone or laptop. Now, enter the code and then Click the input alternative. You'll get a notification on your own TV.</p>
          </div>
          <img src="images/How_to_connect.png" alt="How to Connect Amazon Prime to TV" className="w-full mb-6 rounded-lg shadow-md" />
          <div className="mb-6">
            <h5 className="text-2xl font-bold mb-2">How Can I activate Amazon Prime in my TV?</h5>
            <p>Android Telephone or Tablet: Proceed into the Google Play programme shop in your device and obtain the Amazon Prime Video programme. Open the Amazon Prime Video programme and join with your Amazon Prime or even Prime Video account. Select a film or TV Display and begin streaming straight in.</p>
          </div>
          <div className="mb-6">
            <h5 className="text-2xl font-bold mb-2">Why can not I buy Amazon Prime movie in my TV?</h5>
            <p>In case your Prime Video application is not performing, begin with making certain that your account is still current, next check to produce sure you are on the world wide web. Consider employing Prime Video on a different device, and if it works there, then reboot into the very first equipment.</p>
            <p>How do I set up a brand new equipment on Amazon audio? Visit Your Amazon Music Preferences to Control equipment approved to your accounts. You'll have up to 10 apparatus approved to your accounts. Each device can be added to an account at the same time. Any device that receives audio has to be enabled.</p>
          </div>
          <div className="mb-6">
            <h5 className="text-2xl font-bold mb-2">How do I use Amazon Prime to connect my phone to my TV?</h5>
            <p>Turn on the television. Open the Prime Video application on your Android smartphone, iPhone, iPad, iPod Touch, or Fire tablet. Select the Cast icon. Select the device you'd like to work with. Choose a name that you'd want to keep an eye on.</p>
          </div>
          <div className="mb-6">
            <h5 className="text-2xl font-bold mb-2">How Do I Get Prime Video to Play on My TV?</h5>
            <p>Using amazon.com/mytv, you can sign up for Amazon Prime Video. If you'd like to sign up for Amazon Prime Video, simply follow these steps: To begin, go to amazon.com/mytv on your own device's internet browser. You can also download the Amazon Prime movie programme as an alternative. Currently, select the option "Create an Amazon account." Follow the instructions on the page to create a new Amazon Prime account. There, you may sort your title, email, and passcode. Re-enter the password in the field where it was requested. There, you can choose how you want to create your account. After you've created your account, go ahead and choose your login options.</p>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <p>Disclaimer: We are not affiliated with Amazon or any service providers in any way. All rights belong to their respective owners. We are independent third party support providers and we have no affiliation with Amazon or any Service providers.</p>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>©2023 Amazon Subscription. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Service;
