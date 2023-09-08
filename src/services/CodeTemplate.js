class CodeTemplate {
	constructor(initialContent = "") {
		this.content = initialContent;
	};

	enter() {
		this.content += "\n";
		return this;
	}

	addLine(content) {
		this.content += content + "\n";
		return this;
	}

	addContentBlock(contentBlock) {
		contentBlock.forEach(content => {
			this.content += content + "\n";
		});
		return this;
	}

	getContent() {
		return this.content;
	}
}

module.exports = CodeTemplate;