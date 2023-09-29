questions = [
	// B
	[
		["\\frac{d}{dx} \\left( x^4 \\right)", "4x^3"],
		["\\frac{d}{dx} \\left( x^5 \\right)", "5x^4"],
		["\\frac{d}{dx} \\left( x^8 \\right)", "8x^7"],
		["\\frac{d}{dx} \\left( x^{100} \\right)", "100x^{99}"],
		["\\frac{d}{dx} \\left( 2x \\right)", "2"],
		["\\frac{d}{dx} \\left( -11x \\right)", "-11"],
		["\\frac{d}{dx} \\left( 9x^2 \\right)", "18x"],
		["\\frac{d}{dx} \\left( 15x^2 \\right)", "30x"],
		["\\frac{d}{dx} \\left( 10x^3 \\right)", "30x^2"],
		["\\frac{d}{dx} \\left( -2x^4 \\right)", "-8x^3"],
		["\\frac{d}{dx} \\left( \\sin x \\right)", "\\cos x"],
		["\\frac{d}{dx} \\left( \\cos x \\right)", "-\\sin x"],
		["\\frac{d}{dx} \\left( 3e^x \\right)", "3e^x"],
		["\\frac{d}{dx} \\left( -2e^x \\right)", "-2e^x"],
		["\\frac{d}{dx} \\left( \\pi^3 \\right)", "0"]
	],

	// I
	[
		["\\frac{d}{dx} \\left( x^3 + 2x^2 - 4x + 5 \\right)", "3x^2 + 4x - 4"],
		["\\frac{d}{dx} \\left( 2x^4 - 3x^2 + 1 \\right)", "8x^3 - 6x"],
		["\\frac{d}{dx} \\left( \\frac{3}{x} \\right)", "-\\frac{3}{x^2}"],
		["\\frac{d}{dx} \\left( x^{-1/2} \\right)", "-\\frac{1}{2} x^{-3/2}"],
		["\\frac{d}{dx} \\left( 3x^2 + \\frac{2}{x} \\right)", "6x - \\frac{2}{x^2}"],
		["\\frac{d}{dx} \\left( -8x^3 + 19x \\right)", "-24x^2 + 19"],
		["\\frac{d}{dx} \\left( 2x^2 + 5e^x \\right)", "4x + 5e^x"],
		["\\frac{d}{dx} \\left( 7 \\sin x - \\cos x \\right)", "7 \\cos x + \\sin x"],
		["\\frac{d}{dx} \\left( 5 \\cos x + 8x \\right)", "-5 \\sin x + 8"],
		["\\frac{d}{dx} \\left( \\cos x + 2e^x \\right)", "-\\sin x + 2e^x"],
		["\\frac{d}{dx} \\left( 3x^{5/3} \\right)", "5x^{2/3}"],
		["\\frac{d}{dx} \\left( \\frac{4}{x^2} \\right)", "-\\frac{8}{x^3}"],
		["\\frac{d}{dx} \\left( \\frac{1}{x} + \\frac{1}{x^2} \\right)", "-\\frac{1}{x^2} - \\frac{2}{x^3}"],
		["\\frac{d}{dx} \\left( \\sqrt{x^3} \\right)", "\\frac{1}{3\\sqrt[3]{x^2}}"],
		["\\frac{d}{dx} \\left( \\sqrt{x} - x^5 \\right)", "\\frac{1}{2\\sqrt{x}} - 5x^4"]
	],

	// N
	[
		["\\frac{d}{dx} \\left( 2\\sin x + 3\\cos x \\right)", "2 \\cos x - 3 \\sin x"],
		["\\frac{d}{dx} \\left( \\tan x \\right)", "\\sec^2 x"],
		["\\frac{d}{dx} \\left( \\cot x \\right)", "-\\csc^2 x"],
		["\\frac{d}{dx} \\left( \\csc x \\right)", "-\\csc x \\cot x"],
		["\\frac{d}{dx} \\left( \\sec x \\right)", "\\sec x \\tan x"],
		["\\frac{d}{dx} \\left( x^2 \\sin x \\right)", "x^2 \\cos x + 2x \\sin x"],
		["\\frac{d}{dx} \\left( x^2 \\cos x \\right)", "2x \\cos x - x^2 \\sin x"],
		["\\frac{d}{dx} \\left( x^2 \\tan x \\right)", "x^2 \\sec^2 x + 2x \\tan x"],
		["\\frac{d}{dx} \\left( x e^x \\right)", "x e^x + e^x"],
		["\\frac{d}{dx} \\left( x^2 e^x \\right)", "x^2 e^x + 2x e^x"],
		["\\frac{d}{dx} \\left( x^3 e^x \\right)", "x^3 e^x + 3x^2 e^x"],
		["\\frac{d}{dx} \\left( (2x + 1)^2 \\right)", "8x + 4"],
		["\\frac{d}{dx} \\left( (x + 1)^2 \\right)", "2x + 2"],
		["\\frac{d}{dx} \\left( e^x \\sin x \\right)", "e^x \\cos x + e^x \\sin x"],
		["\\frac{d}{dx} \\left( e^x \\cos x \\right)", "e^x \\cos x - e^x \\sin x"]
	],

	// G
	[
		["\\frac{d}{dx} \\left( (x^2 + 2)(x^3 + 1) \\right)", "5x^4 + 6x^2 + 2x"],
		["\\frac{d}{dx} \\left( (x + 1)^3 \\right)", "3x^2 + 6x + 3"],
		["\\frac{d}{dx} \\left( (x + 1)^4 \\right)", "4x^3 + 12x^2 + 12x + 4"],
		["\\frac{d}{dx} \\left( (x + 1)^2 e^x \\right)", "(x^2 + 4x + 3) e^x"],
		["\\frac{d}{dx} \\left( (x + 1)^2 \\sin x \\right)", "(x + 1)^2 \\cos x + (2x + 2) \\sin x"],
		["\\frac{d}{dx} \\left( \\sin x \\cos x \\right)", "\\cos^2 x - \\sin^2 x"],
		["\\frac{d}{dx} \\left( \\sin x \\tan x \\right)", "\\sin x \\sec^2 x + \\sin x"],
		["\\frac{d}{dx} \\left( \\frac{\\sin x}{x} \\right)", "\\frac{x \\cos x - \\sin x}{x^2}"],
		["\\frac{d}{dx} \\left( \\frac{1 - \\cos x}{x} \\right)", "\\frac{x \\sin x + \\cos x - 1}{x^2}"],
		["\\frac{d}{dx} \\left( e^{2x} \\right)", "2e^{2x}"],
		["\\frac{d}{dx} \\left( \\frac{x + 1}{e^x} \\right)", "-\\frac{x}{e^x}"],
		["\\frac{d}{dx} \\left( (2x + 1) \\sin x \\right)", "(2x + 1) \\cos x + 2 \\sin x"],
		["\\frac{d}{dx} \\left( (2x + 1) \\cos x \\right)", "-(2x + 1) \\sin x + 2 \\cos x"],
		["\\frac{d}{dx} \\left( x \\sqrt{x} \\right)", "\\frac{3}{2} \\sqrt{x}"],
		["\\frac{d}{dx} \\left( (2x + 1) e^x \\right)", "(2x + 3) e^x"]
	],

	// O
	[
		["\\frac{d}{dx} \\left( \\frac{x^2 + 1}{e^x} \\right)", "\\frac{2x e^x - (x^2 + 1) e^x}{e^{2x}}"],
		["\\frac{d}{dx} \\left( \\frac{x + 1}{x^2 + 1} \\right)", "\\frac{-x^2 - 2x + 1}{(x^2 + 1)^2}"],
		["\\frac{d}{dx} \\left( \\frac{(x + 1)^2}{x^2 + 1} \\right)", "\\frac{-2x^2 + 2}{(x^2 + 1)^2}"],
		["\\frac{d}{dx} \\left( \\frac{x^2 + 1}{(x + 1)^2} \\right)", "\\frac{2x^2 - 2}{(x + 1)^4}"],
		["\\frac{d}{dx} \\left( \\frac{x^2 + 1}{x + 1} \\right)", "\\frac{x^2 + 2x - 1}{(x + 1)^2}"],
		["\\frac{d}{dx} \\left( \\frac{e^x}{2x + 1} \\right)", "\\frac{(2x - 1) e^x}{(2x + 1)^2}"],
		["\\frac{d}{dx} \\left( e^x \\sqrt{x} \\right)", "e^x \\left(\\sqrt{x} + \\frac{1}{2\\sqrt{x}}\\right)"],
		["\\frac{d}{dx} \\left( \\sqrt{x} \\sin x \\right)", "\\sqrt{x} \\cos x + \\frac{\\sin x}{2 \\sqrt{x}}"],
		["\\frac{d}{dx} \\left( \\sqrt{x} \\cos x \\right)", "\\frac{\\cos x}{2 \\sqrt{x}} - \\sqrt{x} \\sin x"],
		["\\frac{d}{dx} \\left( \\frac{\\sqrt{x}}{x + 1} \\right)", "\\frac{\\frac{1}{2 \\sqrt{x}} - \\frac{\\sqrt{x}}{2}}{(x + 1)^2}"],
		["\\frac{d}{dx} \\left( \\frac{x + 1}{\\sqrt{x}} \\right)", "\\frac{1}{2} x^{1/2} - \\frac{1}{2} x^{-3/2}"],
		["\\frac{d}{dx} \\left( \\frac{x}{x^2 + 1} \\right)", "\\frac{1 - x^2}{(x^2 + 1)^2}"],
		["\\frac{d}{dx} \\left( \\tan^2 x \\right)", "2 \\tan x \\sec^2 x"],
		["\\frac{d}{dx} \\left( \\sin^2 x + \\cos^2 x + \\tan x + e^x \\right)", "\\sec^2 x + e^x"],
		["\\frac{d}{dx} \\left( x \\sin^2 x \\right)", "\\sin^2 x + 2x \\sin x \\cos x"]
	]
]
