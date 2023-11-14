import UserProfile from "../img/default-img.jpg";

function Topnav() {
    return (  
        <div className="flex items-center justify-between bg-white shadow px-4 py-3.5 relative dark:bg-zinc-800 dark:shadow-zinc-900">
            <div className="flex items-center">
                <div className="w-9 h-9">
                    <img src={UserProfile} className="min-w-[36px] min-h-[36px] rounded-full object-cover"/>
                </div>
                <div className="px-2.5">
                    <p className="font-semibold leading-5">Username</p>
                    <p className="text-xs dark:text-zinc-400">Active now</p>
                </div>
            </div>
            <div className="flex text-lg">
                <a className="w-10 h-10 rounded-full hover:bg-blue-50 flex items-center justify-center dark:hover:bg-zinc-700">
                    <ion-icon name="search-outline"></ion-icon>
                </a>
                <a className="w-10 h-10 rounded-full hover:bg-blue-50 flex items-center justify-center dark:hover:bg-zinc-700">
                    <ion-icon name="call-outline"></ion-icon>
                </a>
                <a className="w-10 h-10 rounded-full hover:bg-blue-50 flex items-center justify-center dark:hover:bg-zinc-700">
                    <ion-icon name="videocam-outline"></ion-icon>
                </a>  
                <a className="w-10 h-10 rounded-full hover:bg-blue-50 flex items-center justify-center dark:hover:bg-zinc-700">
                    <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                </a>
            </div>
        </div>
    );
}

export default Topnav;