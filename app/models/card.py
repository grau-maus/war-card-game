from .db import db
from werkzeug.security import generate_password_hash, check_password_hash


class Card(db.Model):
    __tablename__ = 'cards'

    id = db.Column(db.Integer, primary_key=True)
    face = db.Column(db.String)
    image = db.Column(db.String)

    def to_dict(self):
        return {
            "id": self.id,
            "face": self.face,
            "image": self.image
        }
