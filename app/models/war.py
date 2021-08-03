from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class War(db.Model):
    __tablename__ = 'wars'

    id = db.Column(db.Integer, primary_key=True)
    player1_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    player2_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    player1_deck = db.Column(db.String)
    player2_deck = db.Column(db.String)
    player1_played_card = db.Column(db.String)
    player2_played_card = db.Column(db.String)

    def to_dict(self):
        return {
            "id": self.id,
            "player1": self.player1_id,
            "player2": self.player2_id
        }

    def p1_deck(self):
        return {
            "id": self.id,
            "deck": [int(id) for id in self.player1_deck.split(',')],
            "p1PlayedCard": self.player1_played_card
        }

    def p2_deck(self):
        return {
            "id": self.id,
            "deck": [int(id) for id in self.player2_deck.split(',')],
            "p2PlayedCard": self.player2_played_card
        }
