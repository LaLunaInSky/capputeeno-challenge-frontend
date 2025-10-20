export function useLocalStorage() {
    const storage = 'cart-items';
    
    let cartItems: string | null = null;

    const formatProduct = (
        product: undefined
    ) => {
        return {
            id: product.id,
            name: product.name,
            description: product.description,
            image_url: product.image_url,
            price_in_cents: product.price_in_cents
        }
    }

    const getCountItems = () => {
        cartItems = localStorage.getItem(storage);

        if (cartItems) {
            const cartItemsArray = JSON.parse(cartItems);
    
            let countItems = 0;
    
            if (cartItemsArray != null) {
                countItems = cartItemsArray.length;
            }
    
            return countItems;
        } else {
            return 0;
        }

    }

    const addItemToLocalStorage = (
        product: undefined
    ) => {    
        cartItems = localStorage.getItem(storage);

        if (
            cartItems
        ) { 
            const cartItemsArray = JSON.parse(cartItems);
            
            let existingProductIndex = -1;
            
            cartItemsArray.map(
                (element, index) => {
                if (element.id === product.id) {
                    existingProductIndex = index;
                }
            })
            
            if (
                existingProductIndex > -1
            ) {
                cartItemsArray[
                    existingProductIndex
                ].quantity += 1;

                cartItemsArray[
                    existingProductIndex
                ].total_price += cartItemsArray[
                    existingProductIndex
                ].price_in_cents
            } else {
                cartItemsArray.push(
                    {
                        ...formatProduct(product),
                        quantity: 1,
                        total_price: product.price_in_cents
                    }
                )
            }

            localStorage.setItem(
                storage, 
                JSON.stringify(
                    cartItemsArray
                )
            )

            cartItems = localStorage.getItem(storage);
        } else {
            const newCart = [
                {
                    ...formatProduct(product),
                    quantity: 1,
                    total_price: product.price_in_cents
                }
            ]

            localStorage.setItem(
                storage, 
                JSON.stringify(newCart)
            )

            cartItems = localStorage.getItem(storage);
        }
    }

    return {
        getCountItems,
        addItemToLocalStorage
    }
}