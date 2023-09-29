import random

for card in range(128):
	numbers = [[] for i in range(5)]
	for c in range(5):
		for r in range(5):
			number = random.randint(0, 14)
			while number in numbers[c]:
				number = random.randint(0, 14)
			numbers[c].append(number)
		numbers[c].sort()
	print(numbers)
