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


def seed_cards():
    for value in cards:
        card = Card(face=value)
        db.session.add(card)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the cards table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_cards():
    db.session.execute('TRUNCATE cards RESTART IDENTITY CASCADE;')
    db.session.commit()
