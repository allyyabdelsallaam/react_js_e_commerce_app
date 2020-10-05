import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HYzGxE6O26Xsl2MnDAM6n3mIRA6AttdVDuwXFTU3dFo0S7CPu9Kx1zIG3UsSTvU6WooflDkMdlQdynGQEGFv32f0026zRsRwh';

    const onToken = token => alert('Payment Successful')

    return (
        <StripeCheckout
            label="Pay Now"
            name="ABC Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;