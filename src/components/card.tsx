export default function Card({ heading, subHeading, imageUrl }: {
  heading: string,
  subHeading: string,
  imageUrl: string
}) {
  return <div className="flex flex-col max-w-sm m-3 border border-card-border rounded-md bg-card-background p-4 ">
    <div className="p-1 font-semibold text-lg text-[#242424]">{heading}</div>
    <div className="font-thin text-md text-[#475569]">
      {subHeading}
    </div>
    <img src={imageUrl} />
  </div>

}
