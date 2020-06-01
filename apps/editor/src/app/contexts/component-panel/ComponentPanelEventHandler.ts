export class ComponentPanelEventHandler {

  handleDrag = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', e.currentTarget.id);
  }
  
}