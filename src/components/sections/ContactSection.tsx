import { ContactExperience } from "@/components/contact/ContactExperience";

export function ContactSection() {
  return (
    <section id="contact" className="contact section-light" data-theme="light">
      <div className="contact-inner">
        <p className="section-eyebrow">Contact</p>
        <ContactExperience />
      </div>
    </section>
  );
}

