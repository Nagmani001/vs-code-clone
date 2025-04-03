import { useTheme } from "../contexts/ThemeToggle"

export default function VideoElement() {
  const theme = useTheme();
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Container */}
      <div className="relative flex justify-center">
        {/* Background Image with Gradient Overlay */}
        <div className="relative w-full overflow-hidden rounded-3xl">
          <img
            className="w-full object-cover"
            alt="VS Code background pattern"
            src="https://code.visualstudio.com/assets/home/hero-background.webp"
          />
          {/* Gradient overlay matching original design */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        </div>

        {/* Centered Video */}
        <div className="absolute top-1/2 w-full max-w-6xl -translate-y-1/2 px-4">
          <div className="aspect-[1008/639] overflow-hidden rounded-2xl shadow-2xl">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src={theme.theme === "light" ? "https://code.visualstudio.com/assets/home/hero-light-lg.webm" : "https://code.visualstudio.com/assets/home/hero-dark-lg.webm"}
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8 flex justify-center">
        <button className="hover:border hover:border-black font-medium px-4 py-2 rounded-xl hover:bg-slate-50">Replay</button>
      </div>
    </div>
  )
}
