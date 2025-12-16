import ContactInfoCards from "./ContactInfoCards";

export default function ContactInformation() {
  return (
    <div className="flex flex-col gap-4 w-[50%]">
      <h2 className="text-6xl font-bold">Contact Us</h2>
      <h3 className="text-4xl font-bold pb-12">Business Information</h3>
      <ContactInfoCards
        icon="public/images/icons/email-icon.png"
        title="Email Us"
        subtitle="contact@platformcoffeeco.com"
        href="mailto:contact@platformcoffeeco.com"
      />
    </div>
  );
}
