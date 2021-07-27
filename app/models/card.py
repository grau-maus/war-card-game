from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class Card(db.Model):
    __tablename__ = 'cards'

    id = db.Column(db.Integer, primary_key=True)
    face = db.Column(db.String)

    def to_dict(self):
        return {
            "id": self.id,
            "face": self.face,
        }
