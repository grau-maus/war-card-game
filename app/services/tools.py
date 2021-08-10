from faker import Faker

fake = Faker()


def parse_rank_to_int(rank):
    if rank == 'J':
        return 11
    elif rank == 'Q':
        return 12
    elif rank == 'K':
        return 13
    elif rank == 'A':
        return 14
    else:
        return int(rank)


def skirmish(deck, cards):
    for card in cards:
        deck.append(str(card))
    deck = fake.random_elements(
        elements=deck,
        length=len(deck),
        unique=True
    )
    return deck
