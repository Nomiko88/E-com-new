
class ProductRating {
    private reviews: Review[];

    constructor(product: Product) {
        this.reviews = product.reviews;
    }

    getAverageRating(): number {
        if (this.reviews.length === 0) return 0;
        const total = this.reviews.reduce((sum, review) => sum + review.rating, 0);
        return total / this.reviews.length;
    }

    getTotalReviews(): number {
        return this.reviews.length;
    }

    getComments(): string[] {
        return this.reviews.map(review => review.comment);
    }

    getStarRating(): string {
        const averageRating = this.getAverageRating();
        const stars = Array(5).fill('★');
        const filledStars = stars.map((star, index) => (index < Math.round(averageRating) ? '★' : '☆')).join('');
        return filledStars;
    }
}

export default ProductRating;
