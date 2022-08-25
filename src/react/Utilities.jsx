
export function typewriterAnimation(string, duration, delay) {
	return string.split("").map((letter, index) => {
		return <span style={{animationDelay: (duration * index) + delay + "ms"}} key={index}>{letter}</span>
	});
}