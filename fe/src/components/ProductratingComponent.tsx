// ProductRatingComponent.tsx
import React from 'react';
import ProductRating from './Productrating';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"






interface Review {
    user: string;
    rating: number;
    comment: string;
}

interface Product {
    id: string;
    name: string;
    reviews: Review[];
}

interface ProductRatingProps {
    product: Product;
}

const ProductRatingComponent: React.FC<ProductRatingProps> = ({ product }) => {
    const productRating = new ProductRating(product);

    const averageRating = productRating.getAverageRating();
    const totalReviews = productRating.getTotalReviews();
    const comments = productRating.getComments();
    const starRating = productRating.getStarRating();
    // const Username= productRating.getUser();

    return (
        <div className='mt-10'>
            <div className='flex gap-3 justify-start items-center'>
                <h1 className='text-sm'>Үнэлгээ</h1>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className='underline underline-offset-1 text-sm text-[#2563eb]'>
                        <Button variant="ghost">бүгдийг харах</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className=' flex flex-col gap-2'>
                            <div className='flex gap-3 justify-start'>
                                <p> Username</p>
                                <div className="stars" style={{ color: 'gold' }}>{starRating}</div></div>

                            <ul className='text-sm text-slate-600'>
                                {comments.map((comment, index) => (
                                    <li key={index}>{comment}</li>
                                ))}
                            </ul>
                            <div>
                                <Textarea placeholder='Энд бичнэ үү!' />
                                <Button> Үнэлэх</Button>
                            </div>

                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
            <div className='flex gap-3 justify-start items-center'>
                <div className="stars" style={{ color: 'gold' }}>{starRating}</div>
                <p className='font-bold'> {averageRating.toFixed(1)}</p>
                <p> ({totalReviews})</p></div>


        </div>
    );
};

export default ProductRatingComponent;
