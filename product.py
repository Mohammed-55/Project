from src.models.user import db
from datetime import datetime

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    seller_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    price = db.Column(db.Float, nullable=False)
    min_order_quantity = db.Column(db.Integer, default=1)
    max_order_quantity = db.Column(db.Integer)
    unit = db.Column(db.String(50), default='piece')
    stock_quantity = db.Column(db.Integer, default=0)
    images = db.Column(db.Text)  # JSON string of image URLs
    specifications = db.Column(db.Text)  # JSON string of specifications
    status = db.Column(db.String(20), default='active')  # active, inactive, out_of_stock
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    orders = db.relationship('Order', backref='product', lazy=True)
    reviews = db.relationship('Review', backref='product', lazy=True)

    def __repr__(self):
        return f'<Product {self.title}>'

    def to_dict(self):
        return {
            'id': self.id,
            'seller_id': self.seller_id,
            'title': self.title,
            'description': self.description,
            'category_id': self.category_id,
            'price': self.price,
            'min_order_quantity': self.min_order_quantity,
            'max_order_quantity': self.max_order_quantity,
            'unit': self.unit,
            'stock_quantity': self.stock_quantity,
            'images': self.images,
            'specifications': self.specifications,
            'status': self.status,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    parent_category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    description = db.Column(db.Text)
    image = db.Column(db.String(255))

    # Relationships
    products = db.relationship('Product', backref='category', lazy=True)
    subcategories = db.relationship('Category', backref=db.backref('parent', remote_side=[id]), lazy=True)

    def __repr__(self):
        return f'<Category {self.name}>'

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'parent_category_id': self.parent_category_id,
            'description': self.description,
            'image': self.image
        }

