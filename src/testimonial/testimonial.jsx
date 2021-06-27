export const Testimonial = ({ avatar, description, name, position }) => {
  return (
    <div
      className="flex flex-row flex-wrap justify-center text-center"
      style={{ width: "22rem" }}
    >
      <div className="rounded-full w-16 h-16 mb-12">
        <img src={avatar} alt="" className="w-full rounded-full" />
      </div>

      <div className="w-full text-center text-lg text-darkgrayblue mb-12">
        {description}
      </div>
      <div className="font-serif w-full pb-2">{name}</div>
      <div className="w-full text-grayishblue text-xs">
        <p className="tracking-widest">{position}</p>
      </div>
    </div>
  );
};
