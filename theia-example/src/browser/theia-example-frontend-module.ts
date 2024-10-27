/**
 * Generated using theia-extension-generator
 */
import { TheiaExampleCommandContribution, TheiaExampleMenuContribution } from './theia-example-contribution';
import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import { ContainerModule } from '@theia/core/shared/inversify';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(TheiaExampleCommandContribution);
    bind(MenuContribution).to(TheiaExampleMenuContribution);
});
