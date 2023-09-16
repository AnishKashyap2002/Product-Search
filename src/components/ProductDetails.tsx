import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
// import { useQuery } from "@tanstack/react-query";
// import useDebounce from "../hooks/useDebounce";
import SearchList from "./SearchList";
import { productProps } from "../types";

export default function ProductDetails() {
    const [searchText, setSearchText] = useState("");
    const [initialData, setInitialData] = useState<productProps[]>();
    const [filteredList, setFilteredList] = useState<productProps[] | []>([]);
    const [total, setTotal] = useState(0);

    const [productList, setProductList] = useState<productProps[] | []>([]);

    const deleteProduct = (product: productProps) => {
        const newProductList = productList.filter(
            (item) => product.product_name !== item.product_name
        );
        setTotal(total - product.price_rupees);
        setProductList(newProductList);
    };

    const addProduct = (product: productProps) => {
        setProductList([...productList, product]);
        setFilteredList([]);
        setTotal(total + product.price_rupees);
        setSearchText("");
    };

    useEffect(() => {
        setTimeout(() => {
            if (searchText && initialData) {
                const list = initialData
                    .filter((data) => {
                        return data.product_name
                            .toLowerCase()
                            .includes(searchText.toLowerCase());
                    })
                    .slice(0, 10);
                setFilteredList(list);
            } else {
                setFilteredList([]);
            }
        }, 100);
    }, [searchText]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8000/products");
            const data = await response.json();
            setInitialData(data);
        };

        fetchData();
    }, []);

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-4 items-center">
                <div className="flex gap-2 ">
                    <SearchBar
                        setSearchText={setSearchText}
                        searchText={searchText}
                    />
                    <div className="relative min-w-[200px]">
                        {filteredList && (
                            <SearchList
                                list={filteredList}
                                addProduct={addProduct}
                            />
                        )}
                    </div>
                </div>
                {productList.length ? (
                    <ProductList
                        productList={productList}
                        deleteProduct={deleteProduct}
                    />
                ) : (
                    <div className="font-bold">No Selected Products</div>
                )}
                <div className="flex flex-col gap-2 items-center">
                    <div className="">
                        Total <span className="font-bold">{total + " "}</span>₹
                    </div>
                    <div className="px-4 py-2 rounded-md bg-black text-white cursor-pointer">
                        Submit
                    </div>
                </div>
            </div>
        </div>
    );
}
