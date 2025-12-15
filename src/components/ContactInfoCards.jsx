export default function ContactInfoCards() {
  const contactCardData = [
    {
      icon: "public/images/icons/email-icon.png",
      title: "Email Us",
      subtitle: "contact@platformcoffeeco.com",
      href: "mailto:contact@platformcoffeeco.com",
    },
  ];
  return (
    //Insert map() here
    <div className="flex p-8 border border-gray-500 rounded">
      <div className="flex w-16 h-16 border border-gray-500 rounded">
        <img className="m-auto" src={contactCardData[0].icon} alt="" />
      </div>
      <div className="flex flex-col">
        <h4>{contactCardData[0].title}</h4>
        <span>{contactCardData[0].subtitle}</span>
      </div>

      <div className="bg-gray-300 rounded-full w-16 h-16">
        <img src="" alt="" />
      </div>
    </div>
  );
}
