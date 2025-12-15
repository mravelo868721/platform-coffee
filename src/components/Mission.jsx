export default function Mission() {
  return (
    <div className="flex mt-24 mb-24 px-[10%] gap-5">
      {/* Left Side */}
      <div
        className="
        flex flex-col w-[50%]
        "
      >
        <h2 className="text-6xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg mb-4 mr-[5%]">
          We’re not chasing trends or writing tasting poems.We’re chasing that
          moment when the day clicks into gear — when the first sip hits and
          you’re already moving. <br></br>
          <br></br>Our beans are selected for balance and performance. Every
          roast is tested, refined, and repeatable. Because great coffee
          shouldn’t be a mystery — it should be a habit that works as hard as
          you do.
        </p>
        <a className="font-bold mb-20" href="">
          Learn More
        </a>
        <div
          className="
            flex w-full gap-5
            "
        >
          <img
            className="w-[50%] h-auto rounded-lg"
            src="./images/store/store1.jpg"
          ></img>
          <img
            className="w-[50%] h-auto rounded-lg"
            src="./images/store/store2.jpg"
          ></img>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-[50%] rounded-lg bg-cover bg-center bg-[url('./images/store/store3.jpg')]">
        {/* <img
          className="w-full max-h-[200px]"
          src="./images/store/store3.jpg"
        ></img> */}
      </div>
    </div>
  );
}
