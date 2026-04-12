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
        { publicKey: `${process.env.NEXT_PUBLIC_KEY}` }
      )
      .then(
        () => {
          alert("Mensaje enviado correctamente");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Algo salió mal... :(");
        }
      );
  }

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition-all duration-200 placeholder-slate-600";
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.09)",
  };

  return (
    <section id="contact" className="w-full max-w-lg mx-auto px-4 sm:px-6 py-16 text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold tracking-tight gradient-text inline-block">
          Contacto
        </h2>
        <p className="mt-3 text-slate-400 text-sm">
          ¿Tienes un proyecto? Escríbeme.
        </p>
      </div>

      <form
        ref={form}
        name="contact"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div>
          <label htmlFor="name" className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={inputClass}
            style={inputStyle}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(96,165,250,0.5)"; e.currentTarget.style.background = "rgba(96,165,250,0.05)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={inputClass}
            style={inputStyle}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(96,165,250,0.5)"; e.currentTarget.style.background = "rgba(96,165,250,0.05)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
            Motivo
          </label>
          <select
            id="service"
            name="service"
            className={inputClass}
            style={{ ...inputStyle, appearance: "none" }}
            onChange={(e) => setService(e.target.value)}
            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(96,165,250,0.5)"; e.currentTarget.style.background = "rgba(96,165,250,0.05)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
          >
            <option value="" style={{ background: "#0f1119" }}>Selecciona uno</option>
            <option value="desarrollo-de-software" style={{ background: "#0f1119" }}>Desarrollo de software</option>
            <option value="asesoria-de-software" style={{ background: "#0f1119" }}>Asesoría de software</option>
            <option value="diseno-web" style={{ background: "#0f1119" }}>Desarrollo de páginas web</option>
            <option value="un-cafe" style={{ background: "#0f1119" }}>Invitarte a un café</option>
            <option value="participar-en-un-evento" style={{ background: "#0f1119" }}>Invitación a eventos</option>
            <option value="clases-de-programacion" style={{ background: "#0f1119" }}>Solicitud de clases de programación</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs text-slate-500 mb-1.5 uppercase tracking-wider">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`${inputClass} resize-none`}
            style={inputStyle}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(96,165,250,0.5)"; e.currentTarget.style.background = "rgba(96,165,250,0.05)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(96,165,250,0.3)]"
          style={{ background: "linear-gradient(135deg, #3b82f6, #22d3ee)" }}
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
};

export default Contact;
