import { Signup } from "@repo/ui";
import { PreviewCard } from "@repo/ui";

function App() {
  return (
    <div>
      <Signup/>
      <div className="bg-red-500">
        test-red
      </div>
      <PreviewCard />
    </div>
  );
}

export default App;
