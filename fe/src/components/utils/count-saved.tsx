// import { useState, useEffect } from "react";
// import ItemCard from "@/components/ItemCard";

// export default function Home() {
//     const [savedItems, setSavedItems] = useState(() => {
//         return JSON.parse(localStorage.getItem('savedItems')) || [];
//     });

//     const updateSavedCount = () => savedItems.length;

//     // This effect syncs saved items with local storage
//     useEffect(() => {
//         localStorage.setItem('savedItems', JSON.stringify(savedItems));
//     }, [savedItems]);

//     return (
//         <div>
//             <h1>Хадгалсан бараа</h1>
//             <div className="header">
//                 <button id="saved-items-btn">
//                     ❤️ Saved Items ({updateSavedCount()})
//                 </button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {products.map(product => (
//                     <ItemCard
//                         key={product.id}
//                         id={product.id}
//                         image={product.image}
//                         title={product.title}
//                         price={product.price} 
//                         discount={product.discount}
//                         savedItems={savedItems}
//                         setSavedItems={setSavedItems}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }
