import { useEffect, useState } from 'react';

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [purchaseAmount, setPurchaseAmount] = useState(0);
    const [selectCoinPrice, setSelectCoinPrice] = useState(1);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, [])

    return (
        <div>
            <h3>The coins {coins.length ? `(${coins.length})` : null}</h3>
            {loading && <strong>loading...</strong>}
            {!loading && <>
                <select onChange={(event) => setSelectCoinPrice(Number(event.target.value))}>
                    {
                        coins.map((coin, index) => (
                            <option key={index} value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>
                        ))
                    }
                </select>
                <input
                    value={purchaseAmount}
                    onChange={(event) => setPurchaseAmount(Number(event.target.value))}
                    type="number"
                    placeholder="Write purchase amount..."
                />
                <h3>You can purchase {Math.floor(purchaseAmount / selectCoinPrice)} coin</h3>
            </>}
        </div>
    )
}

export default CoinTracker;