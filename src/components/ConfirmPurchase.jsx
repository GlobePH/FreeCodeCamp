import React from 'react'
import SellerCustomerMap from './SellerCustomerMap';

const ConfirmPurchase = () => {
  return (
    <div>
      <SellerCustomerMap
        containerElement={
        <div style={{ height: '100%' }} />
      }
      mapElement={
        <div style={{ height: '100%' }} />
      }
      onMapLoad={e => e}
      onMapClick={e => e}
      markers={[{ lat: 14.535058, lng: 120.98213199999998 }, { lat: 14.7010556, lng: 120.9830225 }]}
      onMarkerRightClick={e => e}
      />
    </div>
  )
}

export default ConfirmPurchase
