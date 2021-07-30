# from werkzeug.security import generate_password_hash
from app.models import db, Card

cards = [
    'A-C',
    'A-D',
    'A-H',
    'A-S',
    '2-C',
    '2-D',
    '2-H',
    '2-S',
    '3-C',
    '3-D',
    '3-H',
    '3-S',
    '4-C',
    '4-D',
    '4-H',
    '4-S',
    '5-C',
    '5-D',
    '5-H',
    '5-S',
    '6-C',
    '6-D',
    '6-H',
    '6-S',
    '7-C',
    '7-D',
    '7-H',
    '7-S',
    '8-C',
    '8-D',
    '8-H',
    '8-S',
    '9-C',
    '9-D',
    '9-H',
    '9-S',
    '10-C',
    '10-D',
    '10-H',
    '10-S',
    'J-C',
    'J-D',
    'J-H',
    'J-S',
    'Q-C',
    'Q-D',
    'Q-H',
    'Q-S',
    'K-C',
    'K-D',
    'K-H',
    'K-S',
]

cards_img = [
    "../../images/cards/AC.png",
    "../../images/cards/AD.png",
    "../../images/cards/AH.png",
    "../../images/cards/AS.png",
    "../../images/cards/2C.png",
    "../../images/cards/2D.png",
    "../../images/cards/2H.png",
    "../../images/cards/2S.png",
    "../../images/cards/3C.png",
    "../../images/cards/3D.png",
    "../../images/cards/3H.png",
    "../../images/cards/3S.png",
    "../../images/cards/4C.png",
    "../../images/cards/4D.png",
    "../../images/cards/4H.png",
    "../../images/cards/4S.png",
    "../../images/cards/5C.png",
    "../../images/cards/5D.png",
    "../../images/cards/5H.png",
    "../../images/cards/5S.png",
    "../../images/cards/6C.png",
    "../../images/cards/6D.png",
    "../../images/cards/6H.png",
    "../../images/cards/6S.png",
    "../../images/cards/7C.png",
    "../../images/cards/7D.png",
    "../../images/cards/7H.png",
    "../../images/cards/7S.png",
    "../../images/cards/8C.png",
    "../../images/cards/8D.png",
    "../../images/cards/8H.png",
    "../../images/cards/8S.png",
    "../../images/cards/9C.png",
    "../../images/cards/9D.png",
    "../../images/cards/9H.png",
    "../../images/cards/9S.png",
    "../../images/cards/10C.png",
    "../../images/cards/10D.png",
    "../../images/cards/10H.png",
    "../../images/cards/10S.png",
    "../../images/cards/JC.png",
    "../../images/cards/JD.png",
    "../../images/cards/JH.png",
    "../../images/cards/JS.png",
    "../../images/cards/QC.png",
    "../../images/cards/QD.png",
    "../../images/cards/QH.png",
    "../../images/cards/QS.png",
    "../../images/cards/KC.png",
    "../../images/cards/KD.png",
    "../../images/cards/KH.png",
    "../../images/cards/KS.png",
]


def seed_cards():
    for i in range(len(cards)):
        card = Card(face=cards[i], image=cards_img[i])
        db.session.add(card)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the cards table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_cards():
    db.session.execute('TRUNCATE cards RESTART IDENTITY CASCADE;')
    db.session.commit()
