const CodeTemplate = require('../services/CodeTemplate');

const getComponentIndexTemplate = (params) => {
	const componentIndexTemplate = new CodeTemplate();

	componentIndexTemplate
		.addContentBlock([
			[`import ${params.componentName} from "./${params.componentName}";`],
			[`export default ${params.componentName};`]
		]);

	return componentIndexTemplate.getContent();
}

module.exports = getComponentIndexTemplate;