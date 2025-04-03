import { useTheme } from "../contexts/ThemeToggle"

export default function SecondCard({ heading, subHeading, anchor, darkImageUrl, lightImageUrl }: {
  heading: string,
  subHeading: string,
  anchor: string,
  darkImageUrl: string,
  lightImageUrl: string

}) {
  const theme = useTheme();
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Text Content - Left Side */}
        <div className="md:w-1/2 space-y-6 lg:space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#242424] dark:text-[#9ba3b4]">
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-[#475569] leading-relaxed dark:text-[#9FB1D1]">
            {subHeading}
          </p>
          <a
            href="#"
            className="inline-block text-custom-blue rounded-lg underline"
          >
            {anchor}
          </a>
        </div>

        {/* Image - Right Side */}
        <div className="md:w-1/2 w-full">
          <img
            className="rounded-2xl object-contain w-full h-full max-h-[500px]"
            src={theme.theme === "dark" ? darkImageUrl : lightImageUrl}
            alt="Copilot Edits interface"
          />
        </div>
      </div>
    </div>
  )
}
