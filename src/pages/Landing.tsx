import Card from "../components/card";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import SecondCard from "../components/secondCard";
import TextHeading from "../components/text";
import VideoElement from "../components/Video";

export default function Landing() {
  return <div className="min-h-screen bg-white dark:bg-gray-900  ">
    <div className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <NavBar />
    </div>
    <Hero />
    <VideoElement />
    <div className="flex justify-center mt-20  ">
      <Card heading="Choose the model that works for you" subHeading="Pick the model that works best for your project and team, including GPT 4o and Claude Sonnet." lightImageUrl="https://code.visualstudio.com/assets/home/choose-model-light.webp" darkImageUrl="https://code.visualstudio.com/assets/home/choose-model-dark.webp" />
      <Card heading="An expert on your codebase" subHeading="Copilot locally indexes your codebase to understand what’s relevant and supplements that context to interactions with Copilot." lightImageUrl="https://code.visualstudio.com/assets/home/choose-model-light.webp" darkImageUrl="https://code.visualstudio.com/assets/home/multi-file-dark.webp" />
      <Card heading="Personalized to your needs" subHeading="Copilot works the way you do. Customize Copilot's prompts with details about your team's workflows, tools, and projects." lightImageUrl="https://code.visualstudio.com/assets/home/choose-model-light.webp" darkImageUrl="https://code.visualstudio.com/assets/home/instructions-dark.webp" />
    </div>
    <SecondCard heading="Multi-file edits" subHeading="Describe what you want to build in natural language, and Copilot Edits takes care of the rest. Copilot Edits makes changes across files in your codebase with a UI designed for rapid iteration. It's the fastest way to add new functionality to your apps." anchor="Build with Copilot Edits" lightImageUrl="https://code.visualstudio.com/assets/home/swimlane-chat-light.webp" darkImageUrl="https://code.visualstudio.com/assets/home/swimlane-chat-dark.webp" />
    <SecondCard heading="Code suggestions" subHeading="Copilot predicts your next thought with Next Edit Suggestions. Use the Tab key to accept AI-powered suggestions right in your editor. Next Edit Suggestions will intelligently suggest where and what to change across your file based on the edits you're making." anchor="Pair program with Copilot" lightImageUrl="https://code.visualstudio.com/assets/home/swimlane-nes-light.webp" darkImageUrl="https://code.visualstudio.com/assets/home/swimlane-nes-dark.webp" />
    <SecondCard heading="Fully customizable" subHeading="Customize your VS Code UI and layout so that it fits your coding style.

Color themes let you modify the colors in VS Code's user interface to suit your preferences and work environment.

Settings Sync enables you to share your user settings across your VS Code instances with the Settings Sync feature.

Profiles let you create sets of customizations and quickly switch between them or share them with others." anchor="" lightImageUrl="https://code.visualstudio.com/assets/home/swimlane-customized-light.png" darkImageUrl="https://code.visualstudio.com/assets/home/swimlane-customized.png" />
    <SecondCard heading="Code anywhere" subHeading="Code wherever you're most productive, whether you're connected to the cloud, a remote repository, or in the browser with VS Code for the Web (vscode.dev).

Built-in Source Control empowers you with Git support out-of-the-box. Many other source control providers are available through extensions.

GitHub Codespaces provides cloud-powered development environments for any activity - whether it's a long-term project, or a short-term task like reviewing a pull request." anchor="" lightImageUrl="https://code.visualstudio.com/assets/home/swimlane-anywhere-light.png" darkImageUrl="https://code.visualstudio.com/assets/home/swimlane-anywhere.png" />
    <TextHeading />
  </div>
}
