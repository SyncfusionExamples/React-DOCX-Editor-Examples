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

  const beforeWebMcpToolExecute = (args) => {
    const { toolName, toolArgs } = args;

    console.log(`[WebMCP] Executing: ${toolName}`, toolArgs);

    const commandName = toolName?.includes('_')
      ? toolName.substring(toolName.indexOf('_') + 1)
      : toolName;

    if (commandName === 'saveDocument') {
      args.cancel = true;
      args.cancellationResponse = 'The saveDocument operation has been restricted.';
    }
  };

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
          beforeWebMcpToolExecute={beforeWebMcpToolExecute}
        >
        </DocumentEditorContainerComponent>      
    </div>
  );
};
export default WebMCPApp;
createRoot(document.getElementById('sample')).render(<WebMCPApp />);
