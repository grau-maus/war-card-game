"""added cards and war model

Revision ID: baf0fa668cde
Revises: ffdc0a98111c
Create Date: 2021-07-27 18:28:06.310832

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'baf0fa668cde'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('cards',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('face', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('wars',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('player1_id', sa.Integer(), nullable=True),
    sa.Column('player2_id', sa.Integer(), nullable=True),
    sa.Column('player1_deck', sa.String(), nullable=True),
    sa.Column('player2_deck', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['player1_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['player2_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('wars')
    op.drop_table('cards')
    # ### end Alembic commands ###
