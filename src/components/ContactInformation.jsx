import ContactInfoCards from "./ContactInfoCards";

export default function ContactInformation() {
  return (
    <div className="w-[50%]">
      <h2>Contact Us</h2>
      <h3>Business Information</h3>
      <ContactInfoCards
        icon="public/images/icons/email-icon.png"
        title="Email Us"
        subtitle="contact@platformcoffeeco.com"
        href="mailto:contact@platformcoffeeco.com"
      />
    </div>
  );
}
