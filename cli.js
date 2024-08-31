const program = require('commander');
const fs  = require('fs');
const path = require('path');

const getComponentContent = require('./src/contents/get-component-template');
const getComponentPropsContent = require('./src/contents/get-component-props-template');
const getComponentIndexContent = require('./src/contents/get-component-index-template');

console.log(getComponentContent({
	componentName: 'Test',
	usingStyles: {
		type: 'scss'
	},
	usingProps: true
}))

program
	.name('react-cli')
	.description('CLI to create directories with React components')
	.version('0.0.1')

program.command('g')
  .description('Create directory with React component')
	.argument('<dir>', 'Folder for Component')
	.option('-p|--props', 'Create Component with props')
	.option('-s|--styles <type>', 'Create Component with module styles')
  .action((dir, opts) => {
		const componentName = path.basename(dir);

		fs.mkdirSync(dir, { recursive: true	});

		fs.writeFileSync(
			path.join(dir, `${componentName}.tsx`),
			getComponentContent({
				componentName,
				props: opts.props,
				styles: opts.styles
			})
		);

		if (opts.props) {
			fs.writeFileSync(
				path.join(dir, `${componentName}.interface.ts`),
				getComponentPropsContent({componentName})
			)
		}

		if (opts.styles) {
			fs.writeFileSync(
				path.join(dir, `${componentName}.module.${opts.styles}`),
				''
			);
		}

		fs.writeFileSync(
			path.join(dir, 'index.ts'),
			getComponentIndexContent({componentName})
		);

    console.log(`Component '${componentName}' created successfully`);
  });

program.parse(process.argv);