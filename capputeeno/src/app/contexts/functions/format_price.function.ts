const FunctionFormatPrice = (
    price_in_cents: number
) => {
    const priceInReais = price_in_cents / 100;

    const formattedPrice = priceInReais.toLocaleString("pt-BR", {
        minimumFractionDigits: 2
    });

    return `R$ ${formattedPrice}`;
};

export default FunctionFormatPrice;