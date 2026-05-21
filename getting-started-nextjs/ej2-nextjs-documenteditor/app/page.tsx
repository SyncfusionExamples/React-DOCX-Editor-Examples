'use client'
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);

export default function Home() {
  return (
      <DocumentEditorContainerComponent 
        id="container" 
        height="590px"
        // Use the following service URL only for demo purposes
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
        enableToolbar={true}>
      </DocumentEditorContainerComponent>
  )
}