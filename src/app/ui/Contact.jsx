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
          alert("Algo salió mal...", error.text);
        }
      );
  }
  return (
    <section id="contact" className="relative">
      <h2 className="text-5xl font-bold tracking-tight text-gray-900 text-center mb-5">
        Contacto
      </h2>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26406.204389359908!2d-70.68787868384035!3d-34.17765582468503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967b5445dba7606f%3A0xa08393a56260f5df!2sMachal%C3%AD%2C%20O&#39;Higgins!5e0!3m2!1ses!2scl!4v1682540491847!5m2!1ses!2scl"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-2/3 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1 text-white">
                Machalí <br />
                Chile 2190000
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                CORREO ELECTRÓNICO
              </h2>
              <a
                className="text-indigo-400 leading-relaxed"
                href="mailto:jgxagency@betacode.cl"
              >
                jgxagency@betacode.cl
              </a>
            </div>
          </div>
        </div>
        <form
          ref={form}
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-gray-900 sm:text-4xl text-3xl mb-1 font-medium title-font">
            ¡Contrata servicios!
          </h2>
          <p className="leading-relaxed mb-5">
            Utiliza el siguiente formulario y solicita alguno de nuestros
            servicios:
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
            <label
              htmlFor="service"
              className="leading-7 text-sm"
            >
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
              <option value="diseno-web">
                Diseño Web y Desarrollo de páginas web
              </option>
              <option value="un-cafe">
                Invitarte a un café
              </option>
              <option value="participar-en-un-evento">
                Invitación a eventos
              </option>
              <option value="clases-de-programacion">
                Solicitud de clases de programación
              </option>
            </select>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm"
            >
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
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
