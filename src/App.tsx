import { LazyMotion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import Application from "./Application";
const loadFeatures = () => import("./utils/features").then(res => res.default)


function App() {
  return (
    <>
      <Toaster />
      <LazyMotion strict features={loadFeatures}>
        <Application />
      </LazyMotion>
    </>
  )
}

export default App
