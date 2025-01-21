import dayjs from 'dayjs';

export const filters = ["All", "New (Order)", "Start Preparation", "Ready", "Pickup / Delivered", "Cancelled"]
export const OrdersArray = [
    {
        picture: require('@/assets/images/burger.jpg'),
        orderId: '18061',
        date: dayjs(new Date()).format('MMM DD, YYYY'),
        user: {
            name: "Sying Ku",
            avatar: require('@/assets/images/user.jpg'),
            distance: 25
        },
        itemName: "Chicken Noodle Soup",
        quantity: 3,
        totalPrice: 12.00,
        specialInstructions: "No onions please",
        estimatedTime: 45,
        foodAllergy: "Chillli Sauce",
        paymentMethod: "Credit Card",
        paymentStatus: "Completed",
        dinningOptions: "Delivery",
        orderStatus: "New"
    },
    {
        picture: require('@/assets/images/burger.jpg'),
        orderId: '18361',
        date: dayjs(new Date()).format('MMM DD, YYYY'),
        user: {
            name: "Sying Ku",
            avatar: require('@/assets/images/user.jpg'),
            distance: 25
        },
        itemName: "Chicken Noodle Soup",
        quantity: 3,
        totalPrice: 12.00,
        specialInstructions: "No onions please",
        estimatedTime: 45,
        foodAllergy: "Chillli Sauce",
        paymentMethod: "Credit Card",
        paymentStatus: "Completed",
        dinningOptions: "Delivery",
        orderStatus: "Ready"
    },
    {
        picture: require('@/assets/images/burger.jpg'),
        orderId: '18362',
        date: dayjs(new Date()).format('MMM DD, YYYY'),
        user: {
            name: "Sying Ku",
            avatar: require('@/assets/images/user.jpg'),
            distance: 25
        },
        itemName: "Chicken Noodle Soup",
        quantity: 3,
        totalPrice: 12.00,
        specialInstructions: "No onions please",
        estimatedTime: 45,
        foodAllergy: "Chillli Sauce",
        paymentMethod: "Credit Card",
        paymentStatus: "Completed",
        dinningOptions: "Delivery",
        orderStatus: "Preparing"
    },
    {
        picture: require('@/assets/images/burger.jpg'),
        orderId: '18363',
        date: dayjs(new Date()).format('MMM DD, YYYY'),
        user: {
            name: "Sying Ku",
            avatar: require('@/assets/images/user.jpg'),
            distance: 25
        },
        itemName: "Chicken Noodle Soup",
        quantity: 3,
        totalPrice: 12.00,
        specialInstructions: "No onions please",
        estimatedTime: 45,
        foodAllergy: "Chillli Sauce",
        paymentMethod: "Credit Card",
        paymentStatus: "Completed",
        dinningOptions: "Pickup",
        orderStatus: "Delivered"
    },
    {
        picture: require('@/assets/images/burger.jpg'),
        orderId: '18364',
        date: dayjs(new Date()).format('MMM DD, YYYY'),
        user: {
            name: "Sying Ku",
            avatar: require('@/assets/images/user.jpg'),
            distance: 25
        },
        itemName: "Chicken Noodle Soup",
        quantity: 3,
        totalPrice: 12.00,
        specialInstructions: "No onions please",
        estimatedTime: 45,
        foodAllergy: "Chillli Sauce",
        paymentMethod: "Credit Card",
        paymentStatus: "Completed",
        dinningOptions: "Pickup",
        orderStatus: "Cancelled"
    }
]
