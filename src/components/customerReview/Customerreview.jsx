import CommentCard from "../commentCard/CommentCard";


const Customerreview = () => {
    const testimonials = [
        {
            name: "Emily Carter",
            role: "Food Blogger",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            title: "Delicious food and cozy atmosphere",
            comment:
            "Every dish was bursting with flavor! The staff was friendly and made us feel right at home. Highly recommend the signature pasta.",
        },
        {
            name: "Michael Lee",
            role: "Local Guide",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 4,
            title: "Great service and fresh ingredients",
            comment:
            "I loved the freshness of the ingredients. The service was quick and attentive. Will definitely come back for more!",
        },
        // {
        //     name: "Sophia Martinez",
        //     role: "Regular Customer",
        //     image: "https://randomuser.me/api/portraits/women/68.jpg",
        //     rating: 5,
        //     title: "Best dining experience in town",
        //     comment:
        //     "The ambiance is perfect for family dinners. The desserts are a must-try! Thank you for a wonderful evening.",
        // },
        // {
        //     name: "David Kim",
        //     role: "Chef & Food Critic",
        //     image: "https://randomuser.me/api/portraits/men/85.jpg",
        //     rating: 4,
        //     title: "Authentic flavors and creative menu",
        //     comment:
        //     "Impressed by the authenticity and creativity of the menu. The chef’s special was outstanding. Highly recommended!",
        // },
    ];

    return (
        <div className="sectionBase mx-auto my-10 md:my-16">
            <h1 className="text-[2.5rem] font-bold text-center">Customers Review</h1>

            <div className=" flex flex-col items-center justify-center md:flex-row gap-6 mt-6 md:mt-10">
                {testimonials.map((testimonial, index) => (
                    <CommentCard key={index}  comment={testimonial}/>
                ))}
            </div>
        </div>
    );
};

export default Customerreview;