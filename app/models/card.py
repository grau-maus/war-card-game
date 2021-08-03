from .db import db
from .war import War
from werkzeug.security import generate_password_hash, check_password_hash


class Card(db.Model):
    __tablename__ = 'cards'

    id = db.Column(db.Integer, primary_key=True)
    face = db.Column(db.String)
    image = db.Column(db.String)

    # associations
    user1_war_card = db.relationship(
        War,
        backref='war_card_user1',
        foreign_keys=[War.player1_played_card],
        cascade='all, delete'
    )
    user2_war_card = db.relationship(
        War,
        backref='war_card_user2',
        foreign_keys=[War.player2_played_card],
        cascade='all, delete'
    )

    # methods
    def to_dict(self):
        return {
            "id": self.id,
            "face": self.face,
            "image": self.image
        }
