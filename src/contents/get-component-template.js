const CodeTemplate = require('../services/CodeTemplate');

const getComponentContent = (params) => {
	const componentTemplate = new CodeTemplate();

	componentTemplate
		.addLine(`import React from "react";`)
		.enter();

	if (params.props) {
		componentTemplate
			.addLine(`import { ${params.componentName}Props } from "./${params.componentName}.interface.ts";`);

		if (!params.styles) {
			componentTemplate.enter();
		}
	}

	if (params.styles) {
		componentTemplate
			.addLine(`import styles from "./${params.componentName}.module.${params.styles}";`)
			.enter();
	}

	const defineComponentContent = params.props
		? `const ${params.componentName}: React.FC<${params.componentName}Props> = ({ }) => {`
		: `const ${params.componentName}: React.FC = ({ }) => {`

	componentTemplate
		.addContentBlock([
			[defineComponentContent],
			["	return ("],
			[`		${params.componentName}`],
			["	);"],
			[`};`]
		])
		.enter()
		.addLine(`export default ${params.componentName};`);

	return componentTemplate.getContent();
}

module.exports = getComponentContent;