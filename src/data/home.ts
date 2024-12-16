import {Router} from "expo-router";

export default [
    {
        title: 'New Orders',
        onPress: (router: Router) => router.push('/(Session)/(Order)/new-orders'),
        color: 'bg-[#F44771]',
    },
    {
        title: 'My\nPosting',
        onPress: (router: Router) => router.push('/(Session)/(Tabs)/my-postings'),
        color: 'bg-[#FF9A3E]',
    },
    {
        title: 'My\nEarnings',
        onPress: (router: Router) => router.push('/(Session)/(Tabs)/earnings'),
        color: 'bg-[#227805]',
    },
    {
        title: 'Order\nHistory',
        onPress: (router: Router) => router.push('/(Session)/(Order)/order-history'),
        color: 'bg-[#58007B]',
    },
    {
        title: 'Customer\nFeedback',
        onPress: (router: Router) => router.push('/(Session)/(Review)/customer-feedback'),
        color: 'bg-[#9689FF]',
    },
    {
        title: 'Analytics and Reports',
        onPress: (router: Router) => router.push('/(Session)/(Analytics)/analytics'),
        color: 'bg-[#332A7C]',
    }
]
