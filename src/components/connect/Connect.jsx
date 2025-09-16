import { useState } from "react";

function SocialAccount({ color, logoName, url }) {
  return (
    <>
      <a href={url} target="_blank">
        <i className={`si ${logoName} ${color} text-3xl`}></i>
      </a>
    </>
  );
}

function Connect() {
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    message: ''
  });

  const [isGmail, setIsGmail] = useState(true);

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setInputs(prev => {
      const updated = { ...prev, [name]: value };

      const regex = /^[^@\s]+@gmail\.com$/;
      setIsGmail(regex.test(updated.email));

      return updated;
    });
  };


  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      service_id: 'service_egp0uji',
      template_id: 'template_lll8134',
      user_id: 'ik1tEy-qItPBPvpj6',
      template_params: inputs
    }

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setInputs({ email: '', name: '', message: '' });
        console.log("Email sent");
      }

      else
        console.log("Email not sent");

    } catch (error) {
      console.log("error occurs while sending email");
    }
  }

  return (
    <>
      <div className=" bg-white rounded-lg p-10 lg:overflow-hidden">
        <h1 className="text-[25px] font-bold">Connect with me.</h1>
        <p className="text-[13px]">
          Want to talk about projects? programming stuff, or maybe even collaboration?
          Feel free to message me anytime!</p>

        <div className="flex gap-3 mt-5">
          <SocialAccount url='https://www.facebook.com/Gigets9282'
            logoName='si-facebook'
            color='text-blue-500' />
          <SocialAccount url='https://github.com/Austine0829'
            logoName='si-github'
            color='text-black' />
          <SocialAccount url='https://www.last.fm/user/austine0829'
            logoName='si-lastdotfm'
            color='text-red-500' />
        </div>

        <div className="border my-5"></div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[18px] font-bold">Send a message.</h2>

          <div className="relative">
            {
              !isGmail &&
              inputs.email.length != 0 &&
              <span className="absolute text-[10px] left-2 top-1">Invalid gmail</span>
            }

            <input className={`text-[13px] h-12 w-full p-2 bg-gray-200 rounded-lg ${!isGmail && inputs.email.length != 0 && 'pt-4 bg-red-100'}`}
              style={{ outline: 'none' }}
              placeholder="Email"
              value={inputs.email}
              name="email"
              onChange={inputHandler} />
          </div>

          <div className="relative">
            {
              inputs.name.length <= 5 &&
              inputs.name.length > 0 &&
              <span className="absolute text-[10px] left-2 top-1">Minimun character is 6</span>
            }

            <input className={`text-[13px] h-12 w-full p-2 bg-gray-200 rounded-lg ${inputs.name.length <= 5 && inputs.name.length != 0 && 'pt-4 bg-red-100'}`}
              style={{ outline: 'none' }}
              placeholder="Name"
              value={inputs.name}
              name="name"
              onChange={inputHandler} />
          </div>

          <textarea className="text-[13px] h-28 p-2 bg-gray-200 rounded-lg"
            placeholder="Message"
            value={inputs.message}
            style={{ resize: "none" }}
            name="message"
            onChange={inputHandler}></textarea>
        </div>
        <button className={`text-[13px] w-fit font-bold text-white bg-black border p-2 mt-2 rounded-lg cursor-pointer ${isGmail && inputs.name.length > 5 && inputs.message.length != 0 ? 'bg-black' : 'bg-gray-300'}`}
          onClick={sendEmail}
          disabled={!(isGmail &&
            inputs.name.length > 5 &&
            inputs.message.length != 0)
          }
        >Send message</button>
        <div className="lg:h-screen"></div>
      </div >
    </>
  );
}

export default Connect