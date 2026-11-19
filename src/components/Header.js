import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <div className="sticky w-[100%] ">
                <h1 className="bg-red-400 text-center font-extrabold text-4xl ">THE TRENDING TOPIC</h1>
            </div>
            <div className="border-[1px] h-[40px] pt-[10px] bg-slate-300 sticky">
                <button
                    onClick={() => navigate("/")}
                    className="ml-5 border-[0px] border-slate-700 rounded-2xl w-52 bg-orange-300 hover:bg-cyan-300  "
                >
                    Home Page
                </button>
                <button
                    onClick={() => navigate("/about")}
                    className="ml-5 border-[0px] border-slate-700 rounded-2xl w-52 bg-orange-300 hover:bg-cyan-300  "
                >
                    About
                </button>
                <button
                    onClick={()=>navigate("/addlist")}
                    className="ml-5 border-[0px] border-slate-700 rounded-2xl w-52 bg-orange-300 hover:bg-cyan-300  ">
                        Addlist
                </button>
            </div>
        </header>
    );
}
export default Header;
