import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = React.useRef();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [service, setService] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !message || !service) {
      alert("Todos los campos son obligatorios");
      return;
    }
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`, 
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${process.env.NEXT_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          alert("Mensaje enviado correctamente");
          form.current.reset();
        },
        (error) => {
            console.log(error);
          alert("Algo salió mal... :(", error.text);
        }
      );
  }
  return (
    <section id="contact" className="relative text-white">
      <h2 className="text-5xl font-bold tracking-tight text-center mb-5">
        Contacto
      </h2>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
        <form
          ref={form}
          name="contact"
          onSubmit={handleSubmit}
          className="w-full flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0 max-w-lg"
        >
          <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font">
            ¡Ponte en contacto!
          </h2>
          <p className="leading-relaxed mb-5">
            Utiliza el siguiente formulario y contáctame.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="service" className="leading-7 text-sm">
              Motivo de tu contacto
            </label>
            <select
              id="service"
              name="service"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setService(e.target.value)}
            >
              <option defaultValue>Selecciona uno</option>
              <option value="desarrollo-de-software">Desarrollo de software</option>
              <option value="asesoria-de-software">Asesoría de software</option>
              <option value="diseno-web">Desarrollo de páginas web</option>
              <option value="un-cafe">Invitarte a un café</option>
              <option value="participar-en-un-evento">Invitación a eventos</option>
              <option value="clases-de-programacion">Solicitud de clases de programación</option>
            </select>
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm">
              Indica un poco más sobre tu contacto
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-1/2 self-center"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
