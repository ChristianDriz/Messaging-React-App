import Dropdown from "./dropdown-menu";

function Searchbar() {
    return (  
        <div className="flex items-center px-4 py-3.5 relative shadow dark:shadow-zinc-900 ">
            <Dropdown/>
            <input 
                type="text" 
                className="bg-zinc-200 rounded-full px-4 py-2 outline-none w-full ml-3 dark:bg-zinc-700"
                placeholder="Search here..."
            />
        </div>
    );
}

export default Searchbar;