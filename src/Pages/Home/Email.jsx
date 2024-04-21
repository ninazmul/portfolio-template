import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m0673lt", // Replace with your service ID
        "template_0o5g5hd", // Replace with your template ID
        form.current,
        "d7Yp_9-YdBQk0azUp" // Replace with your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Email sent successfully!",
            text: "Your message has been sent.",
          });
          form.current.reset(); // Reset the form after successful email send
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Please try again later.",
          });
        }
      );
  };

  return (
    <div className="py-4 flex flex-col items-center justify-center">
      <div className="flex justify-start py-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-normal text-start rounded-lg gradient-text uppercase px-4">
          Contact Me Via Email
        </h1>
      </div>
      <div className="">
        <div className="shadow-2xl border-2 p-1 border-blue-700 card_glow text-black rounded-xl md:w-[700px]">
          <form className="card-body" ref={form} onSubmit={sendEmail}>
            <div className="form-control">
              <label className="label">
                <span className="">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                className="input input-bordered glass border-blue-700 border-2 input_glow"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="user_email"
                className="input input-bordered glass border-blue-700 border-2 input_glow"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Your Message</span>
              </label>
              <textarea
                placeholder="Write your message..."
                name="message"
                className="textarea input-bordered glass border-blue-700 border-2 input_glow pt-6 pb-20"
                required
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <input
                className="neno-button font-bold shadow-xl hover:shadow-blue-800/50 border-2 hover:bg-blue-700 border-blue-700 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-center"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
