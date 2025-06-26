from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import hashlib

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    user_type = db.Column(db.String(20), nullable=False, default='buyer')  # buyer, seller, admin
    company_name = db.Column(db.String(200))
    contact_person = db.Column(db.String(100))
    phone = db.Column(db.String(20))
    address = db.Column(db.Text)
    verification_status = db.Column(db.String(20), default='pending')  # pending, verified, rejected
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    products = db.relationship('Product', backref='seller', lazy=True)
    orders_as_buyer = db.relationship('Order', foreign_keys='Order.buyer_id', backref='buyer', lazy=True)
    orders_as_seller = db.relationship('Order', foreign_keys='Order.seller_id', backref='seller', lazy=True)
    sent_messages = db.relationship('Message', foreign_keys='Message.sender_id', backref='sender', lazy=True)
    received_messages = db.relationship('Message', foreign_keys='Message.receiver_id', backref='receiver', lazy=True)

    def set_password(self, password):
        """Hash and set password using simple SHA256"""
        self.password_hash = hashlib.sha256(password.encode('utf-8')).hexdigest()

    def check_password(self, password):
        """Check if provided password matches hash"""
        return hashlib.sha256(password.encode('utf-8')).hexdigest() == self.password_hash

    def __repr__(self):
        return f'<User {self.email}>'

    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'user_type': self.user_type,
            'company_name': self.company_name,
            'contact_person': self.contact_person,
            'phone': self.phone,
            'address': self.address,
            'verification_status': self.verification_status,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }
