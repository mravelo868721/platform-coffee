export default function ContactInfoCards() {
  const contactCardData = [
    {
      id: "email",
      icon: "/images/icons/email-icon.png",
      title: "Email Us",
      subtitle: "contact@platformcoffeeco.com",
      href: "mailto:contact@platformcoffeeco.com",
    },
    {
      id: "number",
      icon: "/images/icons/call-icon.png",
      title: "Call Us",
      subtitle: "(670) 867-5309",
      href: "call:6708675309",
    },
    {
      id: "location",
      icon: "/images/icons/maps-icon.png",
      title: "Visit Us",
      subtitle: "6700 Rotterbran St., San Francisco, US",
      href: "www.google.com",
    },
  ];
  return (
    //Insert map() here
    contactCardData.map((item) => (
      <div className="flex justify-between p-8 border border-gray-300 rounded-xl">
        <div className="flex">
          <div className="flex w-16 h-16 border border-gray-300 rounded-xl mr-4">
            <img className="m-auto" src={item.icon} alt="" />
          </div>
          {/* Information */}
          <div className="flex flex-col justify-center">
            <h4 className="text-2xl font-bold">{item.title}</h4>
            <span className="text-base">{item.subtitle}</span>
          </div>
        </div>
        {/* Icon */}
        <a href={item.href}>
          <div className="flex justify-center items-center bg-gray-300 rounded-full w-16 h-16 cursor-pointer">
            <img
              className="w-6 h-6"
              src="/images/icons/outgoing-arrow.png"
              alt=""
            />
          </div>
        </a>
      </div>
    ))
  );
}
