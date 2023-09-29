import random


def generateCard():
	card = [[] for i in range(5)]

	for c in range(5):
		for r in range([5, 5, 4, 5, 5][c]):
			number = random.randint(0, 14)
			while number in card[c]:
				number = random.randint(0, 14)
			card[c].append(number)
		card[c].sort()

	card[2].insert(2, "null")
	return card


cards = [generateCard() for i in range(128)]
for card in cards:
	print("[" + ", ".join([
		"[" + ", ".join([
			str(number)
		for number in col]) + "]"
	for col in card]) + "]")
