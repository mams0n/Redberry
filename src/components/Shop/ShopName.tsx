import CIcon from 'components/Icon/Icon'
import { useState, useEffect } from 'react'


const ShopName = (shop) => {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setCopied(false)
        }, 3500)
    }, [copied])
    console.log(shop, 'shop')
    return (
        <>
            <CIcon
                filename={copied ? 'success-tick' : 'copy'}
                onClick={() => {
                    setTimeout(() => {
                        <CIcon filename='copy' />
                    }, 1000)
                    setCopied(true)
                    navigator.clipboard.writeText(shop?.shop?.shop_name)
                }}
            />
        </>
    )
}

export default ShopName