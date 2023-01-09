import Sidebar from "../components/sidebar";
import Chat from "./../components/chat/chat";
import Header from "./../components/header";

const MainLayout = (props) => {
  return (
    <div className="flex flex-row px-11 pt-10  bg-slate-100 shadow-2xl parent ">
      <div className="w-[18.7rem]">
        <Sidebar type={props.type} />
      </div>
      {/* //header */}
      <div className="relative flex flex-col break-words  w-full pl-12 pt-1">
        <Header type={props.type} />
        <hr className="h-0.5 bg-slate-300" />
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">{props.children}</div>
        </div>
      </div>
      <div className="fixed bottom-0 right-8  ">
        <Chat />
      </div>
    </div>
  );
};

export default MainLayout;
