
import { Container, ContainerModule } from "inversify";
import { 
	PagePanelModel,
	PreviewModel,
	ResourceFactory
} from '@seafold/user-interface';
import { App } from 'apps/editor/src/app/app';
import { buildProviderModule } from "inversify-binding-decorators";

export const container = new Container();
container.load(
	new ContainerModule(bind => {
		bind(PagePanelModel).toSelf();
		bind(PreviewModel).toSelf();
		bind(ResourceFactory).toSelf();
		bind(App).toSelf();
	}),
	buildProviderModule()
);
