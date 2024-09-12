
const data = {
    about : {
        intro: "Nestled in the heart of Trinidad, Colorado, our small business is dedicated to crafting unique and heartfelt handmade cards featuring pressed flowers grown right here in our community. Every bloom is lovingly pressed, preserving its delicate colors and textures for eternity.",
        symbolism: "Each pressed flower tells a unique story, adding a special meaning to every card. A vibrant rose may symbolize love and passion, while a delicate daisy can represent innocence and purity. The symbolism of each flower is carefully considered to enhance the message you wish to convey.",
        invitation: "Whether you're sending a birthday greeting, expressing gratitude, or sharing a token of affection, our handmade creations offer a touch of natural elegance and warmth. We invite you to explore our collection and discover the perfect card to convey your message."
    },
    faq:{
        generalQs:[
            {
                question:'Can I request a custom card?',
                answer:'Yes, we offer custom card services to meet your specific needs. Please contact us to discuss your requirements.'
            },
            {
                question:'Where do you source your flowers?',
                answer:'We source our flowers locally in Trinidad, Colorado, ensuring freshness and supporting local growers.'
            },
            {
                question:'How should I care for my pressed flower card?',
                answer:'Pressed flowers can last for many years if handled with care. Keep your card out of direct sunlight and excessive humidity. Avoid touching the flowers directly to prevent damage.'
            },
            {
                question:'How long does it take to create a card?',
                answer:'The time it takes to create a card varies depending on the complexity of the design and the specific flowers used. However, we strive to process orders within 14 days.'
            }
        ],
        orderQs:[
            {
                question:'How do I place an order?',
                answer:'You can place an order through our website or by contacting us directly.'
            },
            {
                question:'What are your shipping options?',
                answer:'We offer UPS Ground and USPS First Class Mail. Shipping times may vary depending on your location and the availability of products. '
            },
            {
                question:'Can I exchange a card?',
                answer:'Yes, you can exchange a card for a different design or size. Please contact us within 30 days of receiving your order.'
            },
            {
                question:'What is your return policy?',
                answer:'We offer a 30-day return policy for all purchases made on our website. If you are not satisfied with your purchase, you may return it for a full refund within 30 days of the purchase date.'
            }
        ]
    },
    cart: [
        {
            productId:'1',
            name:'LOVELESS LILY',
            price: 6,
            quantity:1,
            total: 6,
            image:"/src/assets/images/flower5.jpg"
        },
        {
            productId:'2',
            name:'LAVENDER LONESOME',
            price: 6,
            quantity:2,
            total: 12,
            image:"/src/assets/images/flower6.jpg"
        },
        {
            productId:'3',
            name:'HEARTBREAK HYACINTHS',
            price: 6,
            quantity:3,
            total:18,
            image:"/src/assets/images/flower7.jpg"
        },
        {
            productId:'4',
            name:'HEARTBREAK HYACINTHS',
            price: 6,
            quantity:3,
            total: 18,
            image:"/src/assets/images/flower7.jpg"
        }
    ],

    states:[
        { label: "Alaska", value: "Alaska" },
        { label: "Alabama", value: "Alabama" },
        { label: "Arkansas", value: "Arkansas" },
        { label: "Arizona", value: "Arizona" },
        { label: "California", value: "California" },
        { label: "Colorado", value: "Colorado" },
        { label: "Connecticut", value: "Connecticut" },
        { label: "District of Columbia", value: "District of Columbia" },
        { label: "Delaware", value: "Delaware" },
        { label: "Florida", value: "Florida" },
        { label: "Georgia", value: "Georgia" },
        { label: "Hawaii", value: "Hawaii" },
        { label: "Iowa", value: "Iowa" },
        { label: "Idaho", value: "Idaho" },
        { label: "IL", value: "Illinois" },
        { label: "Illinois", value: "Indiana" },
        { label: "Kansas", value: "Kansas" },
        { label: "Kentucky", value: "Kentucky" },
        { label: "Louisiana", value: "Louisiana" },
        { label: "Massachusetts", value: "Massachusetts" },
        { label: "Maryland", value: "Maryland" },
        { label: "Maine", value: "Maine" },
        { label: "Michigan", value: "Michigan" },
        { label: "Minnesota", value: "Minnesota" },
        { label: "Missouri", value: "Missouri" },
        { label: "Mississippi", value: "Mississippi" },
        { label: "Montana", value: "Montana" },
        { label: "North Carolina", value: "North Carolina" },
        { label: "North Dakota", value: "North Dakota" },
        { label: "Nebraska", value: "Nebraska" },
        { label: "New Hampshire", value: "New Hampshire" },
        { label: "New Jersey", value: "New Jersey" },
        { label: "New Mexico", value: "New Mexico" },
        { label: "Nevada", value: "Nevada" },
        { label: "New York", value: "NewYork" },
        { label: "Ohio", value: "Ohio" },
        { label: "Oklahoma", value: "Oklahoma" },
        { label: "Oregon", value: "Oregon" },
        { label: "Pennsylvania", value: "Pennsylvania" },
        { label: "Rhode Island", value: "Rhode Island" },
        { label: "South Carolina", value: "South Carolina" },
        { label: "South Dakota", value: "South Dakota" },
        { label: "Tennessee", value: "Tennessee" },
        { label: "Texas", value: "Texas" },
        { label: "Utah", value: "Utah" },
        { label: "Virginia", value: "Virginia" },
        { label: "Vermont", value: "Vermont" },
        { label: "Washington", value: "Washington" },
        { label: "Wisconsin", value: "Wisconsin" },
        { label: "West Virginia", value: "West Virginia" },
        { label: "Wyoming", value: "Wyoming" }
    ]
}

export default data;



