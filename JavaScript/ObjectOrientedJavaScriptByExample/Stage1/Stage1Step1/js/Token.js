class Token {
	constructor(index, owner) {
		this.owner = owner;
		this.id = `token-${index}-${owner.id}`;
		this.dropped = false;
	}
}

// A token moving left, right, or dropping into a space is an example of an object behavior.