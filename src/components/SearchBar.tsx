import React from "react";
import { BsSearch } from "react-icons/bs";

interface SearchBarProps {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({
    searchText,
    setSearchText,
}: SearchBarProps) {
    return (
        <div className="px-4 py-2 flex items-center gap-2 rounded-lg shadow-md ">
            <div className="font-bold text-2xl">
                <BsSearch />
            </div>
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search Products"
                className="outline-none"
            />
        </div>
    );
}
