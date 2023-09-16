export default function Home() {
    return (
        <div className="flex flex-1 justify-center items-center flex-col ">
            <div className="max-w-[500px] flex flex-col italic items-center gap-2">
                <div className="font-semibold text-2xl ">
                    Hello welcome to searcher ...
                    <br /> We Provide better and faster way to search and list
                    out products..
                </div>
                <a href="/details">
                    <div className=" w-fit cursor-pointer bg-sky-500 text-white px-4 py-2 rounded-md ">
                        Check Out Products
                    </div>
                </a>
            </div>
        </div>
    );
}
