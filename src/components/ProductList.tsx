import { useState } from "react";
import { productProps } from "../types";
import { GiCrossedBones } from "react-icons/gi";
import DialogBox from "./DialogBox";

interface ProductListProps {
    productList: productProps[];
    deleteProduct: (product: productProps) => void;
}

interface ProductListItemProps {
    product: productProps;
    deleteProduct: (product: productProps) => void;
}
const ProductListItem = ({ product, deleteProduct }: ProductListItemProps) => {
    const [open, setOpen] = useState(false);

    return (
        <tr className="px-4 ">
            <td className="font-semibold text-center px-4 py-2">
                {product.product_name}
            </td>
            <td className="italic text-center px-4 py-2">
                {product.product_details}
            </td>
            <td className="font-bold text-center px-4 py-2">
                {product.dispatch_time_days + " "} days
            </td>
            <td className="font-light text-center px-4 py-2 flex justify-between items-center gap-2">
                <span>{product.price_rupees} ₹</span>
                <div
                    className="text-rose-600 font-bold cursor-pointer text-2xl"
                    onClick={() => setOpen(true)}
                >
                    <GiCrossedBones />
                </div>
                {open && (
                    <DialogBox
                        deleteProduct={deleteProduct}
                        product={product}
                        open={open}
                        setOpen={setOpen}
                    />
                )}
            </td>
        </tr>
    );
};

export default function ProductList({
    productList,
    deleteProduct,
}: ProductListProps) {
    return (
        <div className="">
            <table className="shadow-md ring-1 ring-black rounded-lg overflow-hidden py-2 px-4">
                <tbody className="py-2">
                    <tr className="ring-1 ring-gray-600">
                        <th>Name</th>
                        <th>Details</th>
                        <th>Dispatch Time</th>
                        <th>Price</th>
                    </tr>
                    {productList.map((product) => (
                        <ProductListItem
                            product={product}
                            key={Math.random()}
                            deleteProduct={deleteProduct}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
