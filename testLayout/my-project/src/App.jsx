import SideBar from './components/SideBar';
import Header from './components/Header';
import ActionArea from './components/ActionArea';

function App() {
  return (
    <div className="flex flex-row w-full h-screen py-4 overflow-hidden bg-gray-300 xl:px-4 gap-x-4 ">
      <SideBar />

      <div className="flex flex-col w-full h-full ">
        <Header />
        <div className="flex flex-col justify-between flex-1 w-full mt-4 overflow-y-auto ">
          <ActionArea />
        </div>
      </div>
    </div>
  );
}

export default App;
