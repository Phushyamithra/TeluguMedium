import React from 'react';
import '../../styles/accountpage.css';
import TemplatePage from './TemplatePage';
import bg from '../../Assets/bg/wall1.jpg'
const AccountPage = () => {
  return (
    <TemplatePage src={bg} type='image'>
      <div className="account-page-container">
        {/* Orders Section */}
        <div className="orders-section">
          <h2 className="heading">Your Orders</h2>
          <ul className="orders-list">
            <li className="order-item">
              <h3 className="order-title">Order #12345</h3>
              <p className="order-date">Placed on: 2023-06-15</p>
              <p className="order-total">Total: $150.00</p>
            </li>
            <li className="order-item">
              <h3 className="order-title">Order #12346</h3>
              <p className="order-date">Placed on: 2023-05-20</p>
              <p className="order-total">Total: $220.00</p>
            </li>
            {/* Add more orders as needed */}
          </ul>
        </div>

        {/* Account Details Section */}
        <div className="account-details-section">
          <h2 className="heading">Account Details</h2>
          <div className="account-details">
            <div className="detail-item">
              <label className="detail-label">Name</label>
              <input
                type="text"
                value="John Doe"
                readOnly
                className="input-field"
              />
            </div>
            <div className="detail-item">
              <label className="detail-label">Email</label>
              <input
                type="email"
                value="john.doe@example.com"
                readOnly
                className="input-field"
              />
            </div>
            <div className="detail-item">
              <label className="detail-label">Phone Number</label>
              <input
                type="tel"
                value="+1234567890"
                readOnly
                className="input-field"
              />
            </div>
            <div className="detail-item">
              <label className="detail-label">Address</label>
              <textarea
                value="123 Main St, Springfield, IL"
                readOnly
                className="input-field"
              />
            </div>
            <button className='button-class'>Update details</button>
            {/* Add more account details as needed */}
          </div>
        </div>
      </div>
    </TemplatePage >
  );
};

export default AccountPage;
