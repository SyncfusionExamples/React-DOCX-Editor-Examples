import { createRoot } from 'react-dom/client';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Ribbon
} from '@syncfusion/ej2-react-documenteditor';
import './index.css';

DocumentEditorContainerComponent.Inject(Ribbon);

const WebMCPApp = () => {
  const webMcpSettings1 = {
    name: 'documentEditor1'
  };

  const webMcpSettings2 = {
    name: 'documentEditor2'
  };

  let container1;
  let container2;

  React.useEffect(() => {
    if (container1) {
      container1.documentEditor.documentName = 'Document 1';
    }

    if (container2) {
      container2.documentEditor.documentName = 'Document 2';
    }

    document.title = 'WebMCP Multi-instance Demo - DocumentEditorContainer';
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        gap: '10px',
        height: 'calc(100vh - 16px)'
      }}
    >
      <div style={{ width: '50%' }}>
        <DocumentEditorContainerComponent
          id="container1"
          ref={(scope) => {
            container1 = scope;
          }}
          serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
          height="100%"
          enableToolbar={true}
          toolbarMode="Ribbon"
          enableWebMcp={true}
          webMcpSettings={webMcpSettings1}
        />
      </div>

      <div style={{ width: '50%' }}>
        <DocumentEditorContainerComponent
          id="container2"
          ref={(scope) => {
            container2 = scope;
          }}
          serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
          height="100%"
          enableToolbar={true}
          toolbarMode="Ribbon"
          enableWebMcp={true}
          webMcpSettings={webMcpSettings2}
        />
      </div>
    </div>
  );
};

export default WebMCPApp;

createRoot(document.getElementById('sample')).render(<WebMCPApp />);
