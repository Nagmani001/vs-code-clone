import Card from "../components/card";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import SecondCard from "../components/secondCard";
import VideoElement from "../components/Video";

export default function Landing() {
  return <div className="min-h-screen bg-white dark:bg-gray-900  ">
    <NavBar />
    <Hero />
    <VideoElement />
    <div className="flex justify-center mt-20  ">
      <Card heading="Choose the model that works for you" subHeading="Pick the model that works best for your project and team, including GPT 4o and Claude Sonnet." imageUrl="https://code.visualstudio.com/assets/home/choose-model-light.webp" />
      <Card heading="An expert on your codebase" subHeading="Copilot locally indexes your codebase to understand what’s relevant and supplements that context to interactions with Copilot." imageUrl="https://code.visualstudio.com/assets/home/choose-model-light.webp" />
      <Card heading="Personalized to your needs" subHeading="Copilot works the way you do. Customize Copilot's prompts with details about your team's workflows, tools, and projects." imageUrl="https://code.visualstudio.com/assets/home/choose-model-light.webp" />
    </div>
    <SecondCard />

  </div>
}
