const CodeTemplate = require('../services/CodeTemplate');

const getComponentPropsContent = (params) => {
	const componentPropsTemplate = new CodeTemplate();

	componentPropsTemplate
		.addContentBlock([
			[`export interface ${params.componentName}Props {`],
			['	'],
			['}']
		]);

	return componentPropsTemplate.getContent();
};

module.exports = getComponentPropsContent;