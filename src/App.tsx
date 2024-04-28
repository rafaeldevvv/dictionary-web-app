import Header from "./components/Header"
import './output.css';

export default function App() {
   return (
      <div data-theme="light" className="bg-background">
         <Header />
         <main className="">
            <h1 className="text-contrast-high">Dictionary</h1>
            <p className="text-contrast-normal">Well, let&apos;s build a dictionary!</p>
         </main>
      </div>
   )
}