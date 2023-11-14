import Searchbar from "./searchbar"
import UserProfile from "../img/JDS00024.jpg"

function Sidebar() {

    const list = 25;
    const messages = [];

    for (let i = 0; i < list; i++){
        messages.push(
            <a key={i} className="flex items-center p-2.5 rounded-lg hover:bg-blue-50 dark:hover:bg-zinc-700">
                <div className="w-12 h-12">
                    <img src={UserProfile} alt="pic" className="min-w-[48px] min-h-[48px] rounded-full object-cover" />
                </div>
                <div className="px-2.5 ">
                    <p className="font-semibold text-truncate">Username</p>
                    <span className="text-sm text-ellipsis overflow-hidden text-truncate text-slate-600 dark:text-zinc-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                </div>
            </a>
        )
    }

    return (  
        <div className="h-screen w-96 dark:bg-zinc-800 border-r dark:border-zinc-900 dark:text-white"> {/* max-md:hidden */}
            <Searchbar/>
            <div className="h-[calc(100%-4.25rem)] p-1.5 overflow-y-auto">
                <a className="flex items-center p-2.5 rounded-lg bg-indigo-400 text-white">
                    <div className="w-12 h-12">
                        <img src={UserProfile} alt="pic" className="min-w-[48px] min-h-[48px] rounded-full object-cover" />
                    </div>
                    <div className="px-2.5 ">
                        <p className="font-semibold text-truncate">Username</p>
                        <span className="text-sm text-ellipsis overflow-hidden text-truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                    </div>
                </a>
                {messages}
            </div>
        </div>
    );
}

export default Sidebar;