import { Download } from "lucide-react";

export default function Hero() {
  return <div>
    <div className="flex  justify-center my-5 gap-1 text-sm font-extralight">
      <div>
        🚀 Get
      </div>
      <a className="text-custom-blue" href="/">Github Copilot Free</a>
      <div>
        in VS Code!
      </div>


    </div>

    <div className="flex  justify-center my-5 gap-1 text-sm font-extralight pt-6">
      <div>
        🚀 Get
      </div>
      <a className="text-custom-blue" href="/">Github Copilot Free</a>
      <div>
        in VS Code!
      </div>


    </div>
    <div className=" flex justify-center">
      <div className="font-bold text-6xl flex flex-col justify-center gap-3 mt-5 dark:text-white">
        <h1 className="flex justify-center">Your code editor.</h1>
        <h1 className="flex justify-center">Redifined with AI.</h1>
      </div>
    </div>
    <div className="flex justify-center my-10 gap-1  ">
      <button className="bg-custom-blue px-4 rounded-md py-4 text-white">
        <div className="flex justify-center gap-2 font-semibold">
          <span><Download /></span>
          <p>.deb</p>
        </div>
        <div className="text-xs font-semibold mt-2">
          Debian,Ubuntu...
        </div>
      </button>
      <button className="bg-custom-blue px-4 rounded-md text-white">
        <div className="flex justify-center gap-2 font-semibold">
          <span><Download /></span>
          <p>.rpm</p>
        </div>
        <div className="text-xs font-semibold mt-2">
          Red Hat,Fedora...
        </div>
      </button>
      <button className="bg-secondary-background rounded-md p-4 border border-gray-300 ml-2 font-medium">Get Copilot free</button>

    </div>
    <div className="flex justify-center text-xs text-custom-blue my-5">
      <a className="underline" href="/">Web</a><span className="text-black">,</span>
      <a className="underline" href="/">Insiders edition</a><span className="text-black">,or</span>

      <a className="underline" href="/">other platforms</a>

    </div>
  </div>
}
