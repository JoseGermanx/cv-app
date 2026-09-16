import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Hábitos",
};

export default function HabitosPrivacyPage() {
  return (
    <>
      <style>{`
        .habitos-privacy-policy {
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          max-width: 700px;
          margin: 0 auto;
          padding: 32px 20px 80px;
          line-height: 1.6;
          color: #1a1a1a;
          background: #fff;
        }
        .habitos-privacy-policy h1 { font-size: 1.6rem; margin-bottom: 4px; }
        .habitos-privacy-policy h2 { font-size: 1.15rem; margin-top: 2rem; }
        .habitos-privacy-policy .updated { color: #666; font-size: 0.9rem; margin-bottom: 2rem; }
        .habitos-privacy-policy ul { padding-left: 1.2rem; }
      `}</style>
      <div className="habitos-privacy-policy">
        <h1>Política de Privacidad de Hábitos</h1>
        <p className="updated">Última actualización: 16 de septiembre de 2026</p>

        <p>
          <strong>Hábitos</strong> (paquete <code>com.habittracker.local</code>) es una aplicación móvil
          de seguimiento de hábitos y tareas que funciona <strong>completamente sin conexión a internet</strong>.
        </p>

        <h2>Qué datos recolectamos</h2>
        <p>
          <strong>Ninguno.</strong> Hábitos no recolecta, transmite ni comparte ningún dato personal ni de uso con
          nosotros ni con terceros. La aplicación no requiere registro, cuenta de usuario ni conexión a internet
          para funcionar.
        </p>

        <h2>Dónde se almacenan tus datos</h2>
        <p>
          Toda la información que ingresas (hábitos, tareas, progreso y estadísticas) se guarda{" "}
          <strong>únicamente en la memoria local de tu dispositivo</strong>, en una base de datos privada de la app.
          Esta información nunca sale de tu teléfono.
        </p>

        <h2>Eliminación de datos</h2>
        <p>
          Puedes eliminar hábitos o tareas individualmente desde la app. Si desinstalas la aplicación,
          todos los datos almacenados se eliminan de forma permanente junto con ella.
        </p>

        <h2>Permisos del dispositivo</h2>
        <p>La app no solicita permisos de cámara, ubicación, contactos ni ningún otro permiso sensible.</p>

        <h2>Anuncios y publicidad</h2>
        <p>
          Actualmente esta versión de la app <strong>no muestra anuncios</strong> ni utiliza SDKs de
          publicidad. Si en el futuro se incorporan anuncios, esta política se actualizará antes de ese cambio
          para describir qué datos podría recolectar el proveedor de anuncios.
        </p>

        <h2>Menores de edad</h2>
        <p>
          Al no recolectar ningún dato, la app no recopila información personal de menores de edad ni de
          ningún otro usuario.
        </p>

        <h2>Cambios a esta política</h2>
        <p>Si esta política cambia, actualizaremos la fecha en la parte superior de esta página.</p>

        <h2>Contacto</h2>
        <p>
          Si tienes preguntas sobre esta política de privacidad, puedes escribir a:{" "}
          <a href="mailto:jgermanmm@gmail.com">jgermanmm@gmail.com</a>
        </p>
      </div>
    </>
  );
}
