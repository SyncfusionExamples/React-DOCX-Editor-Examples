import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { DocumentEditorContainerComponent, Ribbon } from '@syncfusion/ej2-react-documenteditor';
import './index.css';
DocumentEditorContainerComponent.Inject(Ribbon);

// tslint:disable:max-line-length
const WebMCPApp = () => {
  let webMcpSettings = {
    name: 'container'
  };
  let container;

  React.useEffect(() => {
    if(container){
        container.documentEditor.documentName = 'WebMCP Tool Demo';
    }
    document.title = 'WebMCP Tool Demo - DocumentEditorContainer'; 
  }, []);

  return (
     <div style={{ height: 'calc(100vh - 16px)' }}>
        <DocumentEditorContainerComponent
          id="container"
          ref={(scope) => { container = scope; }}
          serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
          height="100%"
          enableToolbar={true}
          toolbarMode="Ribbon"
          enableWebMcp={true}
          webMcpSettings={webMcpSettings}
        >
        </DocumentEditorContainerComponent>      
    </div>
  );
};
export default WebMCPApp;
createRoot(document.getElementById('sample')).render(<WebMCPApp />);
