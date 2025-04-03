import { useTheme } from "../contexts/ThemeToggle"

export default function Card({ heading, subHeading, lightImageUrl, darkImageUrl }: {
  heading: string,
  subHeading: string,
  lightImageUrl: string,
  darkImageUrl: string
}) {
  const theme = useTheme();
  console.log(theme.theme)
  return <div className={`flex flex-col max-w-sm m-3 border border-card-border rounded-md bg-card-background p-4  `}>
    <div className={`p-1 font-semibold text-lg text-[#242424] dark:text-[#c3d0e5] `}>{heading}</div>
    <div className="font-thin text-md text-[#475569] dark:text-[#9FB1D1]">
      {subHeading}
    </div>
    <img src={theme.theme === "dark" ? darkImageUrl : lightImageUrl} />
  </div>

}
