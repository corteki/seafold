
import { Container, ContainerModule } from "inversify";
import { 
	PagePanelModel,
	PreviewModel,
	ResourceFactory
} from '@seafold/user-interface';
import { EventHandlerContext } from 'apps/editor/src/app/contexts/EventHandlerContext';
import { buildProviderModule } from "inversify-binding-decorators";

export const container = new Container();
container.load(
	new ContainerModule(bind => {
		bind(PagePanelModel).toSelf();
		bind(PreviewModel).toSelf();
		bind(ResourceFactory).toSelf();
		bind(EventHandlerContext).toSelf();
	}),
	buildProviderModule()
);
