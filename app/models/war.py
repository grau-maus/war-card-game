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

    def p1_deck(self):
        return {
            "id": self.id,
            "deck": self.player1_deck,
            "p1PlayedCard": self.player1_played_card
        }

    def p2_deck(self):
        return {
            "id": self.id,
            "deck": self.player2_deck,
            "p2PlayedCard": self.player2_played_card
        }
