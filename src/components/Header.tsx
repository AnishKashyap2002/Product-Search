import { AiOutlineMenu } from "react-icons/ai";
import { CiUser } from "react-icons/ci";

export default function Header() {
    return (
        <div className="font-bold text-2xl shadow-md px-4 py-2 flex justify-between items-center">
            <div className="cursor-pointer flex gap-2 items-center">
                <AiOutlineMenu />
                <div className="italic">Searcher</div>
            </div>
            <div className="cursor-pointer ">
                <CiUser />
            </div>
        </div>
    );
}
