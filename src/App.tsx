import Content from "./Components/content";
import Headers from "./Components/headers";
import PreviewProvider from "./Contexts/preview";

function App() {
  return (
    <div className='h-full w-full text-center p-2 bg-slate-800 overflow-x-hidden overflow-y-auto'>
      <PreviewProvider>
        <Headers />
        <Content />
      </PreviewProvider>
    </div>
  );
}

export default App;
