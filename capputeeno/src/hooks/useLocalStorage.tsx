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

    const getTotalPrice = () => {
        cartItems = localStorage.getItem(storage);
        
        let totalPrice = 0;

        if (cartItems) {
            let cartItemsArray = JSON.parse(cartItems);

            cartItemsArray.map(
                (item) => {
                    totalPrice += item.total_price
                }
            )
        }

        return totalPrice;
    }

    const getItems = () => {
        cartItems = localStorage.getItem(storage);

        if (cartItems) {
            const cartItemsArray = JSON.parse(cartItems);
            
            return cartItemsArray;
        } else {
            return [];
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

    const deleteItem = (
        id: string
    ) => {
        cartItems = localStorage.getItem(storage);

        if (cartItems) {
            const cartItemsArray = JSON.parse(cartItems);

            let indexItem = -1;

            cartItemsArray.map(
                (item, index) => {
                    if (item.id === id) {
                        indexItem = index;
                    }
                }
            )

            cartItemsArray.splice(indexItem, 1)

            localStorage.setItem(
                storage,
                JSON.stringify(cartItemsArray)
            )
        }
    }

    const updateTheQuantity = (
        newValue: Int16Array,
        id: string
    ) => {
        cartItems = localStorage.getItem(storage);

        if (cartItems) {
            const cartItemsArray = JSON.parse(cartItems);

            cartItemsArray.map(
                (item) => {
                    if (item.id === id) {
                        item.quantity = newValue;

                        item.total_price = item.price_in_cents * newValue
                    }
                }
            )

            localStorage.setItem(
                storage,
                JSON.stringify(cartItemsArray)
            )
        }
    }

    const completeThePurchase = () => {
        localStorage.removeItem(storage)
    }

    return {
        getCountItems,
        getTotalPrice,
        getItems,
        addItemToLocalStorage,
        deleteItem,
        updateTheQuantity,
        completeThePurchase
    }
}