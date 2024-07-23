import React from 'react'
import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-top">
        <div className="container">
            <div className="footer-links">
                <div className="footer-column">
                    <h4>Get to Know Us</h4>
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About Amazon</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Amazon Devices</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Make Money with Us</h4>
                    <ul>
                        <li><a href="#">Sell on Amazon</a></li>
                        <li><a href="#">Sell Your Services on Amazon</a></li>
                        <li><a href="#">Sell on Amazon Business</a></li>
                        <li><a href="#">Sell Your Apps on Amazon</a></li>
                        <li><a href="#">Become an Affiliate</a></li>
                        <li><a href="#">Advertise Your Products</a></li>
                        <li><a href="#">Self-Publish with Us</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Amazon Payment Products</h4>
                    <ul>
                        <li><a href="#">Amazon Rewards Visa Signature Cards</a></li>
                        <li><a href="#">Amazon.com Store Card</a></li>
                        <li><a href="#">Amazon Business Card</a></li>
                        <li><a href="#">Amazon Business Line of Credit</a></li>
                        <li><a href="#">Shop with Points</a></li>
                        <li><a href="#">Credit Card Marketplace</a></li>
                        <li><a href="#">Reload Your Balance</a></li>
                        <li><a href="#">Amazon Currency Converter</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Let Us Help You</h4>
                    <ul>
                        <li><a href="#">Amazon and COVID-19</a></li>
                        <li><a href="#">Your Account</a></li>
                        <li><a href="#">Your Orders</a></li>
                        <li><a href="#">Shipping Rates & Policies</a></li>
                        <li><a href="#">Returns & Replacements</a></li>
                        <li><a href="#">Manage Your Content and Devices</a></li>
                        <li><a href="#">Amazon Assistant</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="container">
            <ul className="footer-bottom-links">
                <li><a href="#">Conditions of Use</a></li>
                <li><a href="#">Privacy Notice</a></li>
                <li><a href="#">Interest-Based Ads</a></li>
                <li><a href="#">© 2024, YourWebsite.com, Inc. or its affiliates</a></li>
            </ul>
        </div>
    </div>
</footer>
  )
}
