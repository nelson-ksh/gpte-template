import React, { useState, useEffect } from 'react';
import { useWallet } from "@meshsdk/react";

export default function WalletStatus() {

    const { wallet, connected, connecting} = useWallet();



    if (connected == false) {
        return (
            <div className="container">
                <div className="wallet-status">
                    Wallet : Not Connected
                </div>
            </div>
        )
    }

    if (connecting) {
        return (
            <div className="container">
                <div className="wallet-status">
                    Connecting
                </div>
            </div>            
        )
    }

    const [changeAddress, setStringValue] = useState('');
    
    useEffect(() => {
      const fetchData = async () => {
        const result = await wallet.getChangeAddress();
        setStringValue(result);
      };
    
      fetchData();
    }, []);




    return (
        <div>
            {/* <button onClick={fetchChangeAddress}>hey</button> */}
            <div className="container">
                <div className="wallet-status">
                    Wallet : <code className="wallet-address">{changeAddress}</code>
                </div>
            </div>
        </div>
    );
  }