from faker import Faker
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Card, War
from app.services.tools import parse_rank_to_int, skirmish

fake = Faker()
single_player_routes = Blueprint('singleplayer', __name__)


@single_player_routes.route('/newgame/', methods=['POST'])
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


@single_player_routes.route('/loadgame/', methods=['POST'])
@login_required
def load_game():
    games = War.query.filter(
        War.player1_id == current_user.id,
        War.player2_id == None
    ).order_by(War.id.desc()).all()
    json_games = [game.to_dict() for game in games]

    return jsonify(json_games)


@single_player_routes.route('/draw/', methods=['POST'])
@login_required
def draw_card():
    game = War.query.get(request.form['game_id'])
    player1_deck = game.player1_deck.split(',')
    player2_deck = game.player2_deck.split(',')
    player1_played_card = Card.query.get(int(player1_deck.pop()))
    player2_played_card = Card.query.get(int(player2_deck.pop()))
    player1_card_value = parse_rank_to_int(
        player1_played_card.face.split('-')[0])
    player2_card_value = parse_rank_to_int(
        player2_played_card.face.split('-')[0])

    if player1_card_value > player2_card_value:
        player1_deck = skirmish(
            player1_deck,
            [player1_played_card.id, player2_played_card.id]
        )
    elif player1_card_value < player2_card_value:
        player2_deck = skirmish(
            player2_deck,
            [player2_played_card.id, player1_played_card.id]
        )
    else:
        player1_draw_3_face_down = []
        player2_draw_3_face_down = []
        while player1_card_value == player2_card_value and (len(player1_deck) > 0 and len(player2_deck) > 0):
            for _ in range(3):
                if len(player1_deck) > 1:
                    player1_draw_3_face_down.append(player1_deck.pop())
            for _ in range(3):
                if len(player2_deck) > 1:
                    player2_draw_3_face_down.append(player2_deck.pop())
            if len(player1_deck) > 0:
                player1_played_card = Card.query.get(int(player1_deck.pop()))
                player1_card_value = parse_rank_to_int(
                    player1_played_card.face.split('-')[0])
            if len(player2_deck) > 0:
                player2_played_card = Card.query.get(int(player2_deck.pop()))
                player2_card_value = parse_rank_to_int(
                    player2_played_card.face.split('-')[0])

            if player1_card_value > player2_card_value:
                for card_id in player1_draw_3_face_down:
                    player1_deck.append(card_id)
                for card_id in player2_draw_3_face_down:
                    player1_deck.append(card_id)
                player1_deck = skirmish(
                    player1_deck,
                    [player1_played_card.id, player2_played_card.id]
                )
            elif player1_card_value < player2_card_value:
                for card_id in player1_draw_3_face_down:
                    player2_deck.append(card_id)
                for card_id in player2_draw_3_face_down:
                    player2_deck.append(card_id)
                player2_deck = skirmish(
                    player2_deck,
                    [player2_played_card.id, player1_played_card.id]
                )

    # db.session.commit()
    return jsonify([player1_deck, player2_deck, player1_played_card.to_dict(), player2_played_card.to_dict(), player1_card_value, player2_card_value, request.form["user_id"]])
