import { productProps } from "../types";

const SearchListItem = ({
    item,
    addProduct,
}: {
    item: productProps;
    addProduct: (product: productProps) => void;
}) => {
    return (
        <div
            className="px-2 py-1 bg-black text-white rounded-md cursor-pointer"
            onClick={() => addProduct(item)}
        >
            {item.product_name}
        </div>
    );
};
const SearchList = ({
    list,
    addProduct,
}: {
    list: productProps[];
    addProduct: (product: productProps) => void;
}) => {
    return (
        <div className="absolute flex gap-1 flex-col   bg-gray-50  rounded-md  shadow-md">
            {list.map((item) => (
                <SearchListItem
                    key={item.product_name}
                    item={item}
                    addProduct={addProduct}
                />
            ))}
        </div>
    );
};

export default SearchList;
