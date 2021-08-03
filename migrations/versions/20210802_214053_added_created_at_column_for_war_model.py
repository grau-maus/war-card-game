"""added 'created_at' column for 'War' model

Revision ID: 249cdde0a880
Revises: 85b5aad4a6e3
Create Date: 2021-08-02 21:40:53.985096

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '249cdde0a880'
down_revision = '85b5aad4a6e3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('wars', sa.Column('created_at', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('wars', 'created_at')
    # ### end Alembic commands ###