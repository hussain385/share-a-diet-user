import dayjs from 'dayjs';

export const filters = ["All", "New (Order)", "Start Preparation", "Ready", "Pickup / Delivered", "Cancelled"]
export const OrdersArray = [
    {
        picture: "https://s3-alpha-sig.figma.com/img/7745/e67f/aaa231e1fb67707d07040f3c29a761b6?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QnaP-fCFRO26V7eN8jLFhZu0cOLfeS7~6YvZO-eMmaQb-ixns3fQ3PWxRplQuLt-iw8SMhTSf6T~qvLzgGorBGoI9xNO18wrf~mY0DRufU7TlIC2LVFt0cwwc7zMlQt2~E17TC5vlLjw4E~pZNiUSGMFM66jvw1dQlFP5LxIOmB9IOUWjfsk~~hyr7iJy0Epbx8wCLQtpRrltWXewd5Kpvq-C~ptv1-Mld1VOIDxHKIiwUyD~pmGvzfSTvGTYY5GhbnvGzGiq0EvBUB02J0FyeGYpAmK8M6bFfNPiu1yAdXLdrNXuCM7OOsA7rgw2sf7QjsqoXAMVTYFE52cJUGoJA__",
        orderId: '18361',
        date: dayjs(new Date()).format('mmm dd, yyyy'),
        user: {
            name: "Sying Ku",
            avatar: "https://s3-alpha-sig.figma.com/img/d3b2/1420/be0c601433a270f2eab8f555d444da52?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LbLXdMLDCpfKWd6AJfAqrBbjddPSfiH6mFrsPJWUmPz-b622sF7yR2hUgJypm-B30yY~IDKoqaTOeTrK84LZUeJe9Gmt4dN2pkRI5mqluWZ4mqbEValge59GUSH~yObbxKZ8WFv9Vj96rl9bcepJ6tTENMgHfjKw3euF~gjcFw~QIKJlyNPHwsv0rLDrkdW~OiISIA-0p2NoyTDVEfSGq09JZH4iSzgStWBPmwBwB0vORpcG8ywH0kMY00BRyxdiKj2FvqHL1KS5hOAo6~EwYtACLcWvtkBVypFDa7RskvACqGrw~JX1Wn3QWawvKXdvWBR7HA~vuUD-OwP9UY-~2Q__",
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
        dinningOptions: "Delivery"
    },
    {
        picture: "https://s3-alpha-sig.figma.com/img/7745/e67f/aaa231e1fb67707d07040f3c29a761b6?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QnaP-fCFRO26V7eN8jLFhZu0cOLfeS7~6YvZO-eMmaQb-ixns3fQ3PWxRplQuLt-iw8SMhTSf6T~qvLzgGorBGoI9xNO18wrf~mY0DRufU7TlIC2LVFt0cwwc7zMlQt2~E17TC5vlLjw4E~pZNiUSGMFM66jvw1dQlFP5LxIOmB9IOUWjfsk~~hyr7iJy0Epbx8wCLQtpRrltWXewd5Kpvq-C~ptv1-Mld1VOIDxHKIiwUyD~pmGvzfSTvGTYY5GhbnvGzGiq0EvBUB02J0FyeGYpAmK8M6bFfNPiu1yAdXLdrNXuCM7OOsA7rgw2sf7QjsqoXAMVTYFE52cJUGoJA__",
        orderId: '18362',
        date: dayjs(new Date()).format('mmm dd, yyyy'),
        user: {
            name: "Sying Ku",
            avatar: "https://s3-alpha-sig.figma.com/img/d3b2/1420/be0c601433a270f2eab8f555d444da52?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LbLXdMLDCpfKWd6AJfAqrBbjddPSfiH6mFrsPJWUmPz-b622sF7yR2hUgJypm-B30yY~IDKoqaTOeTrK84LZUeJe9Gmt4dN2pkRI5mqluWZ4mqbEValge59GUSH~yObbxKZ8WFv9Vj96rl9bcepJ6tTENMgHfjKw3euF~gjcFw~QIKJlyNPHwsv0rLDrkdW~OiISIA-0p2NoyTDVEfSGq09JZH4iSzgStWBPmwBwB0vORpcG8ywH0kMY00BRyxdiKj2FvqHL1KS5hOAo6~EwYtACLcWvtkBVypFDa7RskvACqGrw~JX1Wn3QWawvKXdvWBR7HA~vuUD-OwP9UY-~2Q__",
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
        dinningOptions: "Delivery"
    },
    {
        picture: "https://s3-alpha-sig.figma.com/img/7745/e67f/aaa231e1fb67707d07040f3c29a761b6?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QnaP-fCFRO26V7eN8jLFhZu0cOLfeS7~6YvZO-eMmaQb-ixns3fQ3PWxRplQuLt-iw8SMhTSf6T~qvLzgGorBGoI9xNO18wrf~mY0DRufU7TlIC2LVFt0cwwc7zMlQt2~E17TC5vlLjw4E~pZNiUSGMFM66jvw1dQlFP5LxIOmB9IOUWjfsk~~hyr7iJy0Epbx8wCLQtpRrltWXewd5Kpvq-C~ptv1-Mld1VOIDxHKIiwUyD~pmGvzfSTvGTYY5GhbnvGzGiq0EvBUB02J0FyeGYpAmK8M6bFfNPiu1yAdXLdrNXuCM7OOsA7rgw2sf7QjsqoXAMVTYFE52cJUGoJA__",
        orderId: '18363',
        date: dayjs(new Date()).format('mmm dd, yyyy'),
        user: {
            name: "Sying Ku",
            avatar: "https://s3-alpha-sig.figma.com/img/d3b2/1420/be0c601433a270f2eab8f555d444da52?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LbLXdMLDCpfKWd6AJfAqrBbjddPSfiH6mFrsPJWUmPz-b622sF7yR2hUgJypm-B30yY~IDKoqaTOeTrK84LZUeJe9Gmt4dN2pkRI5mqluWZ4mqbEValge59GUSH~yObbxKZ8WFv9Vj96rl9bcepJ6tTENMgHfjKw3euF~gjcFw~QIKJlyNPHwsv0rLDrkdW~OiISIA-0p2NoyTDVEfSGq09JZH4iSzgStWBPmwBwB0vORpcG8ywH0kMY00BRyxdiKj2FvqHL1KS5hOAo6~EwYtACLcWvtkBVypFDa7RskvACqGrw~JX1Wn3QWawvKXdvWBR7HA~vuUD-OwP9UY-~2Q__",
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
        dinningOptions: "Delivery"
    },
    {
        picture: "https://s3-alpha-sig.figma.com/img/7745/e67f/aaa231e1fb67707d07040f3c29a761b6?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QnaP-fCFRO26V7eN8jLFhZu0cOLfeS7~6YvZO-eMmaQb-ixns3fQ3PWxRplQuLt-iw8SMhTSf6T~qvLzgGorBGoI9xNO18wrf~mY0DRufU7TlIC2LVFt0cwwc7zMlQt2~E17TC5vlLjw4E~pZNiUSGMFM66jvw1dQlFP5LxIOmB9IOUWjfsk~~hyr7iJy0Epbx8wCLQtpRrltWXewd5Kpvq-C~ptv1-Mld1VOIDxHKIiwUyD~pmGvzfSTvGTYY5GhbnvGzGiq0EvBUB02J0FyeGYpAmK8M6bFfNPiu1yAdXLdrNXuCM7OOsA7rgw2sf7QjsqoXAMVTYFE52cJUGoJA__",
        orderId: '18364',
        date: dayjs(new Date()).format('mmm dd, yyyy'),
        user: {
            name: "Sying Ku",
            avatar: "https://s3-alpha-sig.figma.com/img/d3b2/1420/be0c601433a270f2eab8f555d444da52?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LbLXdMLDCpfKWd6AJfAqrBbjddPSfiH6mFrsPJWUmPz-b622sF7yR2hUgJypm-B30yY~IDKoqaTOeTrK84LZUeJe9Gmt4dN2pkRI5mqluWZ4mqbEValge59GUSH~yObbxKZ8WFv9Vj96rl9bcepJ6tTENMgHfjKw3euF~gjcFw~QIKJlyNPHwsv0rLDrkdW~OiISIA-0p2NoyTDVEfSGq09JZH4iSzgStWBPmwBwB0vORpcG8ywH0kMY00BRyxdiKj2FvqHL1KS5hOAo6~EwYtACLcWvtkBVypFDa7RskvACqGrw~JX1Wn3QWawvKXdvWBR7HA~vuUD-OwP9UY-~2Q__",
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
        dinningOptions: "Delivery"
    }
]
