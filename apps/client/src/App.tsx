import { Signup } from "@repo/ui";
import { PreviewCard } from "@repo/ui";

function App() {
  return (
    <div>
      <Signup/>
      <div className="bg-[#059669]">
        client - red
      </div>
      <PreviewCard />
    </div>
  );
}

export default App;
