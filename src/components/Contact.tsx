import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments,faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  return (
    <section id="contacts" className="py-20">
      <div className="container">
        <h2 className="section-title">Contacts</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Text */}
          <div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              I'm interested in freelance opportunities – especially on ambitious
              or large projects. However, if you have any other requests or
              questions, don't hesitate to contact me using below links.
            </p>
          </div>

          {/* Contact Box */}
          <div className="flex justify-start lg:justify-end">
            <div className="border border-border p-6 inline-block">
              <h3 className="text-foreground font-semibold mb-4">Message me here</h3>
              <div className="space-y-3">
                <a
                  href="http://wa.me/918281155896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-lg"><FontAwesomeIcon icon={faComments} /></span>
                  <span>giri.dev.</span>
                </a>
                <a
                  href="mailto:girisankarph@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-lg"><FontAwesomeIcon icon={faEnvelope} /></span>
                  <span>girisankarph@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
