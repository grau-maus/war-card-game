from enum import unique
from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import db, Card, War
from faker import Faker

fake = Faker()
single_player_routes = Blueprint('singleplayer', __name__)


@single_player_routes.route('/', methods=['POST'])
@login_required
def new_game():
    cards = Card.query.all()
    json_cards = [str(card.id) for card in cards]
    shuffled_cards = fake.random_elements(
        elements=json_cards,
        length=len(json_cards),
        unique=True
    )

    new_war = War(
        player1_id=current_user.id,
        player2_id=None,
        player1_deck=','.join(shuffled_cards[0:26]),
        player2_deck=','.join(shuffled_cards[26:52])
    )

    db.session.add(new_war)
    db.session.commit()
    return new_war.to_dict()
