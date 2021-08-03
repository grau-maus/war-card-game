# from werkzeug.security import generate_password_hash
from faker import Faker
from app.models import db, User

fake = Faker()


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo',
        email='demo@user.io',
        password='password'
    )

    db.session.add(demo)

    for _ in range(20):
        user_profile = fake.simple_profile()
        user = User(
            username=user_profile['username'],
            email=user_profile['mail'],
            password=fake.password(length=10)
        )

        db.session.add(user)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
