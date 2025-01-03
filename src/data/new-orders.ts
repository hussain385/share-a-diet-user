import dayjs from 'dayjs';

export const filters = ["All", "New (Order)", "Start Preparation", "Ready", "Pickup / Delivered", "Cancelled"]
export const OrdersArray = [
    {
        picture: "https://s3-alpha-sig.figma.com/img/7745/e67f/aaa231e1fb67707d07040f3c29a761b6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T1QGJO75P~uhEDshTYkMf8YmWBA1QQV3NeA~vkG58wQ~PoCx7ga1fz66aSPm9va5cPHKWl4tg1lvBC~bn61-nNwWahyQ~b2kuJnP0ze-yVLULZ-E-RjCdcMA5Lym35MCstdWcqk5RHV7sKll6c9sr5TjXWqN39taoCO7cyKuu6T9QCtgsu3ujolL3q6TdfUHgWuqrVD-cPB4E~rjneGBaSquo2eqjw42EDLSmAoOZdGehDGF~Ybr0OOcv6zoI8HhBpEJWTzy7a~ZdGjD3VNgSkpUTEPeT9IAGZEFwsuMqSOiXcO4znRhCBTGgwfdCAlHS59DMXpoC903jqfs4bLwwA__",
        orderId: '18361',
        date: dayjs(new Date()).format('mmm dd, yyyy'),
        user: {
            name: "Sying Ku",
            avatar: "https://s3-alpha-sig.figma.com/img/d3b2/1420/be0c601433a270f2eab8f555d444da52?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nd-qJE3iu63K2gVltECJ4lY4ylKr8Z5dSR4Gl6ISHsjup3nybyEpMGH98YIPAkteWyXdL6YWVhm9TodM54Re8iAVweykE8z5OfRtMmoECh70sK8E1M3HPJl7~3k01G-xBa7ZneGtNHn1g5KlojIh9ovBem6ruKyYKhBNGRd4HxzTbihRj-3EsJ2aBM-XqXswY~2B4nn0~Ejo49vpS4RWBI1xqp1Vug2BAZZcsvI~1t-O5l01cFMSCPOLtETER2DWn4m0MUBJsL8CDYxk~0~-VmDyEv~76xivAOrps4whpI0T0cT31GGuqnCBat1hPZtoBlDcyVqPA3br9-~Elf1d6Q__",
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
        picture: "https://s3-alpha-sig.figma.com/img/7745/e67f/aaa231e1fb67707d07040f3c29a761b6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T1QGJO75P~uhEDshTYkMf8YmWBA1QQV3NeA~vkG58wQ~PoCx7ga1fz66aSPm9va5cPHKWl4tg1lvBC~bn61-nNwWahyQ~b2kuJnP0ze-yVLULZ-E-RjCdcMA5Lym35MCstdWcqk5RHV7sKll6c9sr5TjXWqN39taoCO7cyKuu6T9QCtgsu3ujolL3q6TdfUHgWuqrVD-cPB4E~rjneGBaSquo2eqjw42EDLSmAoOZdGehDGF~Ybr0OOcv6zoI8HhBpEJWTzy7a~ZdGjD3VNgSkpUTEPeT9IAGZEFwsuMqSOiXcO4znRhCBTGgwfdCAlHS59DMXpoC903jqfs4bLwwA__",
        orderId: '18362',
        date: dayjs(new Date()).format('mmm dd, yyyy'),
        user: {
            name: "Sying Ku",
            avatar: "https://s3-alpha-sig.figma.com/img/d3b2/1420/be0c601433a270f2eab8f555d444da52?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nd-qJE3iu63K2gVltECJ4lY4ylKr8Z5dSR4Gl6ISHsjup3nybyEpMGH98YIPAkteWyXdL6YWVhm9TodM54Re8iAVweykE8z5OfRtMmoECh70sK8E1M3HPJl7~3k01G-xBa7ZneGtNHn1g5KlojIh9ovBem6ruKyYKhBNGRd4HxzTbihRj-3EsJ2aBM-XqXswY~2B4nn0~Ejo49vpS4RWBI1xqp1Vug2BAZZcsvI~1t-O5l01cFMSCPOLtETER2DWn4m0MUBJsL8CDYxk~0~-VmDyEv~76xivAOrps4whpI0T0cT31GGuqnCBat1hPZtoBlDcyVqPA3br9-~Elf1d6Q__",
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
        picture: "https://s3-alpha-sig.figma.com/img/7745/e67f/aaa231e1fb67707d07040f3c29a761b6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T1QGJO75P~uhEDshTYkMf8YmWBA1QQV3NeA~vkG58wQ~PoCx7ga1fz66aSPm9va5cPHKWl4tg1lvBC~bn61-nNwWahyQ~b2kuJnP0ze-yVLULZ-E-RjCdcMA5Lym35MCstdWcqk5RHV7sKll6c9sr5TjXWqN39taoCO7cyKuu6T9QCtgsu3ujolL3q6TdfUHgWuqrVD-cPB4E~rjneGBaSquo2eqjw42EDLSmAoOZdGehDGF~Ybr0OOcv6zoI8HhBpEJWTzy7a~ZdGjD3VNgSkpUTEPeT9IAGZEFwsuMqSOiXcO4znRhCBTGgwfdCAlHS59DMXpoC903jqfs4bLwwA__",
        orderId: '18363',
        date: dayjs(new Date()).format('mmm dd, yyyy'),
        user: {
            name: "Sying Ku",
            avatar: "https://s3-alpha-sig.figma.com/img/d3b2/1420/be0c601433a270f2eab8f555d444da52?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nd-qJE3iu63K2gVltECJ4lY4ylKr8Z5dSR4Gl6ISHsjup3nybyEpMGH98YIPAkteWyXdL6YWVhm9TodM54Re8iAVweykE8z5OfRtMmoECh70sK8E1M3HPJl7~3k01G-xBa7ZneGtNHn1g5KlojIh9ovBem6ruKyYKhBNGRd4HxzTbihRj-3EsJ2aBM-XqXswY~2B4nn0~Ejo49vpS4RWBI1xqp1Vug2BAZZcsvI~1t-O5l01cFMSCPOLtETER2DWn4m0MUBJsL8CDYxk~0~-VmDyEv~76xivAOrps4whpI0T0cT31GGuqnCBat1hPZtoBlDcyVqPA3br9-~Elf1d6Q__",
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
        picture: "https://s3-alpha-sig.figma.com/img/7745/e67f/aaa231e1fb67707d07040f3c29a761b6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T1QGJO75P~uhEDshTYkMf8YmWBA1QQV3NeA~vkG58wQ~PoCx7ga1fz66aSPm9va5cPHKWl4tg1lvBC~bn61-nNwWahyQ~b2kuJnP0ze-yVLULZ-E-RjCdcMA5Lym35MCstdWcqk5RHV7sKll6c9sr5TjXWqN39taoCO7cyKuu6T9QCtgsu3ujolL3q6TdfUHgWuqrVD-cPB4E~rjneGBaSquo2eqjw42EDLSmAoOZdGehDGF~Ybr0OOcv6zoI8HhBpEJWTzy7a~ZdGjD3VNgSkpUTEPeT9IAGZEFwsuMqSOiXcO4znRhCBTGgwfdCAlHS59DMXpoC903jqfs4bLwwA__",
        orderId: '18364',
        date: dayjs(new Date()).format('mmm dd, yyyy'),
        user: {
            name: "Sying Ku",
            avatar: "https://s3-alpha-sig.figma.com/img/d3b2/1420/be0c601433a270f2eab8f555d444da52?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nd-qJE3iu63K2gVltECJ4lY4ylKr8Z5dSR4Gl6ISHsjup3nybyEpMGH98YIPAkteWyXdL6YWVhm9TodM54Re8iAVweykE8z5OfRtMmoECh70sK8E1M3HPJl7~3k01G-xBa7ZneGtNHn1g5KlojIh9ovBem6ruKyYKhBNGRd4HxzTbihRj-3EsJ2aBM-XqXswY~2B4nn0~Ejo49vpS4RWBI1xqp1Vug2BAZZcsvI~1t-O5l01cFMSCPOLtETER2DWn4m0MUBJsL8CDYxk~0~-VmDyEv~76xivAOrps4whpI0T0cT31GGuqnCBat1hPZtoBlDcyVqPA3br9-~Elf1d6Q__",
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
